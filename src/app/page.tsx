import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone, Shield, Wrench, CalendarCheck } from 'lucide-react'
import AnimateSection from '@/components/AnimateSection'

export const metadata: Metadata = {
  title: 'Lemon Lawn Care LLC — Professional Lawn Care in Connecticut',
  description:
    'Fully insured lawn care, snow removal, gutter cleaning, and year-round property services in Connecticut. Hartford area. Get a free quote today.',
  alternates: { canonical: 'https://lemonlawncare.com' },
}

const services = [
  {
    icon: '🌿',
    svgPath: 'M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2C7.58 4 4 7.58 4 12c0 2.85 1.36 5.38 3.48 6.96C7.17 16.82 6 14.54 6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.54-1.17 4.82-3.48 6.96A9.962 9.962 0 0 0 22 12c0-4.42-3.58-8-10-8z',
    label: 'Lawn Care & Mowing',
    desc: 'Clean cuts, clean edges — every visit.',
  },
  {
    icon: '❄️',
    svgPath: 'M20 12h-4.17l2.58-2.59L17 8l-5 5-5-5-1.41 1.41L8.17 12H4v2h4.17l-2.58 2.58L7 18l5-5 5 5 1.41-1.41L15.83 14H20v-2z',
    label: 'Snow Removal',
    desc: 'Driveways, walkways, and lots cleared fast.',
  },
  {
    icon: '🧊',
    svgPath: 'M7 4h2v2H7V4zm8 0h2v2h-2V4zM5 8h14v2H5V8zm-2 4h18v2H3v-2zm2 4h14v2H5v-2z',
    label: 'Ice Dam Removal',
    desc: 'Safe, damage-free removal before leaks start.',
  },
  {
    icon: '🍂',
    svgPath: 'M3 19h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3V7zm0-4h18v2H3V3z',
    label: 'Gutter Cleaning',
    desc: 'Clear gutters, protected foundations.',
  },
  {
    icon: '🌱',
    svgPath: 'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 4-2 8-2s4 2 8 2v-2c-4 0-4-2-8-2-1.13 0-1.9.16-2.53.33C14.28 13.42 16 10.5 17 8z',
    label: 'Seasonal Cleanups',
    desc: 'Spring and fall — complete property refresh.',
  },
  {
    icon: '🔧',
    svgPath: 'M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 11.5C19.43 11.5 21 9.93 21 8C21 7.41 20.83 6.86 20.57 6.37L18 9L15 6L17.63 3.43C17.14 3.17 16.59 3 16 3C14.07 3 12.5 4.57 12.5 6.5C12.5 6.91 12.59 7.29 12.72 7.66L3 17.38V21H6.62L12.34 15.28C12.71 15.41 13.09 15.5 13.5 15.5C13.59 15.5 13.67 15.5 13.75 15.48L8.5 21L12.06 17.5L12 17.38V21H6.62L12.34 15.28C12.71 15.41 13.09 15.5 13.5 15.5C15.43 15.5 17 13.93 17 12C17 11.83 16.97 11.67 16.95 11.51L17.5 11.5Z',
    label: 'Property Maintenance',
    desc: 'Year-round care that keeps your property sharp.',
  },
]

const trustMarkers = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: CheckCircle2, text: 'Residential & Commercial' },
  { icon: CalendarCheck, text: 'Year-Round Service' },
  { icon: Wrench, text: 'Hartford Area, CT' },
]

const whyUs = [
  {
    title: 'Show up. Every time.',
    body: 'We don\'t reschedule on a whim. When we say we\'ll be there Monday morning, we\'re there Monday morning.',
  },
  {
    title: 'Fully insured — no exceptions.',
    body: 'Every job is covered. You hire us with complete confidence that your property and our crew are protected.',
  },
  {
    title: 'One company, every season.',
    body: 'From spring cleanups to winter snow, we handle it all so you\'re never left hunting for a new contractor.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-24 sm:pb-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85&fm=webp"
            alt="Beautiful green lawn and garden in Connecticut"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Layered gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-lemon/15 border border-lemon/30 text-lemon px-3.5 py-1.5 rounded-full text-xs font-display font-700 tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-lemon inline-block" />
              Hartford Area, Connecticut
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-200 font-display font-800 text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.02] mb-6">
              Clean Lawns.{' '}
              <br />
              Clear Gutters.{' '}
              <br />
              <span className="text-lemon">Connecticut.</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up delay-300 text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Fully insured residential and commercial lawn care, snow removal, and
              year-round property maintenance. Hartford area and beyond.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-lemon text-forest font-display font-700 text-base px-6 py-3.5 rounded-full transition-colors duration-200 hover:bg-lemon-dark cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:9592229593"
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-display font-700 text-base px-6 py-3.5 rounded-full transition-colors duration-200 hover:bg-white/20 cursor-pointer"
              >
                <Phone size={16} strokeWidth={2.5} />
                (959) 222-9593
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-lemon">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustMarkers.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-forest" strokeWidth={2.5} />
                <span className="font-display font-700 text-forest text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateSection>
            <div className="mb-16">
              <p className="text-forest-mid font-display font-700 text-sm tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2 className="font-display font-800 text-4xl sm:text-5xl text-ink max-w-lg leading-tight">
                Every property need, covered.
              </h2>
            </div>
          </AnimateSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <AnimateSection key={service.label} delay={i * 0.07}>
                <div className="bg-cream p-8 group hover:bg-forest-faint transition-colors duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-forest-faint group-hover:bg-forest/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <ServiceIcon path={getIconPath(service.label)} />
                  </div>
                  <h3 className="font-display font-700 text-lg text-ink mb-2">{service.label}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimateSection>
            ))}
          </div>

          <AnimateSection delay={0.4}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-forest-mid font-display font-700 text-sm hover:text-forest transition-colors duration-200 cursor-pointer"
              >
                View all services
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </AnimateSection>
        </div>
      </section>

      {/* ── WHY LEMON ── */}
      <section className="bg-forest py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateSection>
            <div className="mb-16">
              <p className="text-lemon font-display font-700 text-sm tracking-widest uppercase mb-3">
                Why Lemon
              </p>
              <h2 className="font-display font-800 text-4xl sm:text-5xl text-white max-w-lg leading-tight">
                Reliable. Insured.{' '}
                <span className="text-lemon">Here year-round.</span>
              </h2>
            </div>
          </AnimateSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {whyUs.map((item, i) => (
              <AnimateSection key={item.title} delay={i * 0.12}>
                <div>
                  <span className="font-display font-800 text-6xl text-white/10 block mb-4 select-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-700 text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE STRIP ── */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&fm=webp"
          alt="Professional lawn mowing service in Connecticut"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/40" />
      </div>

      {/* ── CTA BANNER ── */}
      <section className="bg-lemon py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <AnimateSection>
            <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-forest leading-tight mb-6">
              Ready for a property
              <br />
              you&apos;re proud of?
            </h2>
            <p className="text-forest/65 text-lg mb-10 max-w-md mx-auto">
              Get a free, no-obligation quote. We&apos;ll walk your property and tell you exactly
              what it needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest text-white font-display font-700 text-base px-7 py-4 rounded-full transition-colors duration-200 hover:bg-forest-mid cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:9592229593"
                className="inline-flex items-center gap-2 border-2 border-forest/30 text-forest font-display font-700 text-base px-7 py-4 rounded-full transition-colors duration-200 hover:border-forest cursor-pointer"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call Us Now
              </a>
            </div>
          </AnimateSection>
        </div>
      </section>

      {/* Spacer for mobile call button */}
      <div className="md:hidden h-20" />
    </>
  )
}

function getIconPath(label: string): string {
  const map: Record<string, string> = {
    'Lawn Care & Mowing':
      'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 4-2 8-2s4 2 8 2v-2c-4 0-4-2-8-2-1.13 0-1.9.16-2.53.33C14.28 13.42 16 10.5 17 8z',
    'Snow Removal':
      'M20 12h-4.17l2.58-2.59L17 8l-5 5-5-5-1.41 1.41L8.17 12H4v2h4.17l-2.58 2.58L7 18l5-5 5 5 1.41-1.41L15.83 14H20v-2z',
    'Ice Dam Removal':
      'M12 2L9 7l-5.5 1 4 3.9-.95 5.5L12 15l5.45 2.4-.95-5.5 4-3.9L15 7z',
    'Gutter Cleaning':
      'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z',
    'Seasonal Cleanups':
      'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z',
    'Property Maintenance':
      'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
  }
  return (
    map[label] ||
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  )
}

function ServiceIcon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-forest-mid"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}
