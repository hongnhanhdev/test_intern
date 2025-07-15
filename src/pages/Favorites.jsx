import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import mockProducts from "../data/mockProducts";

function Favorites({ favorites, onToggleFavorite, onViewDetail }) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/favorites") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  // Đảm bảo scroll lên đầu khi refresh trang
  useEffect(() => {
    if (window.location.pathname === "/favorites") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }, []);

  const favoriteProducts = mockProducts.filter(p => favorites.includes(p.id));

  return (
    <div style={{ minHeight: "80vh", background: "#f7f7fa" }}>
      <h2 style={{ textAlign: "center", margin: "24px 0 18px 0", color: "#6c3ad1" }}>
        Sản phẩm yêu thích
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "12px"
      }}>
        {favoriteProducts.length === 0 ? (
          <div style={{ color: "#888", fontSize: 18, marginTop: 32 }}>Bạn chưa có khóa học yêu thích nào.</div>
        ) : (
          favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites; 