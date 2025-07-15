import React from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from "../data/mockProducts";

const HistoryList = ({ viewedIds = [], onViewDetail, onToggleFavorite, favorites = [] }) => {
  const viewedProducts = (viewedIds || [])
    .slice()
    .reverse()
    .map(id => mockProducts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div style={{ minHeight: "80vh", background: "#f7f7fa" }}>
      <h2 style={{ textAlign: "center", margin: "24px 0 18px 0", color: "#6c3ad1" }}>
        Lịch sử xem sản phẩm
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "12px"
      }}>
        {viewedProducts.length === 0 ? (
          <div style={{ color: "#888", fontSize: 18, marginTop: 32 }}>Bạn chưa xem khóa học nào.</div>
        ) : (
          viewedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              isFavorite={(favorites || []).includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HistoryList; 