import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { generalFaqs } from '../../data/faqs';
import { PRIMARY_DOMAIN } from '../../siteSeo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  noIndex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update title
    if (title) {
      document.title = title;
    }

    // Dynamically update or inject meta description
    const descContent =
      description ||
      'Kalyan Homeo Care offers personalized homeopathic consultations in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. Branches in Dwaraka Nagar, Old Gajuwaka and Steel Plant.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descContent);

    // Robots meta tag handling
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute(
      'content',
      noIndex ? 'noindex, nofollow' : 'index, follow'
    );

    // Dynamically update canonical link
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    const canonicalHref = canonical || `${PRIMARY_DOMAIN}${cleanPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalHref);

    // Dynamically update OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalHref);
    }

    // Inject JSON-LD Schema on Home Page
    const existingSchema = document.getElementById('medical-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (!noIndex && location.pathname === '/') {
      const script = document.createElement('script');
      script.id = 'medical-schema';
      script.type = 'application/ld+json';

      const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalClinic',
            '@id': `${PRIMARY_DOMAIN}/#clinic`,
            'name': siteConfig.name,
            'url': PRIMARY_DOMAIN,
            'telephone': siteConfig.phone,
            'logo': `${PRIMARY_DOMAIN}/kalyanhomeo-logo.png`,
            'image': `${PRIMARY_DOMAIN}/home-bg.png`,
            'medicalSpecialty': 'Homeopathic',
            'sameAs': [siteConfig.youtubeUrl],
            'address': {
              '@type': 'PostalAddress',
              'streetAddress':
                'Sankara Matam Rd, near Diamond Park, opposite Venkatarama Hospital, Dondaparthy, Dwaraka Nagar',
              'addressLocality': 'Visakhapatnam',
              'addressRegion': 'Andhra Pradesh',
              'postalCode': '530016',
              'addressCountry': 'IN',
            },
            'physician': {
              '@type': 'Physician',
              '@id': `${PRIMARY_DOMAIN}/#doctor`,
              'name': siteConfig.doctor.name,
              'jobTitle': siteConfig.doctor.role,
              'honorificSuffix': siteConfig.doctor.qualification,
              'telephone': siteConfig.doctor.phone,
              'image': `${PRIMARY_DOMAIN}/ravikumar.webp`,
            },
          },
          {
            '@type': 'FAQPage',
            '@id': `${PRIMARY_DOMAIN}/#faq`,
            'mainEntity': generalFaqs.map((f) => ({
              '@type': 'Question',
              'name': f.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': f.answer,
              },
            })),
          },
        ],
      };

      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById('medical-schema');
      if (el) el.remove();
    };
  }, [title, description, canonical, noIndex, location.pathname]);

  return null;
};
