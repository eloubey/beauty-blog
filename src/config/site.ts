// EDIT THIS FILE to rename the site, add/remove categories, change social links and homepage sections.
export type Cat = { slug: string; name: string; blurb?: string; image?: string; children?: Cat[] };

export const site = {
  name: 'MKDIR',
  tagline: 'Fashion, beauty and lifestyle ideas that fit a real budget.',
  heroTitle: 'MKDIR',
  heroSub: 'Be the most polished version of you.',
  heroText: 'Outfit ideas, skincare, hair, nails and easy recipes, tested and explained simply.',
  author: { name: 'Your Name', bio: 'Write a short, friendly bio here. Explain who you are, what you test and why readers can trust your picks.', image: '' },
  social: { pinterest: 'https://pinterest.com/', instagram: 'https://instagram.com/', facebook: 'https://facebook.com/' },
  topLinks: [{ name: 'Home', href: '/' }, { name: 'About', href: '/about/' }, { name: 'Contact', href: '/contact/' }],
  legalLinks: [{ name: 'Privacy Policy', href: '/privacy-policy/' }, { name: 'Disclaimer', href: '/disclaimer/' }],
  affiliateNotice: 'Some links on this site are affiliate links. If you buy through them, we may earn a small commission at no extra cost to you.',
  newsletter: { enabled: true, action: 'https://example.com/subscribe' }, // point to your email provider's form URL
};

export const categories: Cat[] = [
  { slug: 'fashion', name: 'Fashion', blurb: 'Outfits & trends' },
  { slug: 'makeup', name: 'Makeup', blurb: 'Looks & tutorials' },
  { slug: 'skincare', name: 'Skincare', blurb: 'Routines & remedies' },
  { slug: 'hair', name: 'Hair', blurb: 'Cuts & hairstyles' },
  { slug: 'nails', name: 'Nails', blurb: 'Manicure ideas' },
  { slug: 'recipes', name: 'Recipes', blurb: 'Easy food', children: [
    { slug: 'breakfast', name: 'Breakfast & Brunch' }, { slug: 'dinners', name: 'Dinners' }, { slug: 'desserts', name: 'Desserts' }, { slug: 'drinks', name: 'Drinks' } ] },
  { slug: 'lifestyle', name: 'Lifestyle', blurb: 'Self-care & habits' },
  { slug: 'guides', name: 'Guides', blurb: 'Gift guides & how-tos' },
];

// Homepage editorial rows (heading shown + category slug).
export const homeSections = [
  { title: 'Fashion Fixes', slug: 'fashion' }, { title: 'Mani Moments', slug: 'nails' },
  { title: 'Hair Happenings', slug: 'hair' }, { title: 'Skin Secrets', slug: 'skincare' },
  { title: 'Self-Love Lab', slug: 'lifestyle' },
];
