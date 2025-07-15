import React from "react";
import "../App.css";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Tôi rất hài lòng với chất lượng khóa học và sự hỗ trợ tận tình từ giảng viên. Nhờ đó tôi đã tự tin hơn rất nhiều!"
  },
  {
    name: "Trần Thị B",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Nội dung bài giảng dễ hiểu, thực tế. Giao diện học tập hiện đại, dễ sử dụng. Tôi sẽ giới thiệu cho bạn bè!"
  },
  {
    name: "Lê Minh C",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content: "Khóa học rất bổ ích, giúp tôi nâng cao kỹ năng và đạt kết quả tốt trong công việc."
  }
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-title">Được Yêu Thích Bởi Học Viên</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
          <div className="testimonial-content">"{t.content}"</div>
          <div className="testimonial-name">{t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 