import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  className?: string;
};

export default function SiteHeader({
  className,
}: Readonly<SiteHeaderProps>) {
  return (
    <header
      className={`sticky top-0 z-50 ${className ?? "bg-pink-300"}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 py-4 md:gap-4 md:py-5">
        <Link href="/" aria-label="Dovery">
          <Image
            src="/Asset 17.webp"
            alt="Dovery logo"
            width={360}
            height={140}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <Link
            href="/"
            aria-label="Về Dovery"
            className="transition hover:scale-105"
          >
            <Image
              src="/Asset 12.webp"
              alt="Về Dovery"
              width={150}
              height={44}
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <Link
            href="/wiki"
            aria-label="Wiki dậy thì"
            className="transition hover:scale-105"
          >
            <Image
              src="/Asset 13.webp"
              alt="Wiki dậy thì"
              width={160}
              height={44}
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <Link
            href="/calculator"
            aria-label="Lịch kinh nguyệt"
            className="transition hover:scale-105"
          >
            <Image
              src="/Asset 14.webp"
              alt="Lịch kinh nguyệt"
              width={180}
              height={44}
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <Link
            href="/olivia"
            aria-label="Olivia"
            className="transition hover:scale-105"
          >
            <Image
              src="/Asset 15.webp"
              alt="Olivia"
              width={140}
              height={44}
              className="h-8 w-auto md:h-9"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
