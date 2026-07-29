import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting (max 5 submissions per 10 mins per IP)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const limit = 5;

  const timestamps = (rateLimitMap.get(ip) || []).filter((time) => now - time < windowMs);
  if (timestamps.length >= limit) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

// Basic input sanitization
function sanitizeInput(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    // Field validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ error: "Name must be less than 100 characters." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json({ error: "Subject is required." }, { status: 400 });
    }
    if (subject.length > 150) {
      return NextResponse.json({ error: "Subject must be less than 150 characters." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message must be less than 5000 characters." }, { status: 400 });
    }

    // Sanitize inputs for HTML email body
    const cleanName = sanitizeInput(name.trim());
    const cleanEmail = sanitizeInput(email.trim());
    const cleanSubject = sanitizeInput(subject.trim());
    const cleanMessage = sanitizeInput(message.trim()).replace(/\n/g, "<br/>");
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_xxxxxxxxx") {
      console.warn("RESEND_API_KEY is not configured properly.");
      return NextResponse.json(
        { error: "Server email service is not configured. Please set RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; color: #18181b; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 2px solid #18181b; padding: 24px; border-radius: 8px; box-shadow: 4px 4px 0px #18181b; }
            .header { border-bottom: 2px solid #e4e4e7; padding-bottom: 12px; margin-bottom: 20px; }
            .title { font-size: 20px; font-weight: bold; text-transform: uppercase; color: #18181b; margin: 0; }
            .field { margin-bottom: 16px; }
            .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px; display: block; }
            .value { font-size: 15px; color: #18181b; background: #fafafa; border: 1px solid #e4e4e7; padding: 10px 12px; border-radius: 4px; word-break: break-word; }
            .message-box { font-size: 14px; line-height: 1.6; color: #18181b; background: #f4f4f5; border-left: 4px solid #18181b; padding: 12px 16px; border-radius: 2px; }
            .footer { font-size: 11px; color: #a1a1aa; border-top: 1px solid #e4e4e7; pt: 16px; margin-top: 24px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 class="title">📬 New Portfolio Contact Submission</h2>
            </div>
            
            <div class="field">
              <span class="label">Sender Name</span>
              <div class="value"><strong>${cleanName}</strong></div>
            </div>

            <div class="field">
              <span class="label">Sender Email</span>
              <div class="value"><a href="mailto:${cleanEmail}" style="color: #2563eb;">${cleanEmail}</a></div>
            </div>

            <div class="field">
              <span class="label">Subject</span>
              <div class="value">${cleanSubject}</div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">${cleanMessage}</div>
            </div>

            <div class="field">
              <span class="label">Submitted At</span>
              <div class="value" style="font-size: 12px; color: #52525b;">${timestamp}</div>
            </div>

            <div class="footer">
              Sent automatically via Navaneeth PV Portfolio Contact Form Engine
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["navaneethpv550@gmail.com"],
      subject: `New Portfolio Contact Submission: ${cleanSubject}`,
      replyTo: cleanEmail,
      html: emailHtml,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email via Resend API." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data.data?.id,
    });
  } catch (err: unknown) {
    console.error("Contact API Route Error:", err);
    const errorMessage = err instanceof Error ? err.message : "An unexpected server error occurred.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
