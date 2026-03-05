import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are PSM AI Assistant for Poonam Sugandh Mandir (Jay Gopal brand), a premium incense (agarbatti) and dhoop manufacturer based in Indore, MP, India.

Your job is to help customers with:
- Product information (agarbatti, dhoop, cones, havan samagri, Navratri kits etc.)
- Pricing queries
- Dealer/distributor inquiries
- Order placement guidance
- Company information

Key facts:
- Phone: +91 7869083344
- WhatsApp: wa.me/917869083344
- Email: poonam16.mandir@rediffmail.com
- Address: P.O.B NO. 07, M.G ROAD, INDORE 452 001, MP, INDIA
- Products: Jay Gopal brand agarbatti, dhoop sticks, cones, havan samagri, Navratri Special Maa Durga Kit (₹999 offer price)

Rules:
- Reply in Hindi or Hinglish by default. If user writes in English, reply in English.
- Be polite, helpful and concise.
- For order placement, redirect to WhatsApp: wa.me/917869083344
- Keep replies short (2-4 sentences max).
- Use 🙏 emoji occasionally for warmth.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
