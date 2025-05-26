# Cấu trúc thư mục `components`

## 1. `custom-ui/`
- **Mục đích**: Chứa các component UI do dev tự viết.
- **Đặc điểm**:
  - Các component chung (Button, Input, Modal…) viết theo phong cách và yêu cầu riêng của dự án.
  - Chứa logic style, interactions, và props tùy chỉnh.
  - Không phụ thuộc trực tiếp vào thư viện bên ngoài.

## 2. `ui/`
- **Mục đích**: Chứa các component gốc từ thư viện `shadcn/ui` và các bản tùy biến của chúng.
- **Đặc điểm**:
  - Giúp dễ dàng cập nhật khi thư viện `shadcn/ui` nâng cấp.
  - Phân biệt rõ ràng với các component `custom-ui` tự viết.

## 3. `layouts/`
- **Mục đích**: Chứa các layout khung (templates) dùng chung cho các page.
- **Đặc điểm**:
  - Định nghĩa cấu trúc chung của trang (header, footer...).
  - Chứa logic điều khiển trạng thái chung nếu có (ví dụ: đóng/mở sidebar).