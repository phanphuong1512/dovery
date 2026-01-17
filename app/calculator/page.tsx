"use client";

import { useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import SiteHeader from "../components/SiteHeader";

const weekDays = ["cn", "t2", "t3", "t4", "t5", "t6", "t7"];

const buildMonth = (month: Dayjs) => {
  const start = month.startOf("month");
  const startOffset = start.day();
  const daysInMonth = month.daysInMonth();
  const days = Array.from({ length: startOffset + daysInMonth }, (_, index) => {
    if (index < startOffset) return null;
    return start.add(index - startOffset, "day");
  });

  return {
    label: month.format("MMMM YYYY"),
    month,
    days,
  };
};

const isInRange = (date: Dayjs, start: Dayjs, end: Dayjs) => {
  return (
    (date.isAfter(start, "day") || date.isSame(start, "day")) &&
    (date.isBefore(end, "day") || date.isSame(end, "day"))
  );
};

export default function CalculatorPage() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [cycleLength, setCycleLength] = useState(20);
  const [periodLength, setPeriodLength] = useState(8);
  const [calculatedDate, setCalculatedDate] = useState<Dayjs | null>(null);
  const [calculatedCycleLength, setCalculatedCycleLength] = useState(20);
  const [calculatedPeriodLength, setCalculatedPeriodLength] = useState(8);

  const baseMonth = useMemo(
    () => dayjs().subtract(2, "month").startOf("month"),
    [],
  );
  const inputMonths = useMemo(
    () => [0, 1, 2].map((offset) => buildMonth(baseMonth.add(offset, "month"))),
    [baseMonth],
  );

  const cycleInfo = useMemo(() => {
    if (!calculatedDate) return null;
    const nextPeriodStart = calculatedDate.add(calculatedCycleLength, "day");
    const periodEnd = nextPeriodStart.add(calculatedPeriodLength - 1, "day");
    const ovulation = calculatedDate.add(calculatedCycleLength - 14, "day");
    const fertileStart = ovulation.subtract(4, "day");
    const fertileEnd = ovulation.add(1, "day");

    return {
      nextPeriodStart,
      periodEnd,
      ovulation,
      fertileStart,
      fertileEnd,
    };
  }, [calculatedDate, calculatedCycleLength, calculatedPeriodLength]);

  return (
    <div className="min-h-screen bg-white text-[#123b73]">
      <SiteHeader />

      <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-60 overflow-hidden">
          <div className="h-full w-full bg-[linear-gradient(180deg,#ff9fc6_0%,#ffb7d4_55%,#ffd4e5_100%)]" />
          <svg
            className="absolute bottom-0 left-0 h-24 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C240,120 480,0 720,60 C960,120 1200,20 1440,70 L1440,120 L0,120 Z"
              fill="#9fd0ff"
            />
          </svg>
        </div>

        <div className="relative mt-6">
          <div className="relative z-10 px-4 md:px-8">
            <div className="px-0 py-0">
              <div className="text-center">
                <h2 className="text-xl font-black tracking-wide text-[#0c4675] md:text-2xl">
                  CÔNG CỤ DỰ BÁO CHU KÌ
                </h2>
                <p className="mt-1 text-sm font-serif-light-italic text-[#0c4675]/80">
                  Ngày đầu tiên trong chu kì gần đây nhất?
                </p>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-3">
                {inputMonths.map((month) => (
                  <div key={month.label} className="flex flex-col items-center gap-3">
                    <h3 className="text-center text-base font-bold text-[#0c4675]">
                      tháng {month.month.month() + 1}
                    </h3>
                    <div className="grid grid-cols-7 gap-2 text-[10px] font-semibold text-[#0c4675]/70">
                      {weekDays.map((day) => (
                        <div
                          key={day}
                          className="flex h-8 w-8 items-center justify-center uppercase"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {month.days.map((day, index) => {
                        if (!day) {
                          return (
                            <div
                              key={`empty-${month.label}-${index}`}
                              className="h-8 w-8"
                            />
                          );
                        }
                        const isSelected =
                          selectedDate && day.isSame(selectedDate, "day");
                        const isPeriod =
                          cycleInfo &&
                          isInRange(
                            day,
                            cycleInfo.nextPeriodStart,
                            cycleInfo.periodEnd,
                          );
                        const isOvulation =
                          cycleInfo && day.isSame(cycleInfo.ovulation, "day");
                        const isFertile =
                          cycleInfo &&
                          isInRange(day, cycleInfo.fertileStart, cycleInfo.fertileEnd);
                        const isFertileOrOvulation = Boolean(
                          isFertile || isOvulation,
                        );
                        return (
                          <button
                            key={day.format("YYYY-MM-DD")}
                            onClick={() => setSelectedDate(day)}
                            style={
                              isFertileOrOvulation
                                ? { backgroundColor: "#b58cff", color: "#ffffff" }
                                : undefined
                            }
                            className={`flex h-8 w-8 items-center justify-center rounded-none text-[11px] font-semibold transition bg-[#f8eef4] text-[#0c4675] ${
                              isPeriod ? "bg-[#ffb5cc] text-[#7a2b4f]" : ""
                            } ${
                              isSelected ? "bg-[#ff3f86] text-white" : ""
                            }`}
                          >
                            {day.date()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#0c4675]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff3f86]" />
                  Ngày chọn
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff7aa8]" />
                  Ngày kinh nguyệt
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#b58cff]" />
                  Cửa sổ thụ thai / Ngày rụng trứng
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-center text-base font-black text-[#0c4675]">
                    {cycleLength} NGÀY
                  </div>
                  <div className="mt-2 rounded-full border-2 border-[#0c4675] bg-[#eaf3ff] px-5 py-3 shadow-[inset_0_2px_0_rgba(255,255,255,0.8)]">
                    <label
                      htmlFor="cycle-length"
                      className="text-xs font-bold text-[#0c4675]"
                    >
                      Độ dài chu kì trung bình kì của nàng?
                    </label>
                    <input
                      id="cycle-length"
                      type="range"
                      min={20}
                      max={35}
                      value={cycleLength}
                      onChange={(event) =>
                        setCycleLength(Number(event.target.value))
                      }
                      className="mt-2 w-full accent-[#ff6fa8]"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-center text-base font-black text-[#0c4675]">
                    {periodLength} NGÀY
                  </div>
                  <div className="mt-2 rounded-full border-2 border-[#0c4675] bg-[#eaf3ff] px-5 py-3 shadow-[inset_0_2px_0_rgba(255,255,255,0.8)]">
                    <label
                      htmlFor="period-length"
                      className="text-xs font-bold text-[#0c4675]"
                    >
                      Kỳ kinh thường kéo dài bao lâu?
                    </label>
                    <input
                      id="period-length"
                      type="range"
                      min={3}
                      max={10}
                      value={periodLength}
                      onChange={(event) =>
                        setPeriodLength(Number(event.target.value))
                      }
                      className="mt-2 w-full accent-[#ff6fa8]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center">
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedDate) return;
                    setCalculatedDate(selectedDate);
                    setCalculatedCycleLength(cycleLength);
                    setCalculatedPeriodLength(periodLength);
                  }}
                  className="rounded-full bg-[#ff8fb8] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_5px_0_rgba(255,153,190,0.7)] transition hover:translate-y-0.5"
                >
                  TÍNH TOÁN NGAY!
                </button>

                <div className="text-center text-sm font-semibold text-[#0c4675]">
                  {cycleInfo ? (
                    <>
                      Dự báo kỳ kinh tiếp theo: {cycleInfo.nextPeriodStart.format("DD/MM")} -
                      {" "}
                      {cycleInfo.periodEnd.format("DD/MM")}.
                      <br />
                      Ngày rụng trứng dự kiến: {cycleInfo.ovulation.format("DD/MM")}
                    </>
                  ) : (
                    <>
                      Dự báo kỳ kinh tiếp theo: [Ngày/Tháng] - [Ngày/Tháng].
                      <br />
                      Ngày rụng trứng dự kiến: [Ngày/Tháng]
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
