import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimateSection from '@/components/AnimateSection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Lawn care, snow removal, ice dam removal, gutter cleaning, seasonal cleanups, and general property maintenance in Connecticut. Fully insured residential and commercial.',
  alternates: { canonical: 'https://lemonlawncare.com/services' },
}

const services = [
  {
    id: 'lawn-care',
    title: 'Lawn Care & Mowing',
    tagline: 'Weekly mowing, edging, and cleanup — done right.',
    description:
      'A well-kept lawn makes a statement. We show up on schedule, mow at the correct height for the season, edge clean lines along every walkway and curb, and blow down every hard surface before we leave. Residential lawns and commercial properties across Connecticut.',
    bullets: [
      'Consistent weekly or bi-weekly schedules',
      'Clean edge lines on driveways, walks, and beds',
      'Post-mow blowdown — no clippings left behind',
      'Seasonal height adjustments',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fm=webp',
    imageAlt: 'Professional lawn mowing service in Connecticut',
    keywords: 'lawn care Connecticut, lawn mowing Hartford CT',
  },
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    tagline: 'Cleared before you need to leave.',
    description:
      'Connecticut winters are unpredictable. We are not. When snow falls overnight, we are on-site early so your driveway, walkways, and parking areas are clear before the morning rush. We serve residential homes and commercial properties throughout the Hartford area.',
    bullets: [
      'Driveways, walkways, and parking lots',
      'Salt/sand application for ice prevention',
      'Early morning response on snowfall days',
      'Seasonal contracts available',
    ],
    image: 'https://images.unsplash.com/photo-1547671537-70d33b9be8c8?w=900&q=80&fm=webp',
    imageAlt: 'Snow removal service Hartford Connecticut',
    keywords: 'snow removal Hartford CT, snow plowing Connecticut',
  },
  {
    id: 'ice-dam-removal',
    title: 'Ice Dam Removal',
    tagline: 'Stop leaks before they start.',
    description:
      'Ice dams form when heat from inside your home melts snow on the roof, which then refreezes at the eave. Left alone, they force water under shingles and into your home. We remove ice dams safely using low-pressure steam — no hacking, no roof damage, no problem.',
    bullets: [
      'Low-pressure steam removal — zero roof damage',
      'Emergency response available',
      'Residential and commercial structures',
      'Post-removal assessment included',
    ],
    image: 'https://images.unsplash.com/photo-1547481887-a26e2cacbbb4?w=900&q=80&fm=webp',
    imageAlt: 'Ice dam removal service Connecticut winter',
    keywords: 'ice dam removal CT, ice dam removal Hartford',
  },
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    tagline: 'Clear gutters. Protected foundation.',
    description:
      'Clogged gutters overflow, pulling water toward your foundation and causing long-term structural damage. We clear every section of debris, check for proper pitch and drainage, and leave every downspout running free. Recommended twice a year — spring and fall.',
    bullets: [
      'Full debris removal — leaves, seeds, buildup',
      'Downspout flush and check',
      'Gutter pitch and bracket inspection',
      'Spring and fall scheduling available',
    ],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&fm=webp',
    imageAlt: 'Gutter cleaning residential Connecticut',
    keywords: 'gutter cleaning Connecticut, gutter cleaning Hartford CT',
  },
  {
    id: 'seasonal-cleanups',
    title: 'Seasonal Cleanups',
    tagline: 'A fresh start every spring. A clean finish every fall.',
    description:
      'Seasonal transitions leave a mess. Spring cleanup clears the debris winter left behind and preps your lawn for growth season. Fall cleanup removes leaves, cuts back perennials, and protects beds for winter. We handle both — so your property looks sharp heading into every season.',
    bullets: [
      'Spring: debris removal, bed edging, lawn prep',
      'Fall: leaf removal, bed cleanup, winter prep',
      'Brush and branch removal',
      'Mulch top-dressing available (add-on)',
    ],
    image: 'https://images.unsplash.com/photo-1599595044939-5c4e1ef47fcf?w=900&q=80&fm=webp',
    imageAlt: 'Fall leaf cleanup Connecticut yard',
    keywords: 'seasonal cleanup Connecticut, fall cleanup Hartford',
  },
  {
    id: 'property-maintenance',
    title: 'General Property Maintenance',
    tagline: 'One company. Every need.',
    description:
      'Beyond the lawn, properties need regular attention to stay sharp. We handle the tasks that pile up when you\'re busy — trimming overgrowth, clearing brush, maintaining beds, and general upkeep that keeps residential and commercial properties looking their best year-round.',
    bullets: [
      'Shrub and hedge trimming',
      'Bed maintenance and weeding',
      'Brush clearing and disposal',
      'Custom recurring maintenance plans',
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&fm=webp',
    imageAlt: 'General property maintenance Connecticut landscaping',
    keywords: 'property maintenance Connecticut, fully insured landscaping Hartford',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-forest pt-32 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=60&fm=webp"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-lemon font-display font-700 text-sm tracking-widest uppercase mb-4 animate-fade-up">
            What We Do
          </p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl text-white max-w-2xl leading-tight animate-fade-up delay-100">
            Every service your property needs.
          </h1>
          <p className="mt-6 text-white/65 text-lg max-w-xl animate-fade-up delay-200">
            Lawn care to snow removal, gutters to seasonal cleanups — year-round, fully insured,
            Hartford area.
          </p>
        </div>
      </section>

      {/* ── SERVICE DETAIL SECTIONS ── */}
      <div className="divide-y divide-border">
        {services.map((service, i) => {
          const isEven = i % 2 === 0
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-20 sm:py-28"
              aria-labelledby={`service-${service.id}`}
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text */}
                  <AnimateSection className={isEven ? '' : 'lg:order-2'}>
                    <p className="text-forest-mid font-display font-700 text-xs tracking-widest uppercase mb-3">
                      {service.keywords.split(',')[0].trim()}
                    </p>
                    <h2
                      id={`service-${service.id}`}
                      className="font-display font-800 text-3xl sm:text-4xl text-ink leading-tight mb-3"
                    >
                      {service.title}
                    </h2>
                    <p className="text-forest-mid font-display font-700 text-lg mb-5">
                      {service.tagline}
                    </p>
                    <p className="text-ink-muted leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.bullets.map(b => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-forest-mid mt-0.5 shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-ink-muted text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-forest text-white font-display font-700 text-sm px-5 py-3 rounded-full transition-colors duration-200 hover:bg-forest-mid cursor-pointer"
                    >
                      Get a Quote
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </AnimateSection>

                  {/* Image */}
                  <AnimateSection delay={0.1} className={isEven ? '' : 'lg:order-1'}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </AnimateSection>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-lemon py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <AnimateSection>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-forest leading-tight mb-5">
              Not sure what you need?
            </h2>
            <p className="text-forest/65 text-lg mb-8 max-w-md mx-auto">
              Tell us about your property and we&apos;ll put together the right plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest text-white font-display font-700 text-base px-7 py-4 rounded-full transition-colors duration-200 hover:bg-forest-mid cursor-pointer"
            >
              Request a Free Quote
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </AnimateSection>
        </div>
      </section>

      <div className="md:hidden h-20" />
    </>
  )
}
