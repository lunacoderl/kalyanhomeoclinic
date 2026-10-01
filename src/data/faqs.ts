export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const generalFaqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Where is Kalyan Homeo Care located in Visakhapatnam?",
    answer: "Kalyan Homeo Care operates three clinics across Visakhapatnam: the Main Branch in Dwaraka Nagar (Sankara Matam Rd, near Diamond Park), Old Gajuwaka (near Latha Hospital), and Steel Plant Township (Russian Shopping Complex, Sector 1).",
    category: "Locations"
  },
  {
    id: "faq-2",
    question: "How can I book an appointment with Dr. Ch. Ravi Kumar, M.D.?",
    answer: "You can book directly by calling 08008300155, sending a message on WhatsApp via our dedicated online button, or walking into the Dwaraka Nagar, Old Gajuwaka, or Steel Plant branches during consultation hours.",
    category: "Appointments"
  },
  {
    id: "faq-3",
    question: "Can I consult through WhatsApp before visiting the clinic?",
    answer: "Yes, you can initiate an enquiry on WhatsApp to check Dr. Ravi Kumar's consultation schedule, ask about health concerns, and confirm clinic timings.",
    category: "Consultations"
  },
  {
    id: "faq-4",
    question: "What health conditions are treated at Kalyan Homeo Care?",
    answer: "Dr. Ch. Ravi Kumar consults for a wide spectrum of acute and chronic health concerns including Kidney Problems, PCOD/PCOS, Thyroid Disorders, Diabetes Management, Allergies & Asthma, Arthritis & Joint Pain, Skin Diseases (Psoriasis, Eczema), Pediatric Health, and Piles/Fissures.",
    category: "Services"
  },
  {
    id: "faq-5",
    question: "What are the clinic timings for the branches?",
    answer: "The Dwaraka Nagar and Old Gajuwaka branches operate from 10:00 AM to 8:00 PM. The Steel Plant branch provides continuous service availability (24 Hours).",
    category: "Timings"
  },
  {
    id: "faq-6",
    question: "What should I bring to my first homeopathic consultation?",
    answer: "Please bring any recent diagnostic reports (blood tests, ultrasound, thyroid panels, X-rays), details of current ongoing medications, and a chronological history of your symptoms.",
    category: "Consultations"
  },
  {
    id: "faq-7",
    question: "Are homeopathic medicines safe for infants and elderly patients?",
    answer: "Yes. Homeopathic remedies are gentle, highly diluted, non-addictive, and free from adverse biochemical toxicity, making them safe for newborn infants, pregnant mothers, and elderly patients under qualified guidance.",
    category: "Safety"
  },
  {
    id: "faq-8",
    question: "How does homeopathic treatment work?",
    answer: "Homeopathy follows the constitutional principle of 'like cures like' (Similia Similibus Curentur), stimulating the body's natural defense mechanisms and immune vitality through personalized, micro-diluted remedies.",
    category: "About Homeopathy"
  }
];
