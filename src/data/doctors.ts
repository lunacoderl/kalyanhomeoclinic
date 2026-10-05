export interface DoctorItem {
  id: string;
  name: string;
  degree: string;
  qualification: string;
  role: string;
  image: string;
  experience: string;
  specialization: string[];
  motto: string;
  bio: string;
  branches: string[];
  availability: string;
  phone?: string;
}

export const doctorsData: DoctorItem[] = [
  {
    id: "dr-ravi-kumar",
    name: "Dr. Ch. Ravi Kumar",
    degree: "M.D.",
    qualification: "M.D. (Hom.)",
    role: "Chief Homeopathic Physician & Founder",
    image: "/ravikumar.webp",
    experience: "17+ Years Experience",
    specialization: [
      "Chronic & Autoimmune Diseases",
      "Constitutional Repertorization",
      "Stubborn Skin & Joint Pathologies",
      "Severe Kidney Stone & Fistula Care"
    ],
    motto: "Rapid gentle permanent cure through individualized constitutional healing.",
    bio: "Founder and Chief Physician of Kalyan Homeo Care. Renowned across Visakhapatnam for compassionate case analysis, clinical depth, and helping thousands overcome long-standing chronic conditions without surgical intervention or drug dependency.",
    branches: ["Dwaraka Nagar", "Old Gajuwaka", "Steel Plant"],
    availability: "Mon – Sat (10:00 AM – 8:00 PM)",
    phone: "08008300155"
  },
  {
    id: "dr-sudhakar",
    name: "Dr. Sudhakar",
    degree: "MD (Hom.)",
    qualification: "M.D. (Homeopathy)",
    role: "Senior Consultant Homeopathic Physician",
    image: "/dr-sudhakar.jpg",
    experience: "14+ Years Experience",
    specialization: [
      "Metabolic & Digestive Disorders",
      "Chronic Joint & Spine Pain",
      "Renal & Respiratory Health",
      "Constitutional Materia Medica"
    ],
    motto: "Homeopathy Treats the Individual, Not just the Disease — Your Health Our Priority.",
    bio: "Senior Consultant at Kalyan Homeo Care specializing in deep Materia Medica and constitutional case evaluation. Passionate about identifying root emotional and metabolic causes, Dr. Sudhakar empowers patients to regain robust vitality naturally.",
    branches: ["Dwaraka Nagar", "Old Gajuwaka"],
    availability: "Mon – Sat (10:00 AM – 8:00 PM)",
    phone: "08008300155"
  },
  {
    id: "dr-shweta",
    name: "Dr. Shweta",
    degree: "BHMS",
    qualification: "B.H.M.S.",
    role: "Consultant Homeopathic Physician",
    image: "/dr-shweta.jpg",
    experience: "8+ Years Experience",
    specialization: [
      "Women's Health (PCOD/PCOS & Thyroid)",
      "Pediatric & Child Immunity",
      "Allergic Rhinitis & Sinusitis",
      "Gentle Lifestyle & Skin Wellness"
    ],
    motto: "Gentle Healing • Lasting Wellness with compassionate patient-first care.",
    bio: "Consultant Homeopath with specialized focus on female hormonal balance, pediatric constitutional care, and allergic conditions. Known for her patient, reassuring approach that creates an open, comforting healing environment for families.",
    branches: ["Dwaraka Nagar", "Steel Plant"],
    availability: "Mon – Sat (10:00 AM – 7:30 PM)",
    phone: "08008300155"
  }
];
