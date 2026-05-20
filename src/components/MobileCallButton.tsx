import { Phone } from 'lucide-react'

export default function MobileCallButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-ink/30 to-transparent pointer-events-none">
      <a
        href="tel:9592229593"
        className="pointer-events-auto flex items-center justify-center gap-3 bg-lemon text-forest font-display font-700 text-base w-full py-4 rounded-2xl shadow-xl shadow-forest/20 cursor-pointer"
      >
        <Phone size={20} strokeWidth={2.5} />
        Call (959) 222-9593
      </a>
    </div>
  )
}
