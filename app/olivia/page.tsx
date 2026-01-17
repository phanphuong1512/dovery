"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";

const quickReplies = [
  "Tớ đang buồn lắm...",
  "Chuyện trường lớp stress quá :(",
  "Cơ thể tớ dạo này lạ lắm",
  "Tớ bị crush " + '"bơ"' + " rồi",
];

export default function OliviaPage() {
  const [input, setInput] = useState("");
  const initialMessages: UIMessage[] = [
    {
      id: "intro",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "Chào cậu! Hôm nay thế giới của cậu có màu gì? Kể cho Olivia nghe với, tớ đang nghe đây nè.",
        },
      ],
    },
  ];
  const { messages, sendMessage, status, error } = useChat({
    messages: initialMessages,
  });

  const hintMessage = useMemo(
    () => "Lưu ý: Olivia là người bạn AI hỗ trợ tinh thần, không thay thế chuyên gia tâm lý hay bác sĩ y khoa.",
    [],
  );

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = async (event?: { preventDefault?: () => void }) => {
    event?.preventDefault?.();
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    await sendMessage({ text: trimmed });
  };

  const getMessageText = (message: (typeof messages)[number]) =>
    message.parts
      .map((part) =>
        part.type === "text" || part.type === "reasoning" ? part.text : "",
      )
      .join("")
      .trim();

  return (
    <div className="min-h-screen bg-[#fff5f7] text-slate-800">
      <SiteHeader />

      <div className="mx-auto w-full max-w-none px-0 py-0">
        <div className="flex h-[calc(100vh-160px)] max-h-[calc(100vh-160px)] flex-col overflow-hidden border-2 border-white bg-[#eadcf6] shadow-xl">
          <div className="relative bg-[#7ec7e9] px-6 pb-24 pt-9">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
              <Image src="/Asset 16.webp" alt="Olivia" width={40} height={40} />
            </div>
            <div className="text-center">
              <p className="text-xl font-extrabold tracking-wide text-slate-900">
                OLIVIA AI
              </p>
              <p className="text-xs text-slate-700">
                Luôn ở đây lắng nghe, không phán xét.
              </p>
            </div>

              <svg
                viewBox="0 0 1440 120"
                className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-px"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,70 C120,110 240,30 360,70 C480,110 600,30 720,70 C840,110 960,30 1080,70 C1200,110 1320,30 1440,70 L1440,120 L0,120 Z"
                  fill="#eadcf6"
                />
              </svg>
          </div>
          <button
            type="button"
            aria-label="Thêm"
            className="text-2xl font-bold text-slate-900"
          >
            •••
          </button>
        </div>

          </div>

          <main className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-6 pt-6">
            <p className="text-center text-xs text-slate-600 italic">
              {hintMessage}
            </p>
            {error && (
              <div className="rounded-2xl border-2 border-red-400 bg-red-50 px-4 py-3 text-sm text-red-700">
                Olivia đang gặp lỗi khi kết nối. Hãy thử lại sau hoặc kiểm tra server.
                <div className="mt-1 text-xs text-red-600">
                  {error.message}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <Image
                        src="/Asset 16.webp"
                        alt="Olivia"
                        width={28}
                        height={28}
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-3xl border-2 px-4 py-3 text-sm shadow-sm ${
                      message.role === "assistant"
                        ? "bg-[#e7f6ff] border-white text-slate-800"
                        : "bg-[#f8c7cc] border-white text-slate-800"
                    }`}
                  >
                    {getMessageText(message)}
                  </div>
                  {message.role === "user" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <span className="text-xs font-semibold">You</span>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/Asset 16.webp"
                      alt="Olivia"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="rounded-3xl border-2 border-white bg-white px-4 py-3 text-sm">
                    Olivia đang nhập...
                  </div>
                </div>
              )}
            </div>

          </main>

          <div className="flex flex-wrap justify-center gap-3 bg-[#eadcf6] px-6 py-3">
            {quickReplies.map((text) => (
              <button
                key={text}
                type="button"
                onClick={() => setInput(text)}
                className="rounded-full border-2 border-white bg-[#f6e6b4] px-4 py-2 text-xs font-semibold text-slate-800"
              >
                {text}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-3 border-t-2 border-white bg-[#f3c6cd] px-6 py-4"
          >
            <button
              type="button"
              className="rounded-full border-2 border-white bg-[#f4dce6] px-4 py-2 text-sm font-semibold"
            >
              Emoji
            </button>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Nhập tâm sự của cậu vào đây..."
              className="w-3/5 rounded-full border-2 border-white bg-white px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-full border-2 border-white bg-[#f6c1cd] px-5 py-2 text-sm font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
