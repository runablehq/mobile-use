<div align="center">

# 📱 mobile-use  
**Use AI to control your Android phone — with natural language.**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Join Discord](https://img.shields.io/badge/Join-Discord-purple.svg)](https://discord.gg/BcWWRCnap6)  
[![npm version](https://img.shields.io/npm/v/mobile-use.svg)](https://www.npmjs.com/package/mobile-use)  
[![GitHub Stars](https://img.shields.io/github/stars/your-org/mobile-use.svg?style=social)](https://github.com/runablehq/mobile-use/stargazers)

https://github.com/user-attachments/assets/88ab0a2d-d6e6-4d80-922e-b13d3ae91c85

</div>

---

## ✨ What is this?

**`mobile-use`** lets you control your Android phone using simple, natural-language instructions.

Just type:

> 🗣 *“Open Instagram, go to DMs, and send ‘hi’ to the first person.”*

…and watch it run on your device — powered by AI.

Think RPA, but for mobile — built for devs, hackers, and productivity nerds.

---

## 🚀 Quick Start

### 📦 Install via npm

```bash
npm install mobile-use
```

Or run the MCP server (includes setup):

```bash
npx mobile-mcp install
```

---

## 🧠 AI in Action

```ts
import { mobileUse } from "mobile-use";

const response = await mobileUse({
  task: "Open instagram and go to direct messages, send hi to first person",
  // Optional: use your own LLM via API
  // llm: { provider: "your-llm", apiKey: process.env.YOUR_API_KEY }
});

console.log(response.text);
```

> Default model: Claude (via Anthropic).  
> Set `ANTHROPIC_API_KEY` in your `.env` or environment to use it.

---

## 🖥️ Command Line Usage

```bash
# Run a task directly from your terminal
npx mobile-use "Open Instagram and send 'hi'"

# Run a task from a file
npx mobile-use instruction.txt
```

---

## 📱 Requirements

- Android phone or Emulator running in background(iOS not supported yet)
- [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools) installed (`adb`)(For Emulators)
- USB Debugging enabled

---

## 💬 Join the Community

Have a feature idea? Want to see what others are building?

Join our developer Discord — we’re shaping the roadmap with the community!

[![Join our Discord](https://img.shields.io/badge/Join%20us-Discord-7289DA?logo=discord&logoColor=white)](https://discord.gg/BcWWRCnap6)

---

## 🧩 What's Coming Next?

- iOS support (experimental)
- Visual workflows
- Common protocol for mobiles, browsers and computers

> Have ideas? We’re building it *with you* — hop into Discord or open a GitHub issue.

---

## ⭐ Like it?

If this project made you say "whoa!", help us grow:

- ⭐ [Star this repo](https://github.com/runablehq/mobile-use)
- 🐦 Share on Twitter/X
- 💬 [Invite friends to Discord](https://discord.gg/BcWWRCnap6)

---

## 📄 License

MIT — free to use, fork, and build on.

---

## 🙌 Built with love for devs by devs