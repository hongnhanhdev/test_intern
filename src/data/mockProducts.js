const mockProducts = [
  {
    id: 1,
    name: "Khóa học Tiếng Anh giao tiếp với người bản xứ",
    price: 1200000,
    image: "/assets/eng.jpg",
    shortDescription: "Nâng cao kỹ năng giao tiếp tiếng Anh với giáo viên bản xứ.",
    longDescription: "Khóa học này giúp bạn tự tin giao tiếp tiếng Anh trong mọi tình huống với sự hướng dẫn của giáo viên bản xứ. Bao gồm các bài học thực tế, luyện phát âm, phản xạ nhanh và các buổi thực hành nhóm.",
    rating: 4.8
  },
  {
    id: 2,
    name: "Khóa học: Luyện thi IELTS cấp tốc 6.5+",
    price: 950000,
    image: "/assets/ielts.jpg",
    shortDescription: "Khóa học: Chinh phục IELTS 6.5+ trong 2 tháng.",
    longDescription: "Khóa học tập trung vào các kỹ năng làm bài thi IELTS, chiến lược làm bài, luyện đề thực tế và hỗ trợ cá nhân hóa lộ trình học cho từng học viên.",
    rating: 4.6
  },
  {
    id: 3,
    name: "Khóa học Luyện thi TOEIC 700+",
    price: 850000,
    image: "/assets/toeic.jpg",
    shortDescription: "Luyện thi TOEIC hiệu quả, đạt mục tiêu 700+.",
    longDescription: "Khóa học cung cấp kiến thức và kỹ năng làm bài thi TOEIC, luyện tập các dạng đề thực tế, mẹo làm bài và hỗ trợ cá nhân hóa lộ trình học giúp bạn tự tin đạt điểm cao trong kỳ thi TOEIC.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Khóa học Tiếng Anh giao tiếp cấp tốc",
    price: 700000,
    image: "/assets/eng_spk.png",
    shortDescription: "Giao tiếp tiếng Anh cấp tốc cho người bận rộn.",
    longDescription: "Khóa học tập trung vào các tình huống giao tiếp thực tế, luyện phản xạ nhanh, phát âm chuẩn và xây dựng vốn từ vựng cần thiết giúp bạn tự tin giao tiếp tiếng Anh chỉ sau 1 tháng.",
    rating: 4.6
  },
  {
    id: 5,
    name: "Giáo trình Toán tư duy cho trẻ 6-10 tuổi",
    price: 450000,
    image: "/assets/tuduytoanhoc.jpg",
    shortDescription: "Phát triển tư duy logic và sáng tạo cho trẻ nhỏ.",
    longDescription: "Bộ giáo trình gồm các bài tập, trò chơi toán học giúp trẻ phát triển tư duy logic, khả năng giải quyết vấn đề và niềm yêu thích với môn Toán.",
    rating: 4.7
  },
  {
    id: 6,
    name: "Tài liệu luyện nghe tiếng Nhật N3-N2",
    price: 300000,
    image: "/assets/tiengnhat.jpg",
    shortDescription: "Tổng hợp bài nghe thực tế, sát đề thi JLPT.",
    longDescription: "Tài liệu gồm các bài nghe thực tế, hội thoại, tin tức, giúp học viên luyện tập kỹ năng nghe hiểu tiếng Nhật, chuẩn bị tốt cho kỳ thi JLPT N3-N2.",
    rating: 4.5
  },
  {
    id: 7,
    name: "Khóa học Lập trình Python cơ bản đến nâng cao",
    price: 800000,
    image: "/assets/python.jpg",
    shortDescription: "Học lập trình Python từ A-Z, thực hành dự án thực tế.",
    longDescription: "Khóa học cung cấp kiến thức từ cơ bản đến nâng cao về Python, hướng dẫn xây dựng các dự án thực tế, phù hợp cho người mới bắt đầu và muốn nâng cao kỹ năng lập trình.",
    rating: 4.9
  },
  {
    id: 8,
    name: "Lớp học trực tuyến: Kỹ năng thuyết trình chuyên nghiệp",
    price: 600000,
    image: "/assets/thuyet-trinh-dinh-cao.jpg",
    shortDescription: "Rèn luyện kỹ năng thuyết trình, tự tin trước đám đông.",
    longDescription: "Lớp học giúp bạn xây dựng phong thái tự tin, kỹ năng trình bày, sử dụng ngôn ngữ cơ thể và xử lý tình huống khi thuyết trình trước nhiều đối tượng khác nhau.",
    rating: 4.7
  }
];

export default mockProducts;
