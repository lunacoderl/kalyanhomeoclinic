export interface SiteConfig {
  name: string;
  tagline: string;
  subtitle: string;
  doctor: {
    name: string;
    qualification: string;
    role: string;
    phone: string;
    image: string;
    bio: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  youtubeUrl: string;
  logo: string;
  homeBg: string;
  serviceBg: string;
  contactBg: string;
}

export const siteConfig: SiteConfig = {
  name: "Kalyan Homeo Care",
  tagline: "Rapid gentle permanent cure",
  subtitle: "Caring for Health, Naturally",
  doctor: {
    name: "Dr. Ch. Ravi Kumar",
    qualification: "M.D.",
    role: "Homeopathic Physician",
    phone: "08008300155",
    image: "/ravikumar.webp",
    bio: "Dr. Ch. Ravi Kumar, M.D., is a dedicated Homeopathic Physician with extensive clinical experience in individualized constitutional homeopathy. Known for his compassionate patient listening, in-depth case analysis, and gentle holistic care, he has guided thousands of families across Visakhapatnam toward enduring health and vitality."
  },
  phone: "08008300155",
  phoneDisplay: "080083 00155",
  whatsappNumber: "918008300155",
  defaultWhatsAppMessage: "Hello Kalyan Homeo Care, I would like to enquire about a consultation with Dr. Ch. Ravi Kumar.",
  youtubeUrl: "https://www.youtube.com/@kalyanhomeocare",
  logo: "/kalyanhomeo-logo.png",
  homeBg: "/home-bg.png",
  serviceBg: "/servicesection-bg.png",
  contactBg: "/contactpage-bg.png"
};

export const getWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(message || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};
