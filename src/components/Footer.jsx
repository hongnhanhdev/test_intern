import React from "react";
import "../App.css";

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-content">
      <div className="footer-logo">UDEMY AI DEMO</div>
      <div className="footer-desc">Nền tảng học tập trực tuyến hiện đại, đồng hành cùng bạn trên con đường chinh phục tri thức.</div>
      <div className="footer-links">
        <a href="/" className="footer-link">Trang chủ</a>
        <a href="/courses" className="footer-link">Khóa học</a>
        <a href="/news" className="footer-link">Tin tức</a>
        <a href="/contact" className="footer-link">Liên hệ</a>
      </div>
      <div className="footer-contact">
        <span>Email: support.hnhanhdev@udemyai.vn</span> | <span>Hotline: 0123 456 789</span>
      </div>
    </div>
    <div className="footer-copyright">
      © {new Date().getFullYear()} UDEMY AI DEMO. All rights reserved.
    </div>
  </footer>
);

export default Footer; 