import React from "react";
import "../App.css";

const news = [
  {
    id: 1,
    image: "https://9pm.com.vn/wp-content/uploads/2024/07/Production-house-la-gi.jpg",
    title: "Production house là gì? Quy trình làm việc chuyên nghiệp của Production House",
    desc: "Tìm hiểu về Production House và các bước để tạo nên một sản phẩm chuyên nghiệp.",
    date: "12/06/2025"
  },
  {
    id: 2,
    image: "https://cantho-school.fpt.edu.vn/wp-content/uploads/ky-nang-mem-la-gi-1.jpg",
    title: "5 kỹ năng mềm giúp bạn thành công trong học tập và công việc",
    desc: "Khám phá các kỹ năng mềm quan trọng giúp bạn phát triển bản thân toàn diện.",
    date: "10/06/2025"
  },
  {
    id: 3,
    image: "https://nativex.edu.vn/wp-content/uploads/2021/12/8-bi-quyet-hoc-tieng-anh-cho-nguoi-moi-bat-dau-1.png",
    title: "Bí quyết học ngoại ngữ hiệu quả cho người mới bắt đầu",
    desc: "Những phương pháp học ngoại ngữ giúp bạn tiến bộ nhanh chóng và bền vững.",
    date: "08/06/2025"
  }
];

const NewsSection = () => (
  <section className="news-section">
    <h2 className="news-title">Tin Tức Gần Đây</h2>
    <div className="news-list">
      {news.map((n) => (
        <div className="news-card" key={n.id}>
          <img src={n.image} alt={n.title} className="news-image" />
          <div className="news-info">
            <div className="news-date">{n.date}</div>
            <div className="news-headline">{n.title}</div>
            <div className="news-desc">{n.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NewsSection; 