# PROMPTS.md

This file documents the AI-assisted prompts used during the development of this project.

---

## 1. Project Setup

Prompt:
"How do I build an AI-powered application using Cloudflare Workers and Workers AI?"

Purpose:
To understand how to structure a Cloudflare-based AI application and which components (Workers, Workers AI, Durable Objects) to use.

---

## 2. Initial Worker Setup

Prompt:
"Create a simple Cloudflare Worker that accepts a POST request and sends input to an LLM using Workers AI."

Purpose:
To set up the backend API and connect it to a language model.

---

## 3. Model Integration

Prompt:
"How do I call a Llama model using Cloudflare Workers AI and format messages correctly?"

Purpose:
To correctly structure the request to the LLM and handle responses.

---

## 4. Debugging API Errors

Prompt:
"Why am I getting a 'No such model' error in Cloudflare Workers AI?"

Purpose:
To resolve incorrect model naming and update to a supported model.

---

## 5. Handling JSON Responses

Prompt:
"How do I safely handle JSON responses in a Cloudflare Worker and avoid parsing errors in the frontend?"

Purpose:
To ensure consistent API responses and prevent frontend crashes.

---

## 6. Frontend Integration

Prompt:
"Create a simple HTML and JavaScript frontend that sends a POST request to a Cloudflare Worker and displays the response."

Purpose:
To build a minimal UI for interacting with the AI backend.

---

## 7. Debugging HTTP Errors

Prompt:
"Why am I getting 405 Method Not Allowed when sending a POST request from the frontend?"

Purpose:
To debug routing issues between static assets and Worker endpoints.

---

## 8. API Routing Fix

Prompt:
"How do I separate frontend routes and API routes in a Cloudflare Worker project?"

Purpose:
To implement a proper routing structure using `/api` for backend requests.

---

## 9. Adding Memory with Durable Objects

Prompt:
"How do I use Durable Objects in Cloudflare Workers to store and retrieve chat history?"

Purpose:
To implement persistent memory and enable stateful interactions.

---

## 10. Improving AI Output

Prompt:
"How can I structure prompts so that the AI returns formatted code reviews with issues, improvements, and corrected code?"

Purpose:
To improve the quality and readability of model responses.

---

## 11. README and Documentation

Prompt:
"Write a professional README for a Cloudflare-based AI code reviewer project."

Purpose:
To create clear documentation for setup, usage, and architecture.

---

## Notes

- AI assistance was used primarily for:
  - understanding Cloudflare APIs
  - debugging errors
  - structuring the application
- All integration, debugging, and final implementation decisions were made manually.