import { Resend } from "resend";
import { contactSchema } from "@/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /* 🔒 VALIDACIÓN ZOD */
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          error: "Datos inválidos",
          issues: result.error.issues,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    /* 📧 ENVÍO EMAIL */
    const emailResponse = await resend.emails.send({
      from: "SatCore <onboarding@resend.dev>", // ⚠️ luego dominio propio
      to: ["satcoresolutions@gmail.com"],
      subject: "Nuevo mensaje desde tu web 🚀",
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", emailResponse);

    return Response.json({ success: true });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
