import React, { useState } from "react";
import { fetchSuggestions } from "../api/suggestions";

const SuggestionButton = ({ userId, viewedIds, favoriteIds, onSuggest }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSuggest = async () => {
    setLoading(true);
    setError("");
    try {
      const products = await fetchSuggestions({ userId, viewedIds, favoriteIds });
      onSuggest(products);
    } catch (err) {
      setError(err.message || "Đã có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "18px 0 18px 0" }}>
      <button
        onClick={handleSuggest}
        disabled={loading}
        className="suggest-btn"
      >
        {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp"}
      </button>
      {loading && (
        <div className="skeleton-list">
          {[1,2,3].map(i => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      )}
      {error && <div style={{ color: "#e74c3c", marginTop: 8 }}>{error}</div>}
    </div>
  );
};

export default SuggestionButton; 