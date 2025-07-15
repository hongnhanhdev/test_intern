import React from "react";
import "../App.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Khám Phá Và Đăng Ký Khóa Học Chất Lượng Cao</h1>
        <p className="hero-desc">Chinh phục kiến thức, xây dựng tương lai với các khóa học trực tuyến hiện đại, phù hợp cho mọi lứa tuổi.</p>
        <button className="hero-cta">Đăng ký ngay</button>
      </div>
      <div className="hero-illustration">
        <img 
          src="/assets/education-logo.png" 
          alt="Online Learning" 
          style={{ width: "100%", maxWidth: 340, height: "auto" }} 
        />
      </div>
    </section>
  );
};

export default HeroSection; 