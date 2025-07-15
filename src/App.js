import React, { useState, useEffect } from "react";
import Favorites from "./pages/Favorites";
import HistoryList from "./pages/HistoryList";
import Toast from "./components/Toast";
import Chatbot from "./components/Chatbot";
import mockProducts from "./data/mockProducts";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CoursesSection from "./components/CoursesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import FAQSection from "./components/FAQSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import { useRef } from "react";

function AppContent() {
  const [favorites, setFavorites] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [viewedIds, setViewedIds] = useState([]);
  const [suggestionProducts, setSuggestionProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Ref cho scroll đến section
  const coursesRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }, [location.pathname]);

  // Scroll spy logic - chỉ chạy ở trang chủ
  useEffect(() => {
    if (location.pathname !== "/") return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const coursesTop = coursesRef.current?.offsetTop || 0;
      const newsTop = newsRef.current?.offsetTop || 0;
      const contactTop = contactRef.current?.offsetTop || 0;
      const offset = 80; // navbar height
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 10) {
        setActiveMenu("contact");
      } else if (scrollY + offset < coursesTop) {
        setActiveMenu("home");
      } else if (scrollY + offset < newsTop) {
        setActiveMenu("courses");
      } else if (scrollY + offset < contactTop) {
        setActiveMenu("news");
      } else {
        setActiveMenu("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
    <>
      <Navbar
        activeMenu={activeMenu}
        onScrollToCourses={() => coursesRef.current?.scrollIntoView({ behavior: "smooth" })}
        onScrollToNews={() => newsRef.current?.scrollIntoView({ behavior: "smooth" })}
        onScrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection />
            <div ref={coursesRef}>
              <CoursesSection
                search={search}
                setSearch={setSearch}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                suggestionProducts={suggestionProducts}
                onSuggest={handleSuggest}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                filteredProducts={filteredProducts}
                onViewDetail={handleViewDetail}
              />
            </div>
            <TestimonialsSection />
            <div ref={newsRef}>
              <NewsSection />
            </div>
            <FAQSection />
            <div ref={contactRef}>
              <NewsletterSection />
            </div>
            <Footer />
          </>
        } />
        <Route 
          path="/favorites" 
          element={
            <Favorites
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onViewDetail={handleViewDetail}
            />
          } 
        />
        <Route 
          path="/history" 
          element={
            <HistoryList
              viewedIds={viewedIds}
              onViewDetail={handleViewDetail}
              onToggleFavorite={handleToggleFavorite}
              favorites={favorites}
            />
          } 
        />
      </Routes>
      {modalProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content modal-detail-flex" onClick={e => e.stopPropagation()}>
            <div className="modal-detail-img">
              <img src={modalProduct.image} alt={modalProduct.name} style={{ width: "100%", borderRadius: 12 }} />
            </div>
            <div className="modal-detail-info">
              <h2>{modalProduct.name}</h2>
              <div style={{ color: "#ff6600", fontWeight: 600, fontSize: 18 }}>
                {modalProduct.price.toLocaleString("vi-VN")}₫
              </div>
              <div style={{ margin: "8px 0" }}>{modalProduct.longDescription}</div>
              <div>Đánh giá: <b>{modalProduct.rating} ⭐</b></div>
              <button onClick={handleCloseModal} style={{ marginTop: 16, padding: "8px 18px", borderRadius: 8, background: "#ff6600", color: "#fff", border: "none", fontWeight: 500, cursor: "pointer" }}>Đóng</button>
            </div>
          </div>
        </div>
      )}
      <Toast message={toastMsg} show={showToast} onClose={() => setShowToast(false)} />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
