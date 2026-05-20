import Link from 'next/link'
import Image from 'next/image'
import { Phone, Clock, MapPin } from 'lucide-react'

const services = [
  'Lawn Care & Mowing',
  'Snow Removal',
  'Ice Dam Removal',
  'Gutter Cleaning',
  'Seasonal Cleanups',
  'Property Maintenance',
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.jpg"
                  alt="Lemon Lawn Care LLC"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-display font-700 text-white text-lg tracking-tight">
                Lemon <span className="text-lemon">Lawn Care</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Fully insured residential and commercial lawn care and property maintenance
              throughout Connecticut.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-lemon transition-colors duration-200 cursor-pointer"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-lemon transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9592229593"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-lemon transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  (959) 222-9593
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>
                  Mon–Sat: 7:00 AM – 5:30 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Hartford Area, Connecticut
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/35">
          <p>&copy; {new Date().getFullYear()} Lemon Lawn Care LLC. All rights reserved.</p>
          <p>Fully Insured · Residential & Commercial · Connecticut</p>
        </div>
      </div>
    </footer>
  )
}
