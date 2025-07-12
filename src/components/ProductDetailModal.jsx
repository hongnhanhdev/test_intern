const ProductDetailModal = ({ product, onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <p>Đánh giá: {product.rating}/5</p>
      <button onClick={onClose}>Đóng</button>
    </div>
  </div>
);