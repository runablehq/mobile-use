import { mobileUse } from "@/src";
import { google } from '@ai-sdk/google';

async function main() {
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = '<your-google-generative-ai-api-key>';
  
  const response = await mobileUse({
    task: "open google and search sam altman",
    llm: google("gemini-1.5-pro"),
  });
  console.log("Google LLM response:", response.text);
}

main();