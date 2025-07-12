import mockProducts from '../data/mockProducts';

// Hàm giả lập API gợi ý sản phẩm
export function fetchSuggestions({ userId, viewedIds = [], favoriteIds = [] }) {
  return new Promise((resolve, reject) => {
    // Giả lập delay API
    setTimeout(() => {
      // Giả lập random lỗi (20%)
      if (Math.random() < 0.2) {
        reject(new Error('Không thể lấy gợi ý lúc này.'));
        return;
      }
      // Gợi ý ưu tiên sản phẩm chưa xem/chưa thích
      const suggested = mockProducts.filter(
        p => !viewedIds.includes(p.id) && !favoriteIds.includes(p.id)
      );
      // Nếu tất cả đã xem/hay thích, trả về random 3 sản phẩm
      const result = suggested.length > 0
        ? suggested.slice(0, 3)
        : mockProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
      resolve(result);
    }, 1200); // 1.2s delay
  });
}
