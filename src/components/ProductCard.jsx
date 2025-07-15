import React from "react";
import "../App.css";

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "₫";
}

const ProductCard = ({ product, onViewDetail, isFavorite, onToggleFavorite }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <button
          className={`favorite-btn${isFavorite ? " favorited" : ""}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
        >
          {isFavorite ? 
          "❤️" :
          "🤍"}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{formatPrice(product.price)}</div>
        <div className="product-short-desc">{product.shortDescription}</div>
        <div className="product-rating">⭐ {product.rating}</div>
        <button className="detail-btn" onClick={() => onViewDetail(product)}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;