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
    degree: "M.D.",
    qualification: "M.D. (Homeopathy)",
    role: "Senior Consultant Homeopathic Physician",
    image: "/dr-sudhakar.jpg",
    experience: "14+ Years Experience",
    specialization: [
      "Constitutional Materia Medica",
      "Perception of Patient's Mind & Temperament",
      "Chronic Metabolic & Digestive Pathologies",
      "Chronic Joint & Spine Disorders"
    ],
    motto: "Whenever the quite correctly and fittingly chosen remedy is applied and operates within the spheres, the overthrow of the disease is naturally to be expected.",
    bio: "Dr. Sudhakar M.D. is a passionate homeopath. He is a genius who unfolded the pictures of many homeopathic remedies in a new light. His ability to perceive the patient's mind is exceptional. His experience teaches that whenever the quite correctly and fittingly chosen remedy is applied and operates within the spheres, the overthrow of the disease is naturally to be expected.",
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
    experience: "10+ Years Experience",
    specialization: [
      "Women's Hormonal Health (PCOD/PCOS & Thyroid)",
      "Pediatric Constitutional Care & Child Immunity",
      "Perception of Mind & Emotional Well-Being",
      "Allergic Rhinitis, Sinusitis & Skin Wellness"
    ],
    motto: "When the fittingly and correctly chosen remedy is applied with deep constitutional perception, the overthrow of disease and lasting vitality naturally follow.",
    bio: "Dr. Shweta, BHMS is a passionate and compassionate homeopath. She is an insightful physician who unfolds the constitutional pictures of homeopathic remedies in a luminous, empathetic light. Her ability to perceive the patient's mind, emotional depth, and subtle hormonal disharmonies is exceptional. Her experience teaches that whenever the accurately chosen remedy operates within its true spheres, the gentle overthrow of the disease is naturally to be expected.",
    branches: ["Dwaraka Nagar", "Steel Plant"],
    availability: "Mon – Sat (10:00 AM – 7:30 PM)",
    phone: "08008300155"
  }
];
