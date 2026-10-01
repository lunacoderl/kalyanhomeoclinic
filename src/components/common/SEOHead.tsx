import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { generalFaqs } from '../../data/faqs';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical
}) => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update title
    if (title) {
      document.title = title;
    }

    // Dynamically update or inject meta description
    const descContent = description || "Kalyan Homeo Care offers personalized homeopathic consultations in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. Branches in Dwaraka Nagar, Old Gajuwaka and Steel Plant.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descContent);

    // Dynamically update canonical link
    const canonicalHref = canonical || `https://kalyanhomeocare.com${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalHref);

    // Inject JSON-LD Schema on Home Page
    const existingSchema = document.getElementById('medical-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'medical-schema';
    script.type = 'application/ld+json';

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalClinic",
          "@id": "https://kalyanhomeocare.com/#clinic",
          "name": siteConfig.name,
          "url": "https://kalyanhomeocare.com",
          "telephone": siteConfig.phone,
          "logo": "https://kalyanhomeocare.com/kalyanhomeo-logo.png",
          "image": "https://kalyanhomeocare.com/home-bg.png",
          "medicalSpecialty": "Homeopathic",
          "sameAs": [
            siteConfig.youtubeUrl
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sankara Matam Rd, near Diamond Park, opposite Venkatarama Hospital, Dondaparthy, Dwaraka Nagar",
            "addressLocality": "Visakhapatnam",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "530016",
            "addressCountry": "IN"
          },
          "physician": {
            "@type": "Physician",
            "@id": "https://kalyanhomeocare.com/#doctor",
            "name": siteConfig.doctor.name,
            "jobTitle": siteConfig.doctor.role,
            "honorificSuffix": siteConfig.doctor.qualification,
            "telephone": siteConfig.doctor.phone,
            "image": "https://kalyanhomeocare.com/ravikumar.webp"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://kalyanhomeocare.com/#faq",
          "mainEntity": generalFaqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('medical-schema');
      if (el) el.remove();
    };
  }, [title, description, canonical, location.pathname]);

  return null;
};
