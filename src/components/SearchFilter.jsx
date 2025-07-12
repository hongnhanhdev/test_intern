import React from "react";
import "../App.css";

const priceOptions = [
  { value: "all", label: "Tất cả" },
  { value: "lt500", label: "< 500K" },
  { value: "500-1000", label: "500K – 1 triệu" },
  { value: "gt1000", label: "> 1 triệu" },
];

const SearchFilter = ({ search, setSearch, priceRange, setPriceRange }) => {
  return (
    <div className="search-filter-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Tìm kiếm khoá học, tài liệu..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select
        className="price-select"
        value={priceRange}
        onChange={e => setPriceRange(e.target.value)}
      >
        {priceOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;