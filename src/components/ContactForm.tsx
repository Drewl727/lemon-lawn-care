'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

const services = [
  'Lawn Care & Mowing',
  'Snow Removal',
  'Ice Dam Removal',
  'Gutter Cleaning',
  'Seasonal Cleanup',
  'Property Maintenance',
  'Multiple Services',
  'Not Sure Yet',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    // Simulate submission — replace with Formspree/API route
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-forest-mid" strokeWidth={1.75} />
        </div>
        <div>
          <h2 className="font-display font-800 text-2xl text-ink mb-2">Message received.</h2>
          <p className="text-ink-muted text-base max-w-sm">
            We&apos;ll be in touch shortly. If you need us sooner, call{' '}
            <a href="tel:9592229593" className="text-forest-mid font-700 hover:underline">
              (959) 222-9593
            </a>
            .
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-display font-700 text-sm text-ink mb-2">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="field-ring w-full rounded-xl border border-border bg-white-tinted px-4 py-3 text-ink text-base placeholder:text-ink-muted/60 transition-colors duration-200 hover:border-border-strong"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-display font-700 text-sm text-ink mb-2">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(860) 555-0100"
            className="field-ring w-full rounded-xl border border-border bg-white-tinted px-4 py-3 text-ink text-base placeholder:text-ink-muted/60 transition-colors duration-200 hover:border-border-strong"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-display font-700 text-sm text-ink mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          className="field-ring w-full rounded-xl border border-border bg-white-tinted px-4 py-3 text-ink text-base placeholder:text-ink-muted/60 transition-colors duration-200 hover:border-border-strong"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block font-display font-700 text-sm text-ink mb-2">
          Service Needed <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="field-ring w-full rounded-xl border border-border bg-white-tinted px-4 py-3 text-ink text-base transition-colors duration-200 hover:border-border-strong cursor-pointer appearance-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Property type */}
      <fieldset>
        <legend className="block font-display font-700 text-sm text-ink mb-3">
          Property Type
        </legend>
        <div className="flex gap-4">
          {['Residential', 'Commercial'].map(type => (
            <label key={type} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="property_type"
                value={type.toLowerCase()}
                defaultChecked={type === 'Residential'}
                className="w-4 h-4 accent-forest-mid cursor-pointer"
              />
              <span className="text-ink-muted text-sm">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-display font-700 text-sm text-ink mb-2">
          Tell Us About Your Property
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Property size, current condition, anything else we should know..."
          className="field-ring w-full rounded-xl border border-border bg-white-tinted px-4 py-3 text-ink text-base placeholder:text-ink-muted/60 transition-colors duration-200 hover:border-border-strong resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2.5 bg-forest text-white font-display font-700 text-base w-full sm:w-auto px-8 py-4 rounded-full transition-colors duration-200 hover:bg-forest-mid disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} strokeWidth={2.5} />
          </>
        )}
      </button>

      <p className="text-xs text-ink-muted">
        We typically respond within one business day. For urgent matters, call us at{' '}
        <a href="tel:9592229593" className="text-forest-mid hover:underline font-700">
          (959) 222-9593
        </a>
        .
      </p>
    </form>
  )
}
