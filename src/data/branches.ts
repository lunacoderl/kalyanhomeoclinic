export interface Branch {
  id: string;
  name: string;
  badge: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  mapUrl: string;
  whatsappMessage: string;
}

export const branchesData: Branch[] = [
  {
    id: "dwaraka-nagar",
    name: "Dwaraka Nagar",
    badge: "Main Branch",
    address: "Sankara Matam Rd, near Diamond Park, opp. Venkatarama Hospital, Dondaparthy, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016",
    area: "Dondaparthy, Dwaraka Nagar",
    city: "Visakhapatnam",
    pincode: "530016",
    phone: "08008300155",
    phoneDisplay: "080083 00155",
    hours: "Open: 10:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/96QcLvKVbNFexY7C9",
    whatsappMessage: "Hello Kalyan Homeo Care, I would like to book a consultation at the Dwaraka Nagar (Main Branch) with Dr. Ch. Ravi Kumar."
  },
  {
    id: "old-gajuwaka",
    name: "Old Gajuwaka",
    badge: "Second Branch",
    address: "8-11-25, Between Varun Bajaj Showroom & Latha Hospital, Old Gajuwaka, Gajuwaka, Andhra Pradesh 530026",
    area: "Old Gajuwaka",
    city: "Visakhapatnam",
    pincode: "530026",
    phone: "08008300166",
    phoneDisplay: "080083 00166",
    hours: "Open: 10:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/FTedmnSBAg7GxYjR7",
    whatsappMessage: "Hello Kalyan Homeo Care, I would like to book a consultation at the Old Gajuwaka Branch with Dr. Ch. Ravi Kumar."
  },
  {
    id: "steel-plant",
    name: "Steel Plant",
    badge: "Third Branch",
    address: "Russian Shopping Complex, near Steel Club Township, Sector 1, Steel Plant Twp, Gajuwaka, Andhra Pradesh 530032",
    area: "Sector 1, Steel Plant Township",
    city: "Visakhapatnam",
    pincode: "530032",
    phone: "09959300030",
    phoneDisplay: "099593 00030",
    hours: "Open: 24 Hours",
    mapUrl: "https://maps.app.goo.gl/Jxh2TQqF64wv4Q967",
    whatsappMessage: "Hello Kalyan Homeo Care, I would like to book a consultation at the Steel Plant Branch with Dr. Ch. Ravi Kumar."
  }
];
