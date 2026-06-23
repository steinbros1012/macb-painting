import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@macbpainting.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#1B4F8A;">New Estimate Request — MAC'B Painting</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:540px;">
        ${[["Name", name], ["Phone", phone], ["Email", email], ["Service", service], ["Message", message || "—"]]
          .map(([label, value]) => `
          <tr>
            <td style="padding:10px 14px;background:#F8F9FA;border:1px solid #E9ECEF;font-weight:600;color:#6C757D;font-size:13px;white-space:nowrap;">${label}</td>
            <td style="padding:10px 14px;border:1px solid #E9ECEF;color:#212529;font-size:14px;">${value}</td>
          </tr>`).join("")}
      </table>
      <p style="font-family:sans-serif;color:#9CA3AF;font-size:12px;margin-top:24px;">Sent from macbpainting.com estimate form</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Estimate Request — ${name} (${service})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
