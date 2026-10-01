export interface YouTubeVideoItem {
  id: string;
  title: string;
  originalTitle: string;
  views: string;
  duration: string;
  category: string;
  summary: string;
  watchUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
  isPopular?: boolean;
}

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@kalyanHomoeoCare";
export const YOUTUBE_CHANNEL_HANDLE = "@kalyanHomoeoCare";

export const youtubeVideosData: YouTubeVideoItem[] = [
  {
    id: "Zu29yxWjlMs",
    title: "Psoriasis Clinical Recovery Case",
    originalTitle: "psoriasis treated by dr ravi kumar",
    views: "1.3K+ views",
    duration: "2:50",
    category: "Skin & Dermatology",
    summary: "Dr. Ch. Ravi Kumar explains the long-term resolution of stubborn psoriasis plaques using individualized constitutional homeopathy.",
    watchUrl: "https://www.youtube.com/watch?v=Zu29yxWjlMs",
    embedUrl: "https://www.youtube.com/embed/Zu29yxWjlMs?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/Zu29yxWjlMs/hqdefault.jpg",
    isPopular: true
  },
  {
    id: "J1ieXAVNdVM",
    title: "Alopecia Areata (Hair Loss) Recovery",
    originalTitle: "Alopecia Treated by Dr. Ravi Kumar MD ( medicine)",
    views: "310+ views",
    duration: "1:33",
    category: "Hair & Scalp",
    summary: "Detailed patient outcome and regrowth timeline for patchy alopecia areata treated without topical steroids or side effects.",
    watchUrl: "https://www.youtube.com/watch?v=J1ieXAVNdVM",
    embedUrl: "https://www.youtube.com/embed/J1ieXAVNdVM?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/J1ieXAVNdVM/hqdefault.jpg",
    isPopular: true
  },
  {
    id: "dbGJ_H7tMcM",
    title: "Fistula Healing Without Surgery",
    originalTitle: "fistula treated by DR Ravi kumar md in kalyan homeo care",
    views: "186+ views",
    duration: "2:34",
    category: "Anorectal & Gastro",
    summary: "Clinical case study on resolving chronic anal fistula tracts and pus discharge through non-surgical homeopathic therapy.",
    watchUrl: "https://www.youtube.com/watch?v=dbGJ_H7tMcM",
    embedUrl: "https://www.youtube.com/embed/dbGJ_H7tMcM?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/dbGJ_H7tMcM/hqdefault.jpg",
    isPopular: true
  },
  {
    id: "9dQ5k-XU9v4",
    title: "Ankylosing Spondylitis Chronic Joint Care",
    originalTitle: "Ankylosis spondylitis treated by DR Ravi kumar MD",
    views: "167+ views",
    duration: "4:38",
    category: "Joints & Spine",
    summary: "Management of spinal stiffness, HLA-B27 inflammation, and progressive postural rigidity using constitutional remedies.",
    watchUrl: "https://www.youtube.com/watch?v=9dQ5k-XU9v4",
    embedUrl: "https://www.youtube.com/embed/9dQ5k-XU9v4?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/9dQ5k-XU9v4/hqdefault.jpg",
    isPopular: true
  },
  {
    id: "aACtQPgLZxU",
    title: "Sciatica Nerve Compression Relief",
    originalTitle: "sciatica treated by Dr Ravi kumar",
    views: "166+ views",
    duration: "3:30",
    category: "Nerve & Spine",
    summary: "Relieving radiating lower back and leg shooting pains caused by disc bulging and sciatic nerve root inflammation.",
    watchUrl: "https://www.youtube.com/watch?v=aACtQPgLZxU",
    embedUrl: "https://www.youtube.com/embed/aACtQPgLZxU?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/aACtQPgLZxU/hqdefault.jpg"
  },
  {
    id: "6GWkDeAPvaY",
    title: "Abdominal Abscess Healing Case",
    originalTitle: "abdomen abscess treated by DR ravikumar",
    views: "159+ views",
    duration: "1:47",
    category: "Internal & Surgery-Free",
    summary: "Resolving internal inflammatory tissue mass and abdominal suppuration safely through guided cellular drainage.",
    watchUrl: "https://www.youtube.com/watch?v=6GWkDeAPvaY",
    embedUrl: "https://www.youtube.com/embed/6GWkDeAPvaY?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/6GWkDeAPvaY/hqdefault.jpg"
  },
  {
    id: "L5fntQS91NI",
    title: "Hemorrhoids & Piles Pain Management",
    originalTitle: "piles treated by dr ravi kumar",
    views: "158+ views",
    duration: "2:26",
    category: "Anorectal & Gastro",
    summary: "Stopping rectal bleeding, swelling, and burning pain without painful surgical excision or hospital downtime.",
    watchUrl: "https://www.youtube.com/watch?v=L5fntQS91NI",
    embedUrl: "https://www.youtube.com/embed/L5fntQS91NI?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/L5fntQS91NI/hqdefault.jpg"
  },
  {
    id: "bJTvCBEBVLA",
    title: "Kidney Stone Expulsion & Dissolution",
    originalTitle: "kidney stone treated by dr ravi kumar",
    views: "135+ views",
    duration: "2:54",
    category: "Renal & Urinary",
    summary: "Treating renal calculi (kidney stones), severe flank pain, and preventing recurrent crystalline formations naturally.",
    watchUrl: "https://www.youtube.com/watch?v=bJTvCBEBVLA",
    embedUrl: "https://www.youtube.com/embed/bJTvCBEBVLA?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/bJTvCBEBVLA/hqdefault.jpg"
  },
  {
    id: "lGghJB22w5c",
    title: "Chronic Lung & Respiratory Care",
    originalTitle: "lung cancer treated by Dr ravi kumar",
    views: "128+ views",
    duration: "3:44",
    category: "Respiratory & Chronic",
    summary: "Supportive homeopathic care to ease dyspnea, strengthen immune defense, and improve quality of life in severe respiratory conditions.",
    watchUrl: "https://www.youtube.com/watch?v=lGghJB22w5c",
    embedUrl: "https://www.youtube.com/embed/lGghJB22w5c?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/lGghJB22w5c/hqdefault.jpg"
  },
  {
    id: "668kRjNqrlc",
    title: "Rheumatoid Arthritis Inflammatory Relief",
    originalTitle: "Rheumatic arthritis treated by DR ravi kumar",
    views: "126+ views",
    duration: "4:18",
    category: "Joints & Spine",
    summary: "Tackling joint deformities, morning finger stiffness, and elevated inflammatory markers through root-cause treatment.",
    watchUrl: "https://www.youtube.com/watch?v=668kRjNqrlc",
    embedUrl: "https://www.youtube.com/embed/668kRjNqrlc?autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0",
    thumbnailUrl: "https://i.ytimg.com/vi/668kRjNqrlc/hqdefault.jpg"
  }
];
