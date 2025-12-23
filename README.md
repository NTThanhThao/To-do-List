# 🚀 Task Master Pro - To-do List Application

**Task Master Pro** là một ứng dụng quản lý công việc hiện đại, được xây dựng để tối ưu hóa năng suất cá nhân. Dự án tập trung vào trải nghiệm người dùng mượt mà, giao diện chuyên nghiệp và hỗ trợ chế độ Dark Mode linh hoạt.

![Image of Modern Todo List UI with Dark Mode]

## ✨ Tính năng nổi bật

- **Quản lý công việc (CRUD):** Thêm, xóa và đánh dấu hoàn thành nhiệm vụ nhanh chóng.
- **Tìm kiếm thời gian thực:** Bộ lọc tìm kiếm thông minh giúp định vị công việc ngay lập tức.
- **Phân loại trạng thái:** Lọc danh sách theo: *Tất cả*, *Đang làm*, và *Đã xong*.
- **Chế độ Dark Mode:** Chuyển đổi giao diện Sáng/Tối tùy thích, bảo vệ mắt và tiết kiệm pin.
- **Dữ liệu bền vững:** Tích hợp `LocalStorage` để lưu trữ dữ liệu ngay cả khi tải lại trang.
- **Giao diện Responsive:** Hiển thị hoàn hảo trên mọi thiết bị từ Mobile đến Desktop.
- **Hiệu ứng mượt mà:** Sử dụng Tailwind CSS Transitions mang lại cảm giác cao cấp.

## 🛠 Công nghệ sử dụng

- **React.js (Vite):** Thư viện chính để xây dựng giao diện và quản lý Component.
- **Tailwind CSS:** Framework CSS hỗ trợ thiết kế giao diện nhanh và responsive.
- **React Icons:** Bộ icon SVG đa dạng (FiSearch, FiMoon, FiSun...).
- **LocalStorage API:** Quản lý dữ liệu người dùng phía trình duyệt.

## 📐 Kiến trúc dự án

Dự án được tổ chức theo cấu trúc Component hóa rõ ràng để dễ dàng bảo trì và mở rộng:

```text
src/
├── components/
│   ├── TodoForm.jsx    # Component xử lý nhập dữ liệu
│   ├── TodoList.jsx    # Component bao ngoài và bộ lọc
│   └── TodoItem.jsx    # Component hiển thị từng dòng nhiệm vụ
├── App.jsx             # Nơi quản lý State tổng và Logic Theme
├── main.jsx            # Điểm khởi đầu của ứng dụng
└── index.css           # Cấu hình Tailwind và Font chữ
