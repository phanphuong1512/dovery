import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-(--ink-blue)">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white pb-32 pt-12">
        <Image
          src="/Asset 8.webp"
          alt="Gợn sóng trên"
          width={1600}
          height={240}
          className="pointer-events-none absolute top-0 left-0 z-10 w-full"
        />

        <div className="relative z-20 mx-auto max-w-5xl px-6 pb-16 pt-20 text-center">
          <h1 className="text-3xl font-noto-black tracking-wide text-(--ink-blue) md:text-4xl">
            VỀ DOVER
          </h1>
          <p className="mt-6 text-4xl font-cookie-display text-[#e25573]">
            Hey girls,
          </p>
          <p className="mt-2 text-3xl font-noto-black text-(--ink-blue) md:text-4xl">
            Chào mừng cậu đến với Dovery
          </p>
          <p className="mt-6 text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
            Đây là món quà nhỏ dành tặng riêng cho cậu – những cô gái đang tập
            lớn, nhạy cảm và xứng đáng được yêu thương nhất trần đời.
          </p>
          <p className="mt-4 text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
            Tuổi dậy thì đôi khi thật rắc rối, say hello với mụn, bye bye tâm
            trạng vui vẻ, và cả những ngày “đèn đỏ” khó chiều nữa. Nhưng đừng lo,
            Dovery và Olivia ở đây để hô biến những ngày ấy trở nên nhẹ nhàng
            hơn.
          </p>

          <div className="mt-12 space-y-6 text-left">
            <h2 className="text-center text-2xl font-noto-black text-(--ink-blue)">
              Chúng mình hiểu và tôn trọng sự riêng tư
            </h2>
            <p className="text-center text-base font-serif-light-italic text-[#2e9a62]">
              Biết rằng có những chuyện cậu muốn giữ cho riêng mình. Vậy nên…
            </p>
            <ul className="mx-auto grid max-w-3xl gap-3 text-center text-lg font-noto-black text-(--ink-blue) md:text-left">
              <li>Không yêu cầu đăng nhập</li>
              <li>Không cần cung cấp thông tin cá nhân</li>
              <li>Nhật ký trò chuyện được mã hóa</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6 text-left">
            <h3 className="text-xl font-noto-black text-(--ink-blue)">
              Kinh nguyệt là phép màu
            </h3>
            <p className="text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
              Không phải là gánh nặng. Dù nó hơi đau lưng một xíu, nhưng đó là
              dấu hiệu cậu đã trở thành một thiếu nữ tuyệt vời.
            </p>

            <h3 className="text-xl font-noto-black text-(--ink-blue)">
              Không có câu hỏi nào là ngốc nghếch
            </h3>
            <p className="text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
              Dù là chuyện mụn, chuyện lông là, hay chuyện “crush”, Olivia luôn
              sẵn sàng lắng nghe mà không phán xét.
            </p>

            <h3 className="text-xl font-noto-black text-(--ink-blue)">
              Làn da nào cũng đẹp
            </h3>
            <p className="text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
              Mụn dậy thì chỉ là khách ghé chơi thối, làn da của cậu vẫn luôn đáng
              được nâng niu bằng sự dịu nhẹ nhất (chuẩn Dove nhé!).
            </p>

            <p className="text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
              Chúng mình tự hào có sự đồng hành của các chuyên gia da liễu hàng
              đầu từ Dove. Họ ở đây để đảm bảo cậu luôn sở hữu làn da khỏe mạnh
              nhất nhờ các phương pháp chăm sóc chuẩn khoa học, sẵn sàng đối diện
              với mọi thay đổi “khó chiếu” của tuổi dậy thì.
            </p>
            <p className="text-base leading-relaxed font-serif-light-italic text-[#2e9a62]">
              Không chỉ là một trí tuệ nhân tạo, Olivia được phát triển để trở
              thành người bạn đồng hành thấu hiểu tâm lý. Olivia luôn túc trực
              24/7, sẵn sàng lắng nghe không phán xét và giúp cậu gỡ rối những
              “cuộn len” cảm xúc phức tạp trong đầu.
            </p>
          </div>
        </div>

        <Image
          src="/Asset 7.webp"
          alt="Gợn sóng dưới"
          width={1600}
          height={500}
          className="pointer-events-none absolute bottom-0 left-0 z-0 w-full translate-y-20"
        />
      </section>
    </div>
  );
}
