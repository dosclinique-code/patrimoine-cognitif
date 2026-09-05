import { z } from "zod";

/** Schéma de validation partagé client / API route */
export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer votre nom complet."),
  organization: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .email("Veuillez saisir une adresse email professionnelle valide."),
  message: z
    .string()
    .trim()
    .min(20, "Veuillez décrire votre besoin en quelques mots (minimum 20 caractères)."),
  consent: z.literal(true, {
    message: "Vous devez accepter la politique de confidentialité pour continuer.",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
