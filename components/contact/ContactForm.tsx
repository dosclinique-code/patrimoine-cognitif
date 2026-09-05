"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const inputClass = [
  "w-full bg-emeraude/40 border border-or/20 text-creme font-sans text-base",
  "px-4 py-3 rounded-lg placeholder:text-creme/30",
  "focus:outline-none focus:border-or focus:ring-1 focus:ring-or/20",
  "transition-colors duration-200",
].join(" ");

const labelClass =
  "block text-xs uppercase tracking-[0.18em] text-creme/50 font-sans mb-2";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      message: "",
      consent: undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          body?.error ?? "Une erreur est survenue. Veuillez réessayer."
        );
      }

      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  if (submitState === "success") {
    return (
      <div className="card-surface p-8 text-center">
        <p className="font-serif text-2xl text-creme mb-3">
          Demande transmise avec succès
        </p>
        <p className="text-creme/60 font-sans text-sm leading-relaxed">
          Votre message a été enregistré de manière sécurisée. Un conseiller
          Aigyros vous répondra dans les meilleurs délais, en toute
          confidentialité.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-6 text-or text-sm tracking-wider underline underline-offset-4 hover:text-or/70 transition-colors font-sans"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Nom complet */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Nom complet <span className="text-or">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className={inputClass}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-sm text-red-400 font-sans" role="alert">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organization" className={labelClass}>
          Organisation / Family Office / Étude
        </label>
        <input
          id="organization"
          type="text"
          autoComplete="organization"
          placeholder="Optionnel"
          className={inputClass}
          {...register("organization")}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email professionnel <span className="text-or">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-400 font-sans" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-or">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Décrivez brièvement votre besoin de transmission..."
          className={`${inputClass} resize-y min-h-[140px]`}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-400 font-sans" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consentement RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="mt-1 shrink-0 accent-or w-4 h-4 bg-emeraude border border-or/30 rounded"
            {...register("consent")}
          />
          <span className="text-sm text-creme/60 font-sans leading-relaxed group-hover:text-creme/80 transition-colors">
            J&apos;accepte que ces données soient traitées conformément à la{" "}
            <Link
              href="/confidentialite"
              className="text-or underline underline-offset-2 hover:text-or/70"
            >
              politique de confidentialité
            </Link>{" "}
            d&apos;Aigyros. <span className="text-or">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-sm text-red-400 font-sans" role="alert">
            {errors.consent.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red-400 font-sans text-center" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "loading"}
        className={[
          "w-full bg-or text-noir font-sans font-semibold text-sm tracking-[0.12em] uppercase",
          "py-4 mt-2",
          "hover:bg-or/90 transition-colors duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "flex items-center justify-center gap-2",
        ].join(" ")}
      >
        {submitState === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Envoi sécurisé en cours...
          </>
        ) : (
          "Envoyer la demande"
        )}
      </button>
    </form>
  );
}
