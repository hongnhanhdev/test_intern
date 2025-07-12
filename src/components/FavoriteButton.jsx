const Favorites = ({ products, favorites }) => {
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  return (
    <div>
      <h2>Sản phẩm yêu thích</h2>
      {favoriteProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};