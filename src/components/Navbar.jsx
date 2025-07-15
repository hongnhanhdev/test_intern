import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ activeMenu, onScrollToCourses, onScrollToNews, onScrollToContact }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  // Helper: chuyển về / rồi scroll section (nếu không ở /)
  const goHomeAndScroll = (scrollFn) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (scrollFn) scrollFn();
      }, 100); // delay nhỏ để đảm bảo đã về /
    } else {
      if (scrollFn) scrollFn();
    }
    setIsMenuOpen(false); // Đóng menu mobile khi chọn
  };

  const handleScrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Đóng menu mobile khi chọn
  };

  // Xác định menu active dựa trên location và activeMenu
  const getActiveMenuClass = (menuName) => {
    if (location.pathname === "/favorites" && menuName === "favorites") {
      return "navbar-link active";
    }
    if (location.pathname === "/history" && menuName === "history") {
      return "navbar-link active";
    }
    if (location.pathname === "/" && activeMenu === menuName) {
      return "navbar-link active";
    }
    return "navbar-link";
  };

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar-landing">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Hamburger hoặc nút đóng - chỉ hiện trên mobile, đặt bên trái */}
        {!isMenuOpen ? (
          <div className="navbar-hamburger" onClick={() => setIsMenuOpen(true)}>
            <span style={{ fontSize: 28, userSelect: "none" }}>&#9776;</span>
          </div>
        ) : (
          <div className="navbar-hamburger" onClick={() => setIsMenuOpen(false)}>
            {/* <span style={{ fontSize: 32, userSelect: "none" }}>&#10005;</span> */}
          </div>
        )}
        <div className="navbar-logo" style={{ cursor: "pointer" }} onClick={handleScrollToTop}>
           UDEMY AI DEMO
        </div>
      </div>
      {/* Menu ngang cho desktop */}
      <div className="navbar-menu">
        <button className={getActiveMenuClass("home")} onClick={handleScrollToTop} style={{ background: "none", border: "none" }}>Trang chủ</button>
        <button className={getActiveMenuClass("courses")} onClick={() => goHomeAndScroll(onScrollToCourses)} style={{ background: "none", border: "none" }}>Khóa học</button>
        <button className={getActiveMenuClass("news")} onClick={() => goHomeAndScroll(onScrollToNews)} style={{ background: "none", border: "none" }}>Tin tức</button>
        <button className={getActiveMenuClass("contact")} onClick={() => goHomeAndScroll(onScrollToContact)} style={{ background: "none", border: "none" }}>Liên hệ</button>
        <button className={getActiveMenuClass("favorites")} onClick={() => { navigate("/favorites"); setIsMenuOpen(false); }} style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: "1.1em", marginRight: 2 }}></span> Khóa học yêu thích
        </button>
        <button className={getActiveMenuClass("history")} onClick={() => { navigate("/history"); setIsMenuOpen(false); }} style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: "1.1em", marginRight: 2 }}></span> Lịch sử xem
        </button>
      </div>
    
      {/* Overlay menu mobile */}
      {isMenuOpen && (
        <div className="navbar-overlay">
          <div className="navbar-menu-mobile" ref={menuRef}>
            <button className={getActiveMenuClass("home")} onClick={handleScrollToTop}>Trang chủ</button>
            <button className={getActiveMenuClass("courses")} onClick={() => goHomeAndScroll(onScrollToCourses)}>Khóa học</button>
            <button className={getActiveMenuClass("news")} onClick={() => goHomeAndScroll(onScrollToNews)}>Tin tức</button>
            <button className={getActiveMenuClass("contact")} onClick={() => goHomeAndScroll(onScrollToContact)}>Liên hệ</button>
            <button className={getActiveMenuClass("favorites")} onClick={() => { navigate("/favorites"); setIsMenuOpen(false); }}><span style={{ fontSize: "1.1em", marginRight: 2 }}></span> Khóa học yêu thích</button>
            <button className={getActiveMenuClass("history")} onClick={() => { navigate("/history"); setIsMenuOpen(false); }}><span style={{ fontSize: "1.1em", marginRight: 2 }}></span> Lịch sử xem</button>
            <button className={getActiveMenuClass("account")} onClick={() => { navigate("/#"); setIsMenuOpen(false); }}><span style={{ fontSize: "1.1em", marginRight: 2 }}></span> Tài Khoản</button>


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 