
import { MapPin, Calendar, Smartphone, ShieldCheck, Headphones, BadgeCheck, BarChart3, Users, Wallet } from 'lucide-react';
import { FeatureItem, Testimonial } from './types';

// PLEASE ENSURE THESE FILES EXIST IN YOUR PUBLIC FOLDER
export const ASSETS = {
  // 1. Logo - Updated to the provided URL
  LOGO: "https://i.postimg.cc/9fBXRkS5/E82A553F-F39D-47C2-83D9-353369F353E0.png", 
  
  // 2. Hero Background (Futuristic/Neon vibe)
  HERO_BG: "/hero-bg.jpg", 
  
  // 3. App Screenshot (Home Screen view) - Used in the Phone Mockup
  APP_SCREENSHOT: "https://i.postimg.cc/26mQQN57/IMG-6996.jpg", 
  
  // 4. Owner App Screenshot
  OWNER_APP_SCREENSHOT: "https://i.postimg.cc/QtX8gfZC/IMG-7632.jpg",

  // 5. Advertising Image (Player kicking ball / Cinematic shot) - Used in Visual Showcase
  AD_IMG: "https://i.postimg.cc/QtPgtPCr/IMG-6561.jpg"
};

// --- PLAYER DATA ---

export const PLAYER_FEATURES: FeatureItem[] = [
  {
    title: "Instant Booking",
    description: "Find and book available pitches near you in seconds. Real-time availability updates.",
    icon: Calendar
  },
  {
    title: "Nearby Pitches",
    description: "Geolocation-powered search to find the best 5-a-side and 11-a-side turfs in your area.",
    icon: MapPin
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you with any questions.",
    icon: Headphones
  },
  {
    title: "Verified Venues",
    description: "All pitches are verified and rated by our community for quality assurance.",
    icon: BadgeCheck
  },
  {
    title: "Secure Payments",
    description: "Fast and secure in-app payments so you can focus on the game.",
    icon: ShieldCheck
  },
  {
    title: "Live News & Scores",
    description: "Stay updated with the latest football news and live scores directly in the app.",
    icon: Smartphone
  }
];

export const PLAYER_TESTIMONIALS: Testimonial[] = [
  {
    name: "Emmanuel K.",
    role: "Team Captain",
    content: "PitchLink changed how we organize our Sunday league games. Booking a turf has never been this smooth. No more endless phone calls!",
    avatar: "EK"
  },
  {
    name: "Chinedu O.",
    role: "Casual Player",
    content: "The geolocation feature is a lifesaver. I found a hidden gem of a pitch just 5 minutes from my office. Highly recommended for any baller.",
    avatar: "CO"
  },
  {
    name: "Sarah T.",
    role: "League Manager",
    content: "Managing payments was always a headache until we started using PitchLink. Now everyone pays their share in the app before we even get to the pitch.",
    avatar: "ST"
  },
  {
    name: "David A.",
    role: "Midfielder",
    content: "The live news integration keeps me updated on Premier League scores while I'm warming up. It's the ultimate app for football lovers.",
    avatar: "DA"
  }
];

// --- OWNER DATA ---

export const OWNER_FEATURES: FeatureItem[] = [
  {
    title: "Manage Bookings",
    description: "Accept and manage bookings in real-time. Avoid double-booking and maximize utilization.",
    icon: Calendar
  },
  {
    title: "Revenue Analytics",
    description: "Track your earnings, peak hours, and customer trends with our advanced dashboard.",
    icon: BarChart3
  },
  {
    title: "Secure Payouts",
    description: "Get paid directly to your bank account with our automated and secure payment system.",
    icon: Wallet
  },
  {
    title: "Business Profile",
    description: "Showcase your turf with high-quality photos, amenities list, and location details.",
    icon: MapPin
  },
  {
    title: "Customer Support",
    description: "Access our dedicated partner support team 24/7 for any operational issues.",
    icon: Headphones
  },
  {
    title: "Community Reach",
    description: "Get discovered by thousands of active players in your area instantly.",
    icon: Users
  }
];

export const OWNER_TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Musa",
    role: "Arena Owner",
    content: "Since listing on PitchLink, our weekday slot bookings have increased by 40%. The dashboard is incredibly easy to use.",
    avatar: "AM"
  },
  {
    name: "Tunde B.",
    role: "Facility Manager",
    content: "No more phone tag. Players book, we get a notification, and the money is in the bank. It's that simple.",
    avatar: "TB"
  },
  {
    name: "Grace L.",
    role: "Sports Complex Owner",
    content: "The analytics helped us realize we needed to open earlier on weekends. Revenue has never been better.",
    avatar: "GL"
  },
  {
    name: "Seyi O.",
    role: "Turf Manager",
    content: "PitchLink verified our venue and the trust from players skyrocketed. Best business decision we made this year.",
    avatar: "SO"
  }
];
