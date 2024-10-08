# XÂY DỰNG WEBSITE BÁN MÁY TÍNH

## KHOA KỸ THUẬT VÀ CÔNG NGHỆ
### BỘ MÔN CÔNG NGHỆ THÔNG TIN

**Đề tài:** Xây dựng website bán máy tính

**Giáo viên hướng dẫn:** Võ Thành C

**Thời gian thực hiện:** Từ 06/11/2023 đến 31/12/2023

**Sinh viên thực hiện:** Nguyễn Lâm Quốc Bảo – 110121007

### Nội dung đề tài:

- **Mục tiêu:**
  - Xây dựng website bán máy tính với các chức năng quản lý sản phẩm và thống kê cho quản trị viên.
  - Cung cấp khả năng tra cứu thông tin sản phẩm cho người dùng.

- **Chức năng cho quản trị viên:**
  - Quản lý sản phẩm: Thêm, sửa, xóa sản phẩm.
  - Thống kê: Hiển thị báo cáo thống kê về doanh số bán hàng.

- **Chức năng cho người dùng:**
  - Tra cứu thông tin sản phẩm: Tìm kiếm, xem thông tin chi tiết sản phẩm.

### Phương pháp thực hiện:

1. **Tìm kiếm và Nghiên cứu:**
   - Tìm hiểu nghiệp vụ liên quan đến bán máy tính.
   - Nghiên cứu tài liệu để xác định yêu cầu bài toán.

2. **Phân tích và Thiết kế:**
   - Phân tích yêu cầu bài toán.
   - Thiết kế cơ sở dữ liệu và giao diện người dùng.

3. **Lập trình và Triển khai:**
   - Lập trình website theo thiết kế đã xác định.

4. **Kết quả đạt được:**
   - Hoàn thành xây dựng website theo yêu cầu đề tài.
   - Hoàn thiện quyển báo cáo đồ án.

### Kế hoạch thực hiện:

| Tuần | Thời gian | Nội dung công việc | Người thực hiện |
|------|-----------|--------------------|-----------------|
| 1    | 06/11-12/11/2023 | - Hoàn thành đề cương chi tiết <br> - Tìm hiểu nghiệp vụ <br> - Phân tích thiết kế thành phần dữ liệu, xử lý | Nguyễn Lâm Quốc Bảo |
| 2    | 20/11-26/11/2023 | - Thiết kế cơ sở dữ liệu <br> - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Lâm Quốc Bảo |
| 3    | 04/12-10/12/2023 | - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Lâm Quốc Bảo |
| 4    | 18/12-24/12/2023 | - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Lâm Quốc Bảo |
| Kết thúc | 25/12-31/12/2023 | - Hoàn chỉnh website <br> - Hoàn chỉnh quyển báo cáo <br> - Nộp quyển báo cáo, website | Nguyễn Lâm Quốc Bảo |


## Hướng dẫn cài đặt dự án
Hướng dẫn cài đặt dự án bào gồm máy chủ node.js và React

## Yêu Cầu

- Xampp [v3.3.0]
- Node.js [v14.17.0]
- npm (hoặc yarn) [6.14.13]

## Cài Đặt

1. **Clone Repository:**
   ```bash
   git clone https://github.com/BaoQuocZero/CSN_DA21TTA_NguyenLamQuocBao_JavaScript.git

2. **Cài Đặt Dependencies:**

   - Chuột phải vào thư mục src/Back chọn Open in integrated Terminal
   ```bash
   npm install
   ```
   - Chuột phải vào thư mục src/Fron chọn Open in integrated Terminal
    ```bash
   npm install
   ```

4. **Cấu Hình Môi Trường:**
   
   - Tạo một tệp `.env` từ tệp `.env.example` và điền thông tin cần thiết (env có sẵn trong dự án).

6. **Chạy Ứng Dụng:**

   - Import file src/shoppc_data.sql vào Xampp
   - Mở visual studio code Open dự án
   - Chuột phải vào thư mục src/Back chọn Open in integrated Terminal
   ```bash
   npm run start
   ```
   - Chuột phải vào thư mục src/Back chọn Open in integrated Terminal
    ```bash
   npm run start
   ```

   - Hoặc sử dụng `nodemon` để tự động khởi động lại ứng dụng khi có thay đổi (đã được cài sẵn):

   ```bash
   npm install -g nodemon
   nodemon
   ```

## Đóng Góp

Nếu bạn muốn đóng góp vào dự án, vui lòng làm theo các bước sau:

1. Fork dự án
2. Tạo một nhánh (`git checkout -b feature/awesome-feature`)
3. Commit thay đổi của bạn (`git commit -am 'Add some awesome feature'`)
4. Push đến nhánh của bạn (`git push origin feature/awesome-feature`)
5. Tạo một Pull Request

## Vấn Đề và Đóng Góp

Nếu bạn gặp vấn đề hoặc muốn đóng góp, vui lòng tạo một "issue" hoặc một "pull request".

## Liên Hệ

Nếu bạn có bất kỳ câu hỏi hoặc muốn liên hệ với tôi về dự án, bạn có thể sử dụng các thông tin sau:

- **Trường Đại học:** Đại học Trà Vinh
- **Lớp:** DA21TTA
- **Tên:** Nguyễn Lâm Quốc Bảo
- **Email:** [BaoQuoczero@gmail.com](mailto:BaoQuoczero@gmail.com)

Tôi rất mong nhận được phản hồi và sự hỗ trợ từ cộng đồng. Đừng ngần ngại liên hệ nếu bạn có bất kỳ ý kiến đóng góp hoặc câu hỏi nào liên quan đến dự án.
