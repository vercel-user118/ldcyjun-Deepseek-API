export async function POST(req) {
  const { messages, model } = await req.json();
  const apiKey = process.env.DEEPSEEK_API_KEY;

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model || "deepseek-chat",
      messages: messages,
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return Response.json(data);
}
