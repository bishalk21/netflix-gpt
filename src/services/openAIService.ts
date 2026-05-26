import OpenAI from "openai";
// import { OpenRouter } from "@openrouter/sdk";

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
// const openAIResponse = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "user",
//       content: "Hello world",
//     },
//   ],
// });
// console.log(openAIResponse.choices[0].message);

// export const client = new OpenRouter({
//   apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
//   dangerouslyAllowBrowser: true,
// });
// cast to any to satisfy SDK typings when passing custom model identifier
// const response = await client.chat.send({
//   model: "openai/gpt-oss-120b:free",
//   messages: [
//     {
//       role: "user",
//       content: "What is the meaning of life?",
//     },
//   ],
// } as any);
// console.log(response.choices[0].message);
