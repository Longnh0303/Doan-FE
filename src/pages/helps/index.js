// ** MUI Imports
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography
              variant="h2"
              sx={{ whiteSpace: "pre-line", fontWeight: "bold" }}
              gutterBottom
            >
              Chào mừng đến với mô hình quản lý thông số chăn nuôi heo của Khánh
              247!
            </Typography>
            <Typography sx={{ whiteSpace: "pre-line" }} gutterBottom>
              Đây là trang web giúp bạn nắm rõ thông số quan trọng cần thiết của
              mô hình chăn nuôi lợn của bạn kèm các lời khuyên giải pháp giúp mô
              hình bạn phát triển hiệu quả nhất có thể mà chúng tôi nghiên cứu .
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dưới đây là cách hứơng dẫn sử dụng :
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 1: Đăng kí tài khoản
            </Typography>
            <Typography variant="body1" gutterBottom>
              Gọi điện thoại trực tiếp tới tổng đài: 0963362748 để hỗ trợ đăng
              kí trực tiếp ,tư vấn đưa ra các loại quy mô bộ LoRa hợp lý .
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 2, mt: 8 }}>
              <img
                src="/images/avatars/phone.png"
                alt="Phone"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
              gutterBottom
            >
              Hotline:0963362748
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tổng đài sẽ hỏi các mục bắt buộc như:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Họ và tên,ngày tháng năm sinh
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Quê quán ,số CMND
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Quy mô mô hình lợn như thế nào?
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Lợn đang trong giai đoạn nào?
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Từ đó ,tổng đài sẽ hẹn lịch khảo sát đưa ra cách bố trí ,số lượng
              bộ LoRa Node Point hợp lý nhất .
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 2: Cung cấp tài khoản
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sau khi thống nhất với chủ hộ chăn nuôi số lượng ,vị trí lắp các
              bộ LoRa Node Point và LoRa Gateway, bên dịch vụ sẽ cung cấp một
              tài khoản theo gmail và mật khẩu họ yêu cầu để có thể đăng nhập
              nắm bắt được các thông số.
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 3: Đăng nhập
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sau khi có tài khoản thì đăng nhập vào trang chủ Web ,nhập tài
              khoản gmail và mật khẩu đã đăng kí với dịch vụ.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
              <img
                src="/images/avatars/login.png"
                alt="Phone"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "center", fontStyle: "italic", mb: 4 }}
            >
              Hình ảnh giao diện đăng nhập
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 4: Làm quen giao diện web
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 3: Đăng nhập
            </Typography>
            <Typography variant="body1" gutterBottom>
              Khi đăng nhập thành công ,thì sẽ hiện ra trang gồm các mục :
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Theo dõi cảm biến
                </Typography>
              </li>
              <Typography variant="body1" gutterBottom>
                Mục này cho phép:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Theo dõi số lượng các bộ Lora Gateway(bộ chủ) ,thời gian tạo
                    ,tên của các bộ chủ,địa chỉ MAC của bộ chủ
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" gutterBottom>
                    Xem chi tiết thông số đo được của các thiết bị con (LoRa
                    Node Point) gửi tới bộ chủ(LoRa Gateway ) đó khi nhấn vào
                    biểu tượng
                  </Typography>
                </li>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ pb: 3, mt: 4 }}
                >
                  <img
                    src="/images/avatars/no-device.png"
                    alt="Heo"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "center", fontStyle: "italic", mb: 4 }}
                >
                  Trường hợp khi chưa có thiết bị được lắp
                </Typography>
              </ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Kiến thức
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ pb: 3, mt: 4 }}
                >
                  <img
                    src="/images/avatars/no-device.png"
                    alt="Heo"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: "center", fontStyle: "italic", mb: 4 }}
                >
                  Mục kiến thức tham khảo ở Web
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Mục này bổ sung các kiến thức giúp trả lời các câu hỏi :
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Tốc độ gió bao nhiêu trong chuồng heo là hợp lý?
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Cách giảm stress cho heo
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Kiểm soát nhiệt độ trong môi trường chăn nuôi heo
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Với các loại heo khác nhau và giai đoạn phát triển khác
                      nhau thì thông số môi trường nào phù hợp?
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Cách chọn quạt thông gió theo mô hình
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" gutterBottom>
                      Cách chọn đèn sưởi theo mô hình
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 5: Logout
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
              <img
                src="/images/avatars/logout.png"
                alt="Phone"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "center", fontStyle: "italic", mb: 4 }}
            >
              Hình ảnh giao diện đăng xuất
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 6: Logout
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nếu mô hình bạn thu nhỏ ,hoặc hỏng,bạn có thể thu gọn thiết bị xem
              dữ liệu bằng cách Liên hệ tổng đài xóa bộ con(bộ chủ )mong muốn
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Bước 7:Hướng dẫn phản hồi,giúp đỡ
            </Typography>
            <Typography variant="body1" gutterBottom>
              *Nếu có thắc mắc,khó khăn trong quá trình sử dụng ,bạn có thể liên
              hệ tổng đài theo số: <strong>0963362748</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "right", mt: 6, fontStyle: "italic" }}
            >
              Ngày cập nhật : 7/1/2024 0:39:00
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

SecondPage.acl = {
  action: "read",
  subject: "helps-page",
};

export default SecondPage;
