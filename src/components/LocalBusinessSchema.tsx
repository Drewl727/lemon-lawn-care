export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lemon Lawn Care LLC',
    telephone: '(959) 222-9593',
    url: 'https://lemonlawncare.com',
    logo: 'https://lemonlawncare.com/logo.jpg',
    image: 'https://lemonlawncare.com/logo.jpg',
    description:
      'Fully insured residential and commercial lawn care, snow removal, ice dam removal, gutter cleaning, and seasonal property maintenance in Connecticut.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hartford',
      addressRegion: 'CT',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'State', name: 'Connecticut' },
      { '@type': 'City', name: 'Hartford' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '17:30',
      },
    ],
    knowsAbout: [
      'lawn care',
      'snow removal',
      'ice dam removal',
      'gutter cleaning',
      'seasonal cleanup',
      'property maintenance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lawn and Property Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Care & Mowing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Snow Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ice Dam Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal Cleanups' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Maintenance' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
