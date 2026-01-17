import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5f7] text-slate-800">
      <SiteHeader />

      <section className="relative overflow-hidden bg-(--sky-blue)">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 items-center gap-10 rounded-[36px] bg-white px-8 py-10 shadow-xl shadow-black/20 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-lg shadow-black/20">
                <Image
                  src="/hero-section-dovery.jpg"
                  alt="Dovery hero section"
                  width={720}
                  height={640}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="text-center text-(--ink-blue) font-source-serif">
              <p className="text-3xl font-noto-black">Hey girls,</p>
              <h1 className="mt-3 text-4xl font-semibold text-(--ink-blue) md:text-5xl">
                Chào mừng cậu đến với Dovery
              </h1>
              <p className="mt-5 text-base leading-relaxed font-serif-light-italic">
                Đây là món quà nhỏ dành tặng riêng cho cậu – những cô gái đang
                tập lớn, nhạy cảm và xứng đáng được yêu thương nhất trần đời.
              </p>
              <p className="mt-5 text-base leading-relaxed font-serif-light-italic">
                Tuổi dậy thì đôi khi thật rắc rối, say hello với mụn, bye bye
                tâm trạng vui vẻ, và cả những ngày &ldquo;đèn đỏ&rdquo; khó chiều nữa. Nhưng
                đừng lo, Dovery và Olivia ở đây để hô biến những ngày ấy trở nên
                nhẹ nhàng hơn.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-3">
          <div className="flex w-full items-center">
            <Image
              src="/Asset 4.webp"
              alt="Dovery ribbon"
              width={900}
              height={120}
              sizes="50vw"
              className="h-auto w-1/2"
            />
            <Image
              src="/Asset 4.webp"
              alt="Dovery ribbon"
              width={900}
              height={120}
              sizes="50vw"
              className="h-auto w-1/2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-(--ink-blue)">
          <h2 className="text-3xl font-noto-black">
            Chúng mình hiểu và tôn trọng sự riêng tư
          </h2>
          <p className="mt-3 text-base font-serif-light-italic">
            Biết rằng có những chuyện cậu chỉ muốn giữ cho riêng mình.
            <br />
            Vậy nên...
          </p>

          <div className="relative mt-8 w-full max-w-3xl">
            <Image
              src="/Asset 3.webp"
              alt="Dovery privacy card"
              width={1200}
              height={420}
              className="h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
              <p className="text-xl font-noto-black">Không yêu cầu đăng nhập</p>
              <p className="text-xl font-noto-black">
                Không cần cung cấp thông tin cá nhân
              </p>
              <p className="text-xl font-noto-black">
                Nhật ký trò chuyện được mã hóa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="relative w-full mt-[4cm]">
          <Image
            src="/back.webp"
            alt="back"
            width={1920}
            height={1400}
            className="pointer-events-none w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="relative h-full w-full">
              <p className="absolute left-[15%] top-[32%] max-w-[460px] rotate-[-6deg] text-center text-xl font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-2xl">
                Chúng mình tự hào có sự đồng hành của các chuyên gia da liễu hàng
                đầu từ Dove. Họ ở đây để đảm bảo cậu luôn sở hữu làn da khỏe mạnh
                nhất nhờ các phương pháp chăm sóc chuẩn khoa học, sẵn sàng đối diện
                với mọi thay đổi “khó chiếu” của tuổi dậy thì.
              </p>
              <p className="absolute right-[15%] top-[44%] max-w-[460px] rotate-[6deg] text-center text-xl font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-2xl">
                Không chỉ là một trí tuệ nhân tạo, Olivia được phát triển để trở
                thành người bạn đồng hành thấu hiểu tâm lý. Olivia luôn túc trực
                24/7, sẵn sàng lắng nghe không phán xét và giúp cậu gỡ rối những
                “cuộn len” cảm xúc phức tạp trong đầu.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-12 text-center md:pt-16">
            <div className="relative w-full max-w-4xl pt-16 md:pt-20">
              <div className="pointer-events-none absolute left-1/2 top-0 translate-x-[calc(-30%-680px)] -translate-y-35">
                <Image
                  src="/Asset 11.webp"
                  alt="Lớn lên cùng sự dịu dàng"
                  width={1200}
                  height={240}
                  className="mx-auto h-auto w-[360%] max-w-none -translate-y-[4%]"
                />
              </div>
              <div className="absolute -left-2 top-1/2 -translate-x-52 -translate-y-1/2 md:-left-6">
                <Image
                  src="/element1.webp"
                  alt="Bông hoa"
                  width={300}
                  height={300}
                  className="h-40 w-40 md:h-48 md:w-48 "
                />
              </div>
            </div>

            <div className="mt-24 flex w-full max-w-6xl flex-col gap-6 md:mt-28 md:flex-row">
              <div className="flex-[1] rounded-[28px] bg-white p-8 text-left shadow-lg shadow-black/20 transition-[flex,transform] duration-300 hover:flex-[1.6] hover:scale-[1.02]">
                <h3 className="text-3xl font-noto-black text-(--ink-blue)">
                  Kinh nguyệt là phép màu
                </h3>
                <p className="mt-4 text-base leading-relaxed text-(--ink-blue)">
                  Không phải là gánh nặng. Dù nó hơi đau lưng một xíu, nhưng đó
                  là dấu hiệu cậu đã trở thành một thiếu nữ tuyệt vời.
                </p>
              </div>

              <div className="flex-[1] rounded-[28px] bg-white p-8 text-left shadow-lg shadow-black/20 transition-[flex,transform] duration-300 hover:flex-[1.6] hover:scale-[1.02]">
                <h3 className="text-3xl font-noto-black text-(--ink-blue)">
                  Không có câu hỏi nào là ngốc nghếch
                </h3>
                <p className="mt-4 text-base leading-relaxed text-(--ink-blue)">
                  Dù là chuyện mụn, chuyện lông là, hay chuyện “crush”, Olivia
                  luôn sẵn sàng lắng nghe mà không phán xét.
                </p>
              </div>

              <div className="flex-[1] rounded-[28px] bg-white p-8 text-left shadow-lg shadow-black/20 transition-[flex,transform] duration-300 hover:flex-[1.6] hover:scale-[1.02]">
                <h3 className="text-3xl font-noto-black text-(--ink-blue)">
                  Làn da nào cũng đẹp
                </h3>
                <p className="mt-4 text-base leading-relaxed text-(--ink-blue)">
                  Mụn dậy thì chỉ là khách ghé chơi, làn da của cậu vẫn luôn đáng
                  được nâng niu bằng sự dịu nhẹ nhất.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <Link href="/olivia" aria-label="Trò chuyện với Olivia ngay">
                <Image
                  src="/Asset 5.webp"
                  alt="Trò chuyện với Olivia ngay"
                  width={320}
                  height={96}
                  className="h-14 w-auto md:h-16 scale-[3] translate-y-[800px]"
                />
              </Link>
            </div>
          </div>

          <Image
            src="/image-removebg-preview%20(1).png"
            alt="Nhân vật màu xanh lá cây"
            width={360}
            height={360}
            className="pointer-events-none absolute bottom-0 right-6 z-20 w-24 md:right-10 md:w-36 lg:w-40 -translate-y-[220px] -translate-x-[100px] scale-[3]"
          />
        </div>
      </section>
    </div>
  );
}
