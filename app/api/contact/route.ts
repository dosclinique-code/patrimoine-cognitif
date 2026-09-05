import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL_DESTINATION ?? "contact@aigyros.com";

/**
 * Endpoint de contact — validation serveur + enregistrement simulé.
 * Brancher ici un service d'email (Resend, SendGrid…) en production.
 * Destinataire configuré via CONTACT_EMAIL_DESTINATION.
 */
export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Données invalides.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    // En production : envoi vers CONTACT_EMAIL_DESTINATION
    // await sendEmail({ to: CONTACT_EMAIL, ...result.data });
    void CONTACT_EMAIL;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer ultérieurement." },
      { status: 500 }
    );
  }
}
