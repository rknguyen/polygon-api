# polygon-api (unofficial)

## Trạng thái: Đang phát triển.

**polygon-api** cung cấp các phương thức thao tác với [Codeforces Polygon](https://polygon.codeforces.com/) thông qua API (chính thức lẫn không chính thức).

## Danh sách phương thức

- [x] Lấy danh sách các bài tập đang có.
- [x] Tạo thêm bài tập mới.
- [x] Cập nhật thông tin bài tập (đầu vào, đầu ra, giới hạn thời gian/bộ nhớ, interactive hay không).
- [x] Bật tính điểm cho bài tập.
- [x] Tải lên đề cho bài tập.
- [ ] Tải lên tài nguyên cho đề bài.
- [x] Tải lên lời giải cho bài tập.
- [x] Tải lên tệp (hiện tại chỉ hỗ trợ tải lên **source file**)
- [x] Chọn trình chấm (checker) có sẵn hoặc đã tải lên dưới dạng **source file**.
- [x] Chọn trình kiểm tra (validator) đã tải lên dưới dạng **source file**.
- [ ] Tải lên bộ kiểm thử (test) cho bài tập.
- [ ] Tạo commit cho bài tập.
- [ ] Tạo invocation cho bài tập.

## Cài đặt

```
yarn install
```

## Sử dụng

- Vào cài đặt của **Polygon** và bật cho phép mục "Skip email confirmation on unusual login".
- Tạo tệp bản sao tên **.env** dựa trên **.env_example**.
- Điền lần lượt thông tin tài khoản Polygon và thông tin API Key.
- Import **services/problem** để nhận được các thao tác với Polygon hiện có.

## Vấn đề đang gặp phải

- Chưa thể tạo ra signature cho các tệp không phải plain text.

## Đóng góp

Liên hệ [Nguyen Huy](https://www.facebook.com/rknguyen).
