import React, { useState } from "react";
import "../App.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Đăng Ký Nhận Thông Tin Mới Nhất</h2>
        <p className="newsletter-desc">Nhận các ưu đãi, tin tức và tài nguyên học tập miễn phí từ chúng tôi.</p>
        {submitted ? (
          <div className="newsletter-success">Cảm ơn bạn đã đăng ký!</div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Nhập email của bạn..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button className="newsletter-btn" type="submit">Đăng ký</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection; 