export const PRIMARY_DOMAIN = 'https://www.kalyanhomeocare.com';

export const siteSeo = {
  primaryDomain: PRIMARY_DOMAIN,
  siteName: 'Kalyan Homeo Care',
  defaultTitle: 'Kalyan Homeo Care | Homeopathy Clinic in Visakhapatnam',
  defaultDescription:
    'Kalyan Homeo Care offers personalized homeopathic consultations in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. Branches in Dwaraka Nagar, Old Gajuwaka, and Steel Plant.',
  canonicalUrl: (path: string = '') => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${PRIMARY_DOMAIN}${cleanPath === '/' ? '' : cleanPath}`;
  },
};
