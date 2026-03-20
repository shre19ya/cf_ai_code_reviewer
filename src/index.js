export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      console.log("Path:", url.pathname);

      // ✅ Only handle /api
      if (url.pathname === "/api" && request.method === "POST") {
        const body = await request.json();
        console.log("Body:", body);

        const code = body.code || "";

        const aiResponse = await env.AI.run(
          "@cf/meta/llama-3.1-8b-instruct",
          {
            messages: [
              { role: "user", content: code }
            ]
          }
        );

        return new Response(JSON.stringify({
          result: aiResponse.response
        }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response("Not found", { status: 404 });

    } catch (err) {
      return new Response(JSON.stringify({
        error: err.message
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};