import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Star } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import AnimateSection from '@/components/AnimateSection'

export const metadata: Metadata = {
  title: 'Contact & Free Quote',
  description:
    'Request a free quote from Lemon Lawn Care LLC. Serving Hartford and Connecticut. Call (959) 222-9593 or fill out our online form.',
  alternates: { canonical: 'https://lemonlawncare.com/contact' },
}

const hours = [
  { day: 'Monday – Saturday', time: '7:00 AM – 5:30 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-forest pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-lemon font-display font-700 text-sm tracking-widest uppercase mb-4 animate-fade-up">
            Get In Touch
          </p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl text-white max-w-2xl leading-tight animate-fade-up delay-100">
            Request a free quote.
          </h1>
          <p className="mt-5 text-white/65 text-lg max-w-lg animate-fade-up delay-200">
            Describe your property and what you need — we&apos;ll get back to you with a clear,
            no-obligation quote.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
            {/* ── FORM ── */}
            <div className="lg:col-span-3">
              <AnimateSection>
                <ContactForm />
              </AnimateSection>
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="lg:col-span-2 space-y-8">
              <AnimateSection delay={0.1}>
                {/* Call card */}
                <div className="bg-forest rounded-2xl p-7">
                  <p className="font-display font-700 text-lemon text-xs tracking-widest uppercase mb-4">
                    Call Us Directly
                  </p>
                  <a
                    href="tel:9592229593"
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-lemon/15 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-lemon" strokeWidth={2} />
                    </div>
                    <span className="font-display font-800 text-2xl text-white group-hover:text-lemon transition-colors duration-200">
                      (959) 222-9593
                    </span>
                  </a>
                </div>
              </AnimateSection>

              <AnimateSection delay={0.18}>
                {/* Hours */}
                <div className="border border-border rounded-2xl p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={16} className="text-forest-mid" strokeWidth={2} />
                    <p className="font-display font-700 text-ink text-sm tracking-widest uppercase">
                      Business Hours
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {hours.map(({ day, time }) => (
                      <li key={day} className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-ink-muted">{day}</span>
                        <span className="font-display font-700 text-ink">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateSection>

              <AnimateSection delay={0.26}>
                {/* Service Area */}
                <div className="border border-border rounded-2xl p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <MapPin size={16} className="text-forest-mid" strokeWidth={2} />
                    <p className="font-display font-700 text-ink text-sm tracking-widest uppercase">
                      Service Area
                    </p>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">
                    We serve the Hartford area and residential and commercial clients throughout
                    Connecticut.
                  </p>
                  {/* Connecticut Map Embed */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-cream-dark border border-border">
                    <iframe
                      title="Lemon Lawn Care service area — Hartford, Connecticut"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188882.38628978556!2d-72.84703475!3d41.7657688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e653474b2d5b6f%3A0x9fb0ff6543fa1cf!2sHartford%2C%20CT!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimateSection>

              <AnimateSection delay={0.34}>
                {/* Review CTA */}
                <div className="bg-forest-faint border border-forest/15 rounded-2xl p-7">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-lemon fill-lemon" />
                    ))}
                  </div>
                  <p className="font-display font-700 text-ink text-base mb-2">
                    Happy with our service?
                  </p>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">
                    Leave us a review on Google and help other Connecticut homeowners find
                    reliable lawn care.
                  </p>
                  <a
                    href="https://g.page/r/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-forest-mid font-display font-700 text-sm hover:text-forest transition-colors duration-200 cursor-pointer"
                  >
                    Leave a Google Review
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M14 3v2H7v14h14v-7h2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7zm5 0l3 3-9 9-3-1 1-3 9-9z"/>
                    </svg>
                  </a>
                </div>
              </AnimateSection>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden h-20" />
    </>
  )
}
