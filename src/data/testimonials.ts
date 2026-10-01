export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sajal Sahena",
    location: "Dwaraka Nagar, Visakhapatnam",
    rating: 5,
    date: "Recent patient",
    text: "The place is very good and give us to support everyone and best doctor.",
    verified: true
  },
  {
    id: "test-2",
    name: "Hasmukh Patidar",
    location: "Gajuwaka, Visakhapatnam",
    rating: 5,
    date: "Verified Google Review",
    text: "I highly recommend their services. Dr. Ravi Kumar takes ample time to listen to your history thoroughly.",
    verified: true
  },
  {
    id: "test-3",
    name: "Rishabh Autmaj",
    location: "Steel Plant Township, Vizag",
    rating: 5,
    date: "Verified Google Review",
    text: "Great treatment, caring doctors, and quick results. Extremely clean clinic atmosphere.",
    verified: true
  },
  {
    id: "test-4",
    name: "P. Lakshmi Narayana",
    location: "Visakhapatnam",
    rating: 5,
    date: "Patient family",
    text: "Dr. Ch. Ravi Kumar's constitutional homeopathy gave our family gentle and lasting relief. He is very patient and explains everything clearly.",
    verified: true
  }
];
