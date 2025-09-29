"use client"

import type React from "react"

import { useId, useState } from "react"

export function ContactForm() {
  const nameId = useId()
  const emailId = useId()
  const genderId = useId()
  const countryId = useId()
  const messageId = useId()

  const [status, setStatus] = useState<"idle" | "success">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend required — simulate success UI
    setStatus("success")
    setTimeout(() => setStatus("idle"), 2000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl space-y-6 animate-in fade-in duration-700"
      aria-describedby={status === "success" ? "form-success" : undefined}
    >
      {status === "success" && (
        <div
          id="form-success"
          className="rounded-md bg-secondary px-4 py-3 text-sm text-secondary-foreground"
          role="status"
        >
          Thanks! Your message has been staged locally (no submission).
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor={nameId} className="text-sm font-medium">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            required
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition-[box-shadow] focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Jane Doe"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={emailId} className="text-sm font-medium">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background transition-[box-shadow] focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor={genderId} className="text-sm font-medium">
            Gender
          </label>
          <select
            id={genderId}
            name="gender"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label htmlFor={countryId} className="text-sm font-medium">
            Country
          </label>
          <select
            id={countryId}
            name="country"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>India</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor={messageId} className="text-sm font-medium">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Tell us about your travel plans…"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Send message
        </button>
      </div>
    </form>
  )
}
