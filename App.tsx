import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VisualShowcase from './components/VisualShowcase';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { PLAYER_FEATURES, OWNER_FEATURES, PLAYER_TESTIMONIALS, OWNER_TESTIMONIALS, ASSETS } from './constants';

function App() {
  const [isOwnerView, setIsOwnerView] = useState(false);

  const toggleView = () => {
    setIsOwnerView(!isOwnerView);
  };

  const switchToOwnerView = () => {
    setIsOwnerView(true);
  };

  // View Data Configuration
  const viewData = isOwnerView ? {
    hero: {
      badgeText: "For Venue Partners",
      titleLine1: "MAXIMIZE YOUR",
      titleLine2: "PITCH POTENTIAL",
      subtitle: "The all-in-one platform to manage bookings, track revenue, and grow your sports facility business.",
      appScreenshot: ASSETS.OWNER_APP_SCREENSHOT
    },
    features: {
      list: OWNER_FEATURES,
      titleNormal: "POWERFUL TOOLS FOR",
      titleHighlight: "OWNERS",
      description: "Take control of your venue with our suite of management and analytics tools designed for growth."
    },
    showcase: {
      titleLine1: "MANAGE YOUR",
      titleLine2: "BUSINESS",
      titleHighlight: "EFFORTLESSLY",
      description: "Ditch the paper logs. Accept bookings 24/7, process payments securely, and get insights into your peak hours.",
      listItems: ['Automated Booking System', 'Secure Wallet & Payouts', 'Business Performance Analytics', 'Verified Partner Badge']
    },
    reviews: {
      list: OWNER_TESTIMONIALS,
      titleNormal: "PARTNERS TRUST",
      titleHighlight: "PITCHLINK"
    }
  } : {
    hero: {
      badgeText: "For Players",
      titleLine1: "ELEVATE",
      titleLine2: "YOUR GAME.",
      subtitle: "Book. Compete. Conquer. The ultimate platform connecting ballers to the best pitches in the city.",
      appScreenshot: ASSETS.APP_SCREENSHOT
    },
    features: {
      list: PLAYER_FEATURES,
      titleNormal: "BUILT FOR",
      titleHighlight: "BALLERS",
      description: "Everything you need to organize the perfect match, from booking the turf to tracking the score."
    },
    showcase: {
      titleLine1: "FIND YOUR",
      titleLine2: "PERFECT",
      titleHighlight: "PITCH",
      description: "Stop calling venues one by one. With PitchLink, view high-quality photos, check amenities, and secure your slot instantly.",
      listItems: ['Real-time Availability', 'Transparent Pricing', 'Instant Confirmation', 'Venue Reviews']
    },
    reviews: {
      list: PLAYER_TESTIMONIALS,
      titleNormal: "PLAYERS LOVE",
      titleHighlight: "PITCHLINK"
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand selection:text-black">
      <Navbar isOwnerView={isOwnerView} onToggleView={toggleView} />
      
      {/* Coming Soon Banner - Simple and clean */}
      <div className="bg-brand-black/80 border-b border-brand/30 backdrop-blur-sm py-2 px-4 text-center">
        <span className="text-brand text-sm font-medium">
          COMING SOON
        </span>
      </div>
      
      <main>
        <Hero 
          badgeText={viewData.hero.badgeText}
          titleLine1={viewData.hero.titleLine1}
          titleLine2={viewData.hero.titleLine2}
          subtitle={viewData.hero.subtitle}
          appScreenshot={viewData.hero.appScreenshot}
        />
        <Features 
          features={viewData.features.list}
          titleNormal={viewData.features.titleNormal}
          titleHighlight={viewData.features.titleHighlight}
          description={viewData.features.description}
        />
        <VisualShowcase 
          titleLine1={viewData.showcase.titleLine1}
          titleLine2={viewData.showcase.titleLine2}
          titleHighlight={viewData.showcase.titleHighlight}
          description={viewData.showcase.description}
          listItems={viewData.showcase.listItems}
        />
        <Reviews 
          testimonials={viewData.reviews.list}
          titleNormal={viewData.reviews.titleNormal}
          titleHighlight={viewData.reviews.titleHighlight}
        />
      </main>
      <Footer onOwnerClick={switchToOwnerView} />
    </div>
  );
}

export default App;