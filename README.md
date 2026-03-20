# cf_ai_code_reviewer

An AI-powered code review assistant built on Cloudflare Workers.  
It analyzes code, identifies bugs, suggests improvements, and explains logic using a large language model, while maintaining state using Durable Objects.

---

## Features

- AI-powered code analysis for bugs, bad practices, and improvements  
- Multiple modes:
  - review: detect issues and suggest fixes  
  - optimize: improve performance and readability  
  - explain: explain code in simple terms  
- Persistent memory using Durable Objects  
- Simple web interface for user interaction  
- Built entirely on Cloudflare platform  

---

## Architecture

Frontend (HTML UI)  
→ Cloudflare Worker (API and logic)  
→ Workers AI (LLM inference)  
→ Durable Objects (state and memory)

---

## Tech Stack

- Cloudflare Workers  
- Workers AI (`@cf/meta/llama-3.1-8b-instruct`)  
- Durable Objects  
- HTML and JavaScript  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cf_ai_code_reviewer.git
cd cf_ai_code_reviewer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
wrangler dev
```

Open in browser:
```
http://127.0.0.1:8787
```

### 4. Deploy

```bash
wrangler deploy
```

---
## ALTERNATIVE: Run directly:
https://cf-ai-code-reviewer.shresinh.workers.dev/

## Example Usage

### Input

```javascript
for(i=0;i<10;i++){
  console.log(i)
}
```

### Output

- Identifies missing variable declaration  
- Suggests improvements  
- Provides corrected code  

---

## Agent-like Design

This project follows an agent-inspired architecture based on Cloudflare concepts:

- Maintains persistent state using Durable Objects  
- Supports multi-step reasoning (store → retrieve → respond)  
- Enables context-aware interactions  

---

## Project Structure

```
cf_ai_code_reviewer/
├── src/
│   ├── index.js        # Worker (API and AI logic)
│   ├── memory.js       # Durable Object (state management)
├── public/
│   └── index.html      # Frontend UI
├── wrangler.jsonc      # Cloudflare configuration
├── README.md
├── PROMPTS.md
```

---

## PROMPTS.md

This repository includes a PROMPTS.md file documenting AI-assisted prompts used during development, as required by the assignment.

---

## Future Improvements

- Syntax highlighting in UI  
- Severity classification (low, medium, high)  
- Multi-file code analysis  
- Voice input support  
- Integration with GitHub pull requests  

---

## Acknowledgements

- Cloudflare Workers and Workers AI  
- Cloudflare Agents documentation  