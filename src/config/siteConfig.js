// src/config/siteConfig.js

// Edit this file to configure VINCIT FITNESS details.
export const siteConfig = {
  brand: 'VINCIT FITNESS',

  productionDomain: 'https://example.com',

  // WhatsApp number with India country code
  whatsappNumber: '919362037506',

  gymAddress: 'VINCIT FITNESS, Hyderabad, Telangana, India',

  // Google Maps location
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=VINCIT%20FITNESS%20Hyderabad&output=embed',

  googleMapsDirectionsUrl:
    'https://maps.app.goo.gl/eM1xK3wg6oPuzfrn6?g_st=iw',

  email: '',

  businessHours: 'Please contact the gym to confirm opening hours.',

  heroVideoSrc: '/videos/vincit-background.mp4',

  heroPosterSrc: '/images/gym-poster.svg',

  favicon: '/favicon.svg',

  defaultDescription:
    'Train with purpose, build strength, and find a membership that fits your goals at VINCIT FITNESS.',
};

export function whatsappUrl(message) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');

  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export function directionsUrl() {
  return (
    siteConfig.googleMapsDirectionsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.gymAddress
    )}`
  );
}