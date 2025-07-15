import React from "react";
import "../App.css";
import ProductCard from "./ProductCard";
import SearchFilter from "./SearchFilter";
import SuggestionButton from "./SuggestionButton";


const CoursesSection = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  suggestionProducts,
  onSuggest,
  favorites,
  onToggleFavorite,
  filteredProducts,
  onViewDetail
}) => (
  <section className="courses-section-outer">
    <h2>Bạn đang muốn tìm khóa học nào ?</h2>
    <SearchFilter
      search={search}
      setSearch={setSearch}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
    />
 
    <section className="courses-section-outer">
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div style={{ color: "#888", fontSize: 18, marginTop: 32 }}>Không tìm thấy sản phẩm phù hợp.</div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        )}
      </div>
    </section>
    <SuggestionButton
      userId={1}
      viewedIds={[]}
      favoriteIds={favorites}
      onSuggest={onSuggest}
    />
    {suggestionProducts && suggestionProducts.length > 0 && (
      <section className="courses-suggestion-section">
        <h2>Khóa học gợi ý cho bạn</h2>
        <div className="product-grid">
          {suggestionProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>
    )}
  </section>
);

export default CoursesSection; 