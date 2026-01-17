export default function WikiToc() {
  return (
    <aside className="h-fit w-full rounded-2xl border border-[#f7aac7] bg-white p-5 text-sm shadow-[0_8px_18px_rgba(226,85,115,0.12)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e25573]/70">
        Nội dung chính
      </p>
      <ol className="mt-4 space-y-3 text-sm font-semibold text-[#e25573]">
        <li>
          <a className="hover:text-[#d64566]" href="#phan-1">
            1. Thấu hiểu bốn giai đoạn
          </a>
        </li>
        <li>
          <a className="hover:text-[#d64566]" href="#phan-2">
            2. Chăm sóc da theo hormone
          </a>
        </li>
        <li>
          <a className="hover:text-[#d64566]" href="#phan-3">
            3. Đối phó khó chịu thường gặp
          </a>
        </li>
      </ol>
    </aside>
  );
}
