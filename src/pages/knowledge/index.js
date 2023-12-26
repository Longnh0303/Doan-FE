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
          <CardHeader title="Kiến Thức Bổ Sung về Chăn Nuôi Heo"></CardHeader>
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }} gutterBottom>
              Quản lý tiểu khí hậu chuồng nuôi trong chăn nuôi nói chung cũng
              như trong chăn nuôi heo nói riêng có vai trò vô cùng quan trọng,
              quyết định không nhỏ tới hiệu quả chăn nuôi.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Để quản lý thành công điều này chúng ta cần chú ý tới:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Tốc độ lưu thông không khí trong chuồng
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Nhiệt độ trong chuồng</Typography>
              </li>
              <li>
                <Typography variant="body1">Độ ẩm chuồng</Typography>
              </li>
            </ul>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Quản lý tốc độ gió trong chuồng nuôi heo (thông gió trong chuồng
              nuôi)
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nguyên tắc chung của việc thông gió trong chuồng nuôi là: đưa
                  một lượng không khí mới, sạch và mát vào chuồng , như vậy sẽ
                  đẩy một phần không khí ô nhiễm ở trong chuồng ra ngoài. Điều
                  này sẽ giúp chúng ta quản lý được nhiệt độ và độ ẩm trong
                  chuồng, đồng thời cũng đưa một phần khí độc, bụi ra ngoài.
                </Typography>
              </li>
            </ul>
            <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
              <img
                src="/images/avatars/heo.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography variant="body1" gutterBottom>
              Một hệ thống thông gió chủ động chỉ hoạt động tốt khi chuồng nuôi
              kín và có một hệ thống cách nhiệt tốt (điều này cũng rất quan
              trọng trong việc kiểm soát nhiệt độ chuồng nuôi)
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hiện nay các trại chăn nuôi hiện đại đều sử dụng hệ thống thông
              gió chủ động (quạt hút), điều này sẽ giúp các trang trại chủ động
              trong việc điều tiết không khí trong chuồng nuôi. Việc không thể
              kiểm soát tiểu khí hậu chuồng nuôi (đặc biệt là không khí) có thể
              dẫn tới những hậu quả nặng nề như:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Giảm tăng trọng do heo thường xuyên bị stress nóng hay lạnh,
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nguy cơ phát sinh dịch bệnh trong trại do không kiểm soát được
                  độ ẩm,
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Khó khăn trong việc kiểm soát, điều trị bệnh do heo bị stress
                  gây giảm sức đề kháng.
                </Typography>
              </li>
            </ul>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Vậy làm thế nào để giảm stress cho heo ?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nếu heo bị stress nhiệt và không thể tự cân bằng nhiệt chúng sẽ
              sinh bệnh. Trong trường hợp xấu nhất, có thể nó sẽ chết. Dưới đây
              là 1 số hướng dẫn do tổ chức nông nghiệp và phát triển bền vững
              Vương Quốc Anh (AHDB) cung cấp giúp bạn có thể hạn chế tối đa
              những thiệt hại do stress nhiệt gây ra cho heo.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Stress nhiệt xảy ra khi nhiệt độ cơ thể của heo tăng vượt quá giới
              hạn nhất định. Khi đó, việc đầu tiên là heo sẽ tăng tỷ lệ hô hấp
              của nó như một phản ứng tự nhiên để cân bằng nhiệt. Sau đó nó sẽ
              tìm kiếm các cách làm mát từ môi trường, như là đắm mình trong bể
              nước hay nằm lên các vũng nước tiểu.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Stress nhiệt cần thiết được loại bỏ để ngăn ngừa những phản ứng
              không cần thiết và làm giảm năng suất chăn nuôi. Nhiệt độ quá cao
              sẽ làm giảm tốc độ tăng trưởng của heo thịt (có thể giảm đến 50
              g/ngày) và giảm tỷ lệ đẻ của heo nái đến 25%.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vậy mục tiêu của việc duy trì nhiệt độ thích hợp cho heo trong
              suốt quá trình chăn nuôi là:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Duy trì khả năng sinh sản của heo nái trong suốt cả năm.{" "}
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Duy trì lượng thức ăn ăn vào và tốc độ tăng trưởng của heo
                  thịt trong suốt mùa hè.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Cách tiến hành nhằm giảm stress nhiệt cho heo gồm 2 công việc
                  chính:
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Kiểm tra tổng quát toàn trang trại.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nước- Hệ thống thông gió ,làm mát
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Hệ thống báo động và các thiết bị khẩn cấp.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nước
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Trong chăn nuôi; nhiệt phát sinh từ cơ thể vật nuôi, nhiết từ chất
              thải và nhiệt từ sự phân hủy của chất thải trong chuồng sẽ làm
              chuồng nuôi nóng lên. Ngoài ra các chất thải, chất tiết của vật
              nuôi sẽ tạo ra một lượng lớn chất thải khí lơ lửng tích tục trong
              chuồng nuôi đặc biệt là các loại khí độc như NH3, H2S ...). 
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vì vậy trong mùa đông các hệ thống thông gió vẫn hoạt động với
              chức năng chính đó là đưa khí thải ra khỏi chuồng nuôi, kiểm soát
              độ ẩm của chuồng chứ ít có vai trò trong việc duy trì nhiệt độ
              trong chuồng
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 3 }}>
              <img
                src="/images/avatars/heo2.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Kiểm soát nhiệt độ trong chăn nuôi heo{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Khi nhiệt độ chuồng nuôi thấp, heo cần huy động một lượng lớn năng
              lượng để duy trì và sưởi ấm cơ thể điều này sẽ làm heo không thể
              sử dụng tối đa năng lượng để phát triển.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nếu nhiệt độ chuồng nuôi quá cao heo sẽ giảm vận động và tăng nhịp
              thở và giảm lượng thức ăn thu nhận điều này cũng không tốt cho
              việc phát triển của heo. Để quản lý nhiệt độ của chuồng nuôi sao
              cho phù hợp với độ tuổi, cân nặng của heo chúng ta có thể dùng
              bảng 1 và 2 để đáng giá.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 3 }}>
              <img
                src="/images/avatars/heo3.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" sx={{ pb: 3 }}>
              <img
                src="/images/avatars/heo4.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography variant="body1" gutterBottom>
              Dựa vào 2 bảng thông số ở trên ta có thể tính được cần sử dụng hệ
              thống máy thông gió như thế nào sẽ phù hợp với sức khỏe đàn heo
              với công thức:
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Nhiệt độ tiêu chuẩn = Nhiệt độ chuồng nuôi hiện tại + tốc độ gió +
              vật liệu làm sàn + chênh lệch nhiệt độ
            </Typography>
            <Typography variant="body1" gutterBottom fontStyle="italic">
              Ví dụ:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Đàn heo khoảng 40kg, nhiệt độ chuồng nuôi là 18oC, tốc độ gió là
              0,5m/s, heo được nuôi trên sàn bê tông và dùng tường gạch, nhiệt
              độ ngoài trời là 21oC
            </Typography>
            <Typography variant="body1" gutterBottom>
              Như vậy ta có thể tính: Nhiệt độ trong chuồng là: 18 -7 - 5 - 1,5
              = 5,5 ta so sánh kết quả trên với bảng 1 thấy thấpp hơn mức nhiệt
              cần thiết → heo cần năng lượng để sưởi ấm cơ thể điều này sẽ làm
              giảm tăng trọng của heo → Cần điều chỉnh nhiệt độ
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cách điều chỉnh nhiệt độ đơn đơn giản : QUẠT THÔNG GIÓ
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tốc độ gió tiêu chuẩn trong chuồng trại là 0,15m/s. Với những trại
              nuôi có lắp quạt thông gió cần lưu ý tiêu chuẩn này. Nếu quạt gió
              quá mạnh cần tránh quạt trực tiếp xuống gian chuồng. Kỹ thuật xây
              chuồng hiện đại cùng hệ thống quạt gió sẽ giúp gia súc mau lớn.
            </Typography>
            <Typography variant="body1">
              Gia súc nhỏ khi mới sinh rất nhạy cảm với gió. Đặc biệt là heo
              thịt dưới 60kg, bà con nên điều chỉnh hướng gió. Tuyệt đối không
              cho gió thổi trực tiếp vào vật nuôi tránh mắc bệnh đường hô hấp.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thông thường, gió với tốc độ 0,15m/s thổi vào gia súc sẽ khiến
              nhiệt độ giảm xuống 4 độ C. Với tốc độ gió 0,46m/s làm giảm 7,2 độ
              C và 0,52m/s sẽ làm giảm 10 độ C. Bà con nên lưu ý giữ không gian
              chuồng nhiệt độ vừa phải, thoáng gió. Đây cũng là yếu tố quan
              trọng trong cách nuôi gia súc mau lớn.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cách chọn quạt thông gió:{" "}
              <a
                href="https://cokhitruongan.com.vn/quat-thong-gio-trang-trai-chan-nuoi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://cokhitruongan.com.vn/quat-thong-gio-trang-trai-chan-nuoi/
              </a>
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 3 }}>
              <img
                src="/images/avatars/heo5.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography variant="body1" gutterBottom>
              ĐÈN SƯỞI
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Nhiệt độ từng loại chuồng
            </Typography>
            <Typography paragraph>
              <b>Trại đẻ:</b> Nhiệt độ phù hợp ở trại đẻ từ khu nhập chuồng đến
              trước khi đẻ là 18°C, khi đẻ là 22°C. Khi nhiệt độ trong chuồng
              xuống thấp thì heo con sẽ yếu, không lanh lợi, dễ bị nái đè. Lúc
              nái đẻ, nhiệt độ chuồng nái cần cao hơn so với lúc thông thường
              khoảng 4°C. Nếu nền chuồng đẻ bằng bê-tông hay kim loại thì cần
              chú ý giữ ấm cho heo con bằng cách trải thảm lót. Heo con khi đẻ
              cần để trong khu vực úm với nhiệt độ khoảng 35°C, sau đó từ từ
              giảm dần. Ngoài ra, cần chú ý nếu nhiệt độ chuồng trên 27°C thì
              nái sẽ giảm lượng cám ăn vào và giảm sản xuất sữa.
            </Typography>
            <Typography paragraph>
              <b>Trại cai sữa:</b> Sau cai sữa rất nhiều trường hợp heo con cảm
              thấy lạnh. Vì không còn nái nên nhiệt độ heo con cảm nhận giảm
              khoảng 5 oC. Chính vì vậy, sau cai sữa cần phải bố trí khu úm cho
              heo. Khi cai sữa nên duy trì nhiệt độ từ 28~30oC. Sau đó, cứ mỗi
              một tuần giảm khoảng 2oC, đến 50 ngày tuổi thì giảm còn 19~20oC.
              Nếu chia bầy cai sữa theo trọng lượng, cần lưu ý là đối với bầy
              6~7kg, chỉnh nhiệt độ trên 30oC thì hơi nóng khiến heo giảm ăn
              cám; còn đối với bầy 5kg chỉnh 26oC thì hơi lạnh. Vì thế, cần kiểm
              tra nhiệt độ chuồng trại thường xuyên để duy trì nhiệt độ chuồng
              trại phù hợp. Đặc biệt không nên để chênh lệch nhiệt độ trong ngày
              quá 3oC. Ở thời kì cai sữa, nếu quản lý nhiệt độ không phù hợp sẽ
              dẫn tới tình trạng tiêu chảy và chậm tăng trọng.
            </Typography>
            <Typography paragraph>
              <b>Trại thịt:</b> Tại trại thịt, tùy theo giai đoạn nuôi mà điều
              chỉnh nhiệt độ thích hợp. Nếu nhiệt độ thấp hơn nhiệt độ thích
              hợp, heo phải sản xuất nhiều nhiệt lượng làm ảnh hưởng tới FCR,
              giảm tăng trọng. Khi chuyển heo cai sữa sang trại thịt nên để
              nhiệt độ 24oC. Nếu chênh lệch nhiệt độ trong ngày khoảng 5~6oC,
              tăng trọng của heo ít bị ảnh hưởng. Nếu chênh lệch trên 10oC, heo
              sẽ phải điều chỉnh thân nhiệt, sức khoẻ heo bị ảnh hưởng, dễ dẫn
              đến viêm phổi.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
              <img
                src="/images/avatars/heo6.png"
                alt="Heo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography paragraph>
              * Khuyên nên dùng bóng đèn chuyên dùng hồng ngoại để sưởi ấm,
              không nên dùng bóng đèn dây tóc thông thường để sưởi ấm vật nuôi
              do bóng đèn dây tóc thông thường có rất nhiều tia bức xạ có hại
              nghiêm trọng đến sức khỏe vật nuôi và hiệu quả sử dụng năng lượng
              (tốn nhiều điện hơn cho cùng 1 hiệu quả sưởi ấp).
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hướng dẫn chọn loại đèn sưởi phù hợp :{" "}
              <a
                href="https://www.youtube.com/watch?v=ktJig3MGUqM"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/watch?v=ktJig3MGUqM
              </a>
            </Typography>
            <Typography paragraph>
              <span style={{ color: "red" }}>* Lưu ý:</span> Đây là kiến thức bổ
              sung, chỉ mang tính chất tham khảo, không mang tính áp đặt. Mọi số
              liệu, thực trạng chuồng trại, gia súc, đơn vị chăn nuôi cần nắm rõ
              từng loại, thể trạng, thời gian,... và tham khảo từ nhiều nguồn
              tài liệu khác nhau để đạt hiệu quả cao nhất trong mô hình chăn
              nuôi.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SecondPage;
