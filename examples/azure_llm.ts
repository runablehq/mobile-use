import { mobileUse } from "@/src";
import { azure } from '@ai-sdk/azure';

async function main() {
  process.env.AZURE_RESOURCE_NAME = '<your-azure-resource-name>';
  process.env.AZURE_API_KEY = '<your-azure-api-key>';
  
  const response = await mobileUse({
    task: "Open zepto",
    llm: azure("gpt-4o"),
  });
  console.log("Azure LLM response:", response.text);
}

main();