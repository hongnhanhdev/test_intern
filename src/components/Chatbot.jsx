import React, { useState, useRef, useEffect } from "react";
import mockProducts from "../data/mockProducts";
import "../App.css";

const KEYWORDS = [
  { key: /tiếng anh|english/i, ids: [1] },
  { key: /ielts/i, ids: [2] },
  { key: /python/i, ids: [5] },
  { key: /toán|math/i, ids: [3] },
  { key: /nhật|jlpt|japanese/i, ids: [4] },
  { key: /thuyết trình|presentation/i, ids: [6] },
];

function getAIReply(text) {
  for (const kw of KEYWORDS) {
    if (kw.key.test(text)) {
      const products = mockProducts.filter(p => kw.ids.includes(p.id));
      return (
        <span>
          Dưới đây là sản phẩm phù hợp bạn có thể quan tâm:<br/>
          {products.map(p => (
            <div key={p.id} style={{margin: '6px 0'}}>
              <b>{p.name}</b> - {p.price.toLocaleString('vi-VN')}₫<br/>
              <span style={{fontSize: '0.97em'}}>{p.shortDescription}</span>
            </div>
          ))}
        </span>
      );
    }
  }
  return "Cảm ơn bạn đã quan tâm! Bạn muốn tìm khoá học hay tài liệu về lĩnh vực nào?";
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Xin chào! Tôi là trợ lý AI. Bạn muốn tìm khoá học hay tài liệu gì?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "ai", text: getAIReply(input) }
      ]);
    }, 700);
  };

  return (
    <>
      {/* Nút mở chat */}
      {!open && (
        <button className="chatbot-fab" onClick={() => setOpen(true)} title="Chat với AI">
          💬
        </button>
      )}
      {/* Box chat */}
      {open && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>Chatbot AI tư vấn sản phẩm</span>
            <button className="chatbot-close" onClick={() => setOpen(false)} title="Đóng">×</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "user" ? "chat-msg user" : "chat-msg ai"}>
                {typeof msg.text === "string" ? msg.text : msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form className="chatbot-input-bar" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Nhập câu hỏi..."
              autoFocus
            />
            <button type="submit">Gửi</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot; 