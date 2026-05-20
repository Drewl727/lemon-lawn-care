'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const solid = scrolled || !isHome || open

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-forest shadow-lg shadow-forest/20'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative h-9 w-9">
                <Image
                  src="/logo.jpg"
                  alt="Lemon Lawn Care LLC logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                  priority
                />
              </div>
              <span className="font-display font-700 text-lg tracking-tight text-white-tinted">
                Lemon <span className="text-lemon">Lawn Care</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    pathname === href
                      ? 'text-lemon'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Phone CTA */}
            <a
              href="tel:9592229593"
              className="hidden md:flex items-center gap-2 bg-lemon text-forest font-display font-700 text-sm px-4 py-2 rounded-full transition-colors duration-200 hover:bg-lemon-dark cursor-pointer"
            >
              <Phone size={15} strokeWidth={2.5} />
              (959) 222-9593
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1 cursor-pointer"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 bg-forest flex flex-col pt-16 transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-6 pt-8 gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-display font-700 text-3xl py-3 border-b border-white/10 transition-colors ${
                pathname === href ? 'text-lemon' : 'text-white/90 hover:text-lemon'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 px-6">
          <a
            href="tel:9592229593"
            className="flex items-center justify-center gap-2 bg-lemon text-forest font-display font-700 text-lg px-6 py-4 rounded-2xl w-full cursor-pointer"
          >
            <Phone size={20} strokeWidth={2.5} />
            (959) 222-9593
          </a>
        </div>
        <p className="mt-4 px-6 text-white/40 text-sm">
          Mon–Sat 7 AM–5:30 PM
        </p>
      </div>
    </>
  )
}
