import React from "react";
import "../App.css";

const faqs = [
  {
    question: "Làm thế nào để đăng ký khóa học?",
    answer: "Bạn chỉ cần nhấn vào nút 'Đăng ký ngay' ở mỗi khóa học và làm theo hướng dẫn."
  },
  {
    question: "Tôi có thể học trên điện thoại không?",
    answer: "Nền tảng hỗ trợ học trên mọi thiết bị: máy tính, điện thoại, máy tính bảng."
  },
  {
    question: "Có được hoàn tiền nếu không hài lòng?",
    answer: "Bạn được hoàn tiền 100% trong 7 ngày nếu không hài lòng về chất lượng khóa học."
  },
  {
    question: "Tôi cần hỗ trợ thì liên hệ ở đâu?",
    answer: "Bạn có thể liên hệ qua hotline, email hoặc chat trực tuyến 24/7 trên website."
  }
];

const FAQSection = () => (
  <section className="faq-section">
    <h2 className="faq-title">Các Câu Hỏi Thường Gặp</h2>
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className="faq-card" key={i}>
          <div className="faq-icon">❓</div>
          <div className="faq-q">{f.question}</div>
          <div className="faq-a">{f.answer}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQSection; 