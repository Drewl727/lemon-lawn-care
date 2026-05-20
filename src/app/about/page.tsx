import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Users, Repeat2, Clock, ArrowRight } from 'lucide-react'
import AnimateSection from '@/components/AnimateSection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Lemon Lawn Care LLC is a fully insured lawn care and property maintenance company serving residential and commercial clients throughout Connecticut. Hartford area.',
  alternates: { canonical: 'https://lemonlawncare.com/about' },
}

const commitments = [
  {
    icon: Shield,
    title: 'Fully Insured',
    body: 'Every job is fully covered. You never have to wonder whether your property — or our crew — is protected. Full liability and workers\' compensation, no exceptions.',
  },
  {
    icon: Users,
    title: 'Residential & Commercial',
    body: 'From a single-family home to a commercial property, we scale to fit the job. Same attention to detail regardless of the size of the site.',
  },
  {
    icon: Repeat2,
    title: 'Year-Round Service',
    body: 'Lawn mowing in May, snow removal in January. We are the one company that handles your property in every season, so you are never left searching for a new contractor.',
  },
  {
    icon: Clock,
    title: 'We Show Up',
    body: 'We know what the most important thing is in this industry: showing up when we say we will. We take that seriously, every single time.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-forest pt-32 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1599595044939-5c4e1ef47fcf?w=1920&q=60&fm=webp"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-lemon font-display font-700 text-sm tracking-widest uppercase mb-4 animate-fade-up">
            Who We Are
          </p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl text-white max-w-2xl leading-tight animate-fade-up delay-100">
            Built on reliability.
          </h1>
          <p className="mt-6 text-white/65 text-lg max-w-xl animate-fade-up delay-200">
            Lemon Lawn Care LLC is a fully insured property services company serving the Hartford
            area and Connecticut. Residential. Commercial. Year-round.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Text */}
            <AnimateSection>
              <div>
                <p className="text-forest-mid font-display font-700 text-sm tracking-widest uppercase mb-4">
                  Our Story
                </p>
                <h2 className="font-display font-800 text-4xl sm:text-5xl text-ink leading-tight mb-6">
                  Connecticut property care, done properly.
                </h2>
                <div className="space-y-4 text-ink-muted leading-relaxed text-base">
                  <p>
                    Lemon Lawn Care LLC was built on a simple idea: Connecticut property owners
                    deserve a service company they can actually count on. One that shows up on
                    time, does the work right, and is fully covered if anything ever goes wrong.
                  </p>
                  <p>
                    We serve residential homeowners and commercial property managers throughout
                    the Hartford area with a full menu of services — from routine lawn mowing and
                    seasonal cleanups to snow removal and ice dam remediation when winter arrives.
                  </p>
                  <p>
                    No subcontracting, no surprises. When you call Lemon Lawn Care, you get us.
                  </p>
                </div>
              </div>
            </AnimateSection>

            {/* Image */}
            <AnimateSection delay={0.12}>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&fm=webp"
                    alt="Well-maintained residential lawn in Connecticut"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-lemon rounded-2xl px-6 py-4 shadow-lg">
                  <p className="font-display font-800 text-2xl text-forest">Fully</p>
                  <p className="font-display font-800 text-2xl text-forest">Insured</p>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className="bg-forest-faint border-y border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimateSection>
            <div className="mb-16">
              <p className="text-forest-mid font-display font-700 text-sm tracking-widest uppercase mb-3">
                What You Can Count On
              </p>
              <h2 className="font-display font-800 text-4xl sm:text-5xl text-ink max-w-xl leading-tight">
                Our commitments to every client.
              </h2>
            </div>
          </AnimateSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {commitments.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimateSection key={item.title} delay={i * 0.1}>
                  <div className="bg-cream rounded-2xl p-8">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-forest-mid" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display font-700 text-xl text-ink mb-3">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </AnimateSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateSection>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fm=webp"
                  alt="Lawn care service area Connecticut"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateSection>

            <AnimateSection delay={0.1}>
              <p className="text-forest-mid font-display font-700 text-sm tracking-widest uppercase mb-4">
                Service Area
              </p>
              <h2 className="font-display font-800 text-4xl sm:text-5xl text-ink leading-tight mb-6">
                Serving Hartford and all of Connecticut.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                We are based in the Hartford area and serve residential and commercial clients
                throughout Connecticut. If you&apos;re unsure whether we cover your location,
                give us a call — we&apos;re always happy to discuss.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-ink-muted mb-8">
                {['Hartford', 'West Hartford', 'East Hartford', 'Glastonbury', 'Rocky Hill', 'Wethersfield', 'Newington', 'Bloomfield'].map(city => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-mid shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-muted">
                ...and surrounding Connecticut communities.
              </p>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-lemon py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <AnimateSection>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-forest leading-tight mb-5">
              Let&apos;s work together.
            </h2>
            <p className="text-forest/65 text-lg mb-8 max-w-md mx-auto">
              Get a free quote for your property. We&apos;ll walk you through exactly what we can do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest text-white font-display font-700 text-base px-7 py-4 rounded-full transition-colors duration-200 hover:bg-forest-mid cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </AnimateSection>
        </div>
      </section>

      <div className="md:hidden h-20" />
    </>
  )
}
