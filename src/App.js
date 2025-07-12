import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchFilter from "./components/SearchFilter";
import Favorites from "./pages/Favorites";
import SuggestionButton from "./components/SuggestionButton";
import HistoryList from "./pages/HistoryList";
import Toast from "./components/Toast";
import Chatbot from "./components/Chatbot";
import mockProducts from "./data/mockProducts";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [currentPage, setCurrentPage] = useState("home");
  const [viewedIds, setViewedIds] = useState([]);
  const [suggestionProducts, setSuggestionProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      setToastMsg(isFav ? "Đã bỏ khỏi yêu thích" : "Đã thêm vào yêu thích");
      setShowToast(true);
      return isFav ? prev.filter((fid) => fid !== id) : [...prev, id];
    });
  };

  const handleViewDetail = (product) => {
    setModalProduct(product);
    setViewedIds((prev) =>
      prev.includes(product.id) ? prev : [...prev, product.id]
    );
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  // Lọc sản phẩm theo search và price
  const filteredProducts = mockProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase());
    let matchPrice = true;
    if (priceRange === "lt500") matchPrice = product.price < 500000;
    else if (priceRange === "500-1000") matchPrice = product.price >= 500000 && product.price <= 1000000;
    else if (priceRange === "gt1000") matchPrice = product.price > 1000000;
    return matchName && matchPrice;
  });

  // Xử lý gợi ý sản phẩm
  const handleSuggest = (products) => {
    setSuggestionProducts(products);
  };

  return (
    <div className="App" style={{ background: "#f7f7fa", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, margin: "18px 0 0 0" }}>
        <button
          className={currentPage === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setCurrentPage("home")}
        >
          Trang chủ
        </button>
        <button
          className={currentPage === "favorites" ? "nav-btn active" : "nav-btn"}
          onClick={() => setCurrentPage("favorites")}
        >
          Yêu thích ({favorites.length})
        </button>
        <button
          className={currentPage === "history" ? "nav-btn active" : "nav-btn"}
          onClick={() => setCurrentPage("history")}
        >
          Lịch sử xem
        </button>
      </div>
      <h1 style={{ textAlign: "center", margin: "18px 0 12px 0", color: "#ff6600" }}>
        Sàn giáo dục thương mại điện tử
      </h1>
      {currentPage === "home" && (
        <>
          <SearchFilter
            search={search}
            setSearch={setSearch}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <SuggestionButton
            userId={1}
            viewedIds={viewedIds}
            favoriteIds={favorites}
            onSuggest={handleSuggest}
          />
          {suggestionProducts.length > 0 && (
            <div style={{
              margin: "0 auto 18px auto",
              maxWidth: 900,
              textAlign: "center"
            }}>
              <h3 style={{ color: "#ff6600", margin: "10px 0 8px 0" }}>Sản phẩm gợi ý cho bạn</h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px"
              }}>
                {suggestionProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={handleViewDetail}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px"
          }}>
            {filteredProducts.length === 0 ? (
              <div style={{ color: "#888", fontSize: 18, marginTop: 32 }}>Không tìm thấy sản phẩm phù hợp.</div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetail={handleViewDetail}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))
            )}
          </div>
        </>
      )}
      {currentPage === "favorites" && (
        <Favorites
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onViewDetail={handleViewDetail}
        />
      )}
      {currentPage === "history" && (
        <HistoryList
          viewedIds={viewedIds}
          onViewDetail={handleViewDetail}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
        />
      )}
      {/* Modal chi tiết sản phẩm */}
      {modalProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalProduct.image} alt={modalProduct.name} style={{ width: "100%", borderRadius: 8 }} />
            <h2>{modalProduct.name}</h2>
            <div style={{ color: "#ff6600", fontWeight: 600, fontSize: 18 }}>
              {modalProduct.price.toLocaleString("vi-VN")}₫
            </div>
            <div style={{ margin: "8px 0" }}>{modalProduct.longDescription}</div>
            <div>Đánh giá: <b>{modalProduct.rating} ⭐</b></div>
            <button onClick={handleCloseModal} style={{ marginTop: 16, padding: "8px 18px", borderRadius: 8, background: "#ff6600", color: "#fff", border: "none", fontWeight: 500, cursor: "pointer" }}>Đóng</button>
          </div>
        </div>
      )}
      <Toast message={toastMsg} show={showToast} onClose={() => setShowToast(false)} />
      <Chatbot />
    </div>
  );
}

export default App;
