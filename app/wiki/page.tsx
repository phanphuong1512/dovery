import SiteHeader from "../components/SiteHeader";
import WikiToc from "../components/WikiToc";

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-[#fff7fb] text-[#e25573]">
      <SiteHeader className="bg-[#ffb7d4]" />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <WikiToc />
            </div>
          </div>
          <div className="w-full max-w-3xl justify-self-center space-y-10 text-center">
            <header className="rounded-3xl border border-[#f7aac7] bg-white px-8 py-10 text-center shadow-[0_12px_24px_rgba(226,85,115,0.15)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e25573]/70">
                Wiki dậy thì
              </p>
              <h1 className="mt-4 text-2xl font-noto-black uppercase tracking-wide text-[#e25573] md:text-3xl">
                CẨM NANG THẤU HIỂU CƠ THỂ VÀ CHĂM SÓC LÀN DA THEO CHU KỲ KINH NGUYỆT
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#e25573]/80">
                Kinh nguyệt không đơn thuần là một hiện tượng sinh lý hàng tháng,
                đó là tín hiệu thiêng liêng báo hiệu sự trưởng thành và khả năng
                thiên phú của người phụ nữ. Việc thấu hiểu tường tận các giai
                đoạn bên trong cơ thể chính là chìa khóa để phái đẹp chủ động
                chăm sóc bản thân, giữ gìn sức khỏe và duy trì vẻ rạng rỡ ngay cả
                trong những ngày nhạy cảm nhất.
              </p>
            </header>

            <section
              id="phan-1"
              className="rounded-2xl border border-[#f7aac7] bg-white px-7 py-6 text-sm leading-relaxed shadow-[0_8px_18px_rgba(226,85,115,0.12)]"
            >
              <h2 className="text-base font-noto-black uppercase">
            PHẦN 1: THẤU HIỂU BỐN GIAI ĐOẠN CỦA CƠ THỂ
          </h2>
          <p>
            Chu kỳ kinh nguyệt là một bản hòa ca của các hormone, được chia
            thành bốn giai đoạn riêng biệt với những thay đổi sinh lý đặc trưng:
          </p>
          <p>
            <span className="font-noto-black">Giai đoạn Tăng sinh</span> (Giai
            đoạn Nang trứng) Ngay sau khi kỳ kinh kết thúc, các nang trong buồng
            trứng bắt đầu phát triển mạnh mẽ. Cơ thể kích thích sản sinh Estrogen
            và Progesterone nhằm làm dày lớp nội mạc tử cung. Đây thường là
            khoảng thời gian bạn cảm thấy tràn đầy năng lượng nhất.
          </p>
          <p>
            <span className="font-noto-black">Giai đoạn Rụng trứng</span> Khi nồng
            độ Estrogen đạt đỉnh, cơ thể sẽ tiết ra hormone Luteinizing, kích
            thích nang trứng trội vỡ ra và đẩy trứng vào ống dẫn trứng. Đây là
            thời điểm khả năng thụ thai cao nhất trong tháng.
          </p>
          <p>
            <span className="font-noto-black">Giai đoạn Hoàng thể</span> (Giai
            đoạn Tiết chế) Sau khi rụng trứng, nang trứng biến đổi thành hoàng
            thể, tiếp tục tiết ra Progesterone và Estrogen để chuẩn bị cho tử
            cung đón nhận phôi thai (nếu có). Đồng thời, các hormone này cũng ức
            chế tuyến yên để ngăn chặn sự phát triển của các nang trứng khác. Lúc
            này, cơ thể bắt đầu có những dấu hiệu giữ nước hoặc thay đổi tâm lý
            nhẹ.
          </p>
          <p>
            <span className="font-noto-black">Giai đoạn Kinh nguyệt</span> Nếu quá
            trình thụ tinh không diễn ra, hoàng thể sẽ thoái hóa, kéo theo sự sụt
            giảm đột ngột của Estrogen và Progesterone. Lớp nội mạc tử cung không
            còn được nuôi dưỡng sẽ bong tróc và được loại bỏ ra ngoài cùng trứng
            không được thụ tinh, tạo thành kinh nguyệt. Quá trình này thường kéo
            dài 3-4 ngày do dịch lỏng phải đi qua ống cổ tử cung nhỏ và hẹp.
          </p>
            </section>

            <section
              id="phan-2"
              className="rounded-2xl border border-[#f7aac7] bg-white px-7 py-6 text-sm leading-relaxed shadow-[0_8px_18px_rgba(226,85,115,0.12)]"
            >
              <h2 className="text-base font-noto-black uppercase">
            PHẦN 2: NGHỆ THUẬT CHĂM SÓC DA THEO NHỊP ĐIỆU HORMONE
          </h2>
          <p>
            Làn da của chúng ta thay đổi trực tiếp theo sự biến động của
            Estrogen và Progesterone. Việc điều chỉnh quy trình dưỡng da theo
            từng giai đoạn sẽ mang lại hiệu quả tối ưu:
          </p>
          <p>
            <span className="font-noto-black">
              Chăm sóc da trong Giai đoạn Kinh nguyệt (Ngày 1 - 5)
            </span>
            <br />
            Khi nồng độ hormone xuống thấp nhất, làn da trở nên yếu, nhạy cảm,
            dễ mất nước và xỉn màu.
            <br />
            Giải pháp: Hãy tối giản hóa quy trình dưỡng da. Tập trung vào việc
            cấp ẩm sâu và làm dịu. Ưu tiên các sản phẩm lành tính, không chứa
            cồn hay hương liệu mạnh để tránh kích ứng. Đừng quên uống đủ nước để
            bù đắp lượng dịch cơ thể đã mất.
          </p>
          <p>
            <span className="font-noto-black">
              Chăm sóc da trong Giai đoạn Tăng sinh (Ngày 6 - 13)
            </span>
            <br />
            Đây là “thời điểm vàng” của làn da. Lượng Estrogen tăng cao giúp da
            căng mọng, lỗ chân lông nhỏ mịn và hấp thụ dưỡng chất tốt nhất.
            <br />
            Giải pháp: Bạn có thể thử nghiệm các sản phẩm mới hoặc thực hiện các
            liệu trình chuyên sâu như tẩy tế bào chết, đắp mặt nạ dưỡng chất cao
            (Vitamin C, Retinol...) để duy trì vẻ rạng rỡ.
          </p>
          <p>
            <span className="font-noto-black">
              Chăm sóc da trong Giai đoạn Rụng trứng (Ngày 14)
            </span>
            <br />
            Da vẫn trong trạng thái tốt nhưng tuyến bã nhờn bắt đầu hoạt động
            mạnh hơn do sự thay đổi hormone nhẹ.
            <br />
            Giải pháp: Duy trì làm sạch kỹ lưỡng. Bạn nên sử dụng các loại sữa
            rửa mặt tạo bọt nhẹ nhàng và toner cân bằng dầu để ngăn ngừa bít tắc
            lỗ chân lông.
          </p>
          <p>
            <span className="font-noto-black">
              Chăm sóc da trong Giai đoạn Hoàng thể (Ngày 15 - 28)
            </span>
            <br />
            Sự tăng cao của Progesterone kích thích tuyến dầu hoạt động mạnh,
            trong khi lỗ chân lông dễ bị bít tắc, tạo điều kiện cho mụn xuất
            hiện. Đây cũng là lúc hội chứng tiền kinh nguyệt (PMS) gây ra mệt
            mỏi và căng thẳng.
            <br />
            Giải pháp: Chú trọng vào việc làm sạch sâu (Double Cleansing). Sử
            dụng các sản phẩm chứa BHA hoặc đất sét để kiểm soát dầu thừa và
            ngăn ngừa mụn viêm. Hạn chế trang điểm dày để da được “thở”.
          </p>
            </section>

            <section
              id="phan-3"
              className="rounded-2xl border border-[#f7aac7] bg-white px-7 py-6 text-sm leading-relaxed shadow-[0_8px_18px_rgba(226,85,115,0.12)]"
            >
              <h2 className="text-base font-noto-black uppercase">
            PHẦN 3: ĐỐI PHÓ VỚI NHỮNG KHÓ CHỊU THƯỜNG GẶP
          </h2>
          <p>
            Bên cạnh chăm sóc da, việc lắng nghe cơ thể để xoa dịu các triệu
            chứng khó chịu là vô cùng cần thiết:
          </p>
          <p>
            <span className="font-noto-black">Xoa dịu cơn đau bụng</span>
            <br />
            Cơn đau thường xuất hiện 1-2 ngày trước hoặc trong kỳ kinh do tử
            cung co bóp. Mức độ đau ở mỗi người là khác nhau. Bạn có thể chườm
            ấm vùng bụng dưới, massage nhẹ nhàng và ưu tiên nghỉ ngơi để cơ thể
            được thư giãn.
          </p>
          <p>
            <span className="font-noto-black">
              Cân bằng cảm xúc và giảm mệt mỏi
            </span>
            <br />
            Sự sụt giảm Progesterone sau rụng trứng có thể gây ra tâm trạng thất
            thường, dễ nổi nóng hoặc lo âu. Các triệu chứng PMS như đau lưng,
            căng tức ngực hay nhức đầu cũng thường xuất hiện. Hãy đón nhận những
            cảm xúc này một cách nhẹ nhàng, tránh làm việc quá sức và bổ sung
            chế độ ăn giàu dinh dưỡng để cơ thể nhanh chóng hồi phục.
          </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
