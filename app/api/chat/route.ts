import { streamText, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system:
      "Bạn là Olivia, một người chị gái thân thiện và đồng cảm với các bạn nữ tuổi dậy thì. Trả lời ngắn gọn, dễ hiểu, không phán xét, không đưa lời khuyên y tế chuyên môn. Khuyến khích bạn tìm bác sĩ khi cần.",
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
  });
}
