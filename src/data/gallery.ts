export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dr. Ravi Kumar Consultation Chamber",
    category: "Doctor Consultation",
    image: "/gallary1.webp",
    alt: "Dr. Ch. Ravi Kumar MD in Kalyan Homeo Care consultation chamber"
  },
  {
    id: "gal-2",
    title: "Clinic Exterior & Branch Entrance",
    category: "Clinic Entrance",
    image: "/gallary2.webp",
    alt: "Kalyan Homeo Care clinic entrance in Visakhapatnam"
  },
  {
    id: "gal-3",
    title: "Homeopathic Medicine Dispensary",
    category: "Dispensary & Pharmacy",
    image: "/gallary3.webp",
    alt: "Dr. Ravi Kumar with homeopathic medicine dispensary shelves"
  },
  {
    id: "gal-4",
    title: "Patient Care & Waiting Lounge",
    category: "Patient Care",
    image: "/gallary4.webp",
    alt: "Dr. Ch. Ravi Kumar at Kalyan Homeo Care clinic"
  }
];
