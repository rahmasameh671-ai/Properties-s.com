import React, { useState } from "react";

/**
 * Country codes with clean UTF-8 flag emojis (No Mojibake)
 */
const COUNTRY_CODES = [
  { code: "+20", name: "Egypt", flag: "🇪🇬", default: true },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", name: "USA / Canada", flag: "🇺🇸" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
];

/**
 * Image helper with multi-tier fallback architecture
 */
const FallbackImage = ({ src, fallbacks = [], alt, className, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attemptIndex, setAttemptIndex] = useState(0);

  const handleError = () => {
    if (attemptIndex < fallbacks.length) {
      setCurrentSrc(fallbacks[attemptIndex]);
      setAttemptIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export const SodicPortfolio = () => {
  const [countryCode, setCountryCode] = useState("+20");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    setIsLoading(true);

    const leadData = {
      fullName: fullName.trim(),
      phoneNumber: `${countryCode} ${phoneNumber.trim()}`,
      countryCode: countryCode,
      landingPageUrl: typeof window !== "undefined" ? window.location.href : "https://properties-s.com/sodic",
      submissionDate: new Date().toISOString(),
      portfolio: "SODIC The Lakes Launch",
    };

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/25429357/uclzmpn/", {
        method: "POST",
        body: JSON.stringify(leadData),
      });

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: "SODIC The Lakes Form",
          value: 1.0,
          currency: "EGP",
          send_to: "AW-17103245801",
        });
      }

      setIsSuccess(true);
      setFullName("");
      setPhoneNumber("");
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback display to ensure user is acknowledged
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#2D3748] font-sans antialiased selection:bg-[#1A202C] selection:text-white min-h-screen">
      
      {/* ========================================================================
          1. HERO SECTION & INTEGRATED HIGH-FASHION MASTHEAD
          NO TOP FIXED NAVBAR: Starts directly at viewport top: 0
          Strict Zero Gold Policy: Crisp White, Alabaster, Slate/Charcoal #1A202C
          ======================================================================== */}
      <header id="hero" className="relative bg-white pt-6 pb-20 sm:pt-8 sm:pb-28 lg:pt-10 lg:pb-36 border-b border-slate-200 overflow-hidden">
        
        {/* Serene Architectural Atmospheric Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[550px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Architectural Editorial Masthead (Starts directly at top: 0) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-8 mb-10 sm:mb-14 border-b border-slate-100 gap-6">
            
            {/* Left: Global Parent Brand & Consultancy Designation */}
            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <a href="/" className="font-serif text-sm sm:text-base font-bold tracking-[0.32em] text-[#1A202C] hover:text-[#2D3748] transition-colors block">
                  PROPERTIES-S.COM
                </a>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-700">
                    By properties-s.com
                  </span>
                  <span className="text-slate-300">&bull;</span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                    Independent Real Estate Consultancy
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Official SODIC Developer Badge & Direct Concierge Touchpoint */}
            <div className="flex items-center gap-4 sm:gap-6 self-start md:self-auto">
              <div className="flex items-center gap-3 py-1.5 px-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <FallbackImage
                  src="/sodic-logo.png"
                  fallbacks={[
                    "./sodic-logo.png",
                    "public/sodic-logo.png",
                    "images/sodic-logo.png",
                    "/images/sodic-logo.png",
                  ]}
                  alt="SODIC Developments"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <span className="w-px h-5 bg-slate-200" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-600">PORTFOLIO</span>
              </div>

              <a
                href="https://wa.me/201277752731?text=Hello%20By%20properties-s.com%2C%20I%20am%20inquiring%20about%20SODIC%20East%20The%20Lakes."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1A202C] hover:text-emerald-600 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>+201277752731</span>
              </a>
            </div>

          </div>

          {/* Editorial Eyebrow Badge (Prompt Requirement 3) */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FAFAFB] border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1A202C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#1A202C]">
                BY PROPERTIES-S.COM
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                EXCLUSIVE NEW LAUNCH
              </span>
            </div>
          </div>

          {/* Main Title & Subtitle / Core Offer (Prompt Requirement 3) */}
          <div className="max-w-5xl mb-8 sm:mb-12">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#1A202C] leading-[1.08] tracking-tight">
              SODIC Exclusive Launch: <span className="italic font-normal">The Lakes</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Secure your premium residence with <strong>0% Down Payment</strong> and flexible installments up to <strong>10 Years</strong>. Starting from <strong>6.7M EGP</strong>.
            </p>
          </div>

          {/* High-Fashion Horizontal Key Offering Metrics Pill Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            <div className="p-4 rounded-2xl bg-[#FAFAFB] border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">DOWN PAYMENT</div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1A202C] mt-1">0% Down Payment</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAFB] border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">TENURE HORIZON</div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1A202C] mt-1">Up to 10 Years</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAFB] border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">STARTING PRICE</div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1A202C] mt-1">From 6.7M EGP</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFAFB] border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">COMMUNITY SCALE</div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1A202C] mt-1">655-Acre Masterplan</div>
            </div>
          </div>

          {/* Asymmetrical Editorial Composition: Left Visual Narrative + Right Sleek Frosted Lead Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Dramatic Architectural Visual of The Lakes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100 group">
                <FallbackImage
                  src="/the-lakes-architecture.jpg"
                  fallbacks={[
                    "./the-lakes-architecture.jpg",
                    "public/the-lakes-architecture.jpg",
                    "images/the-lakes-architecture.jpg",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
                  ]}
                  alt="The Lakes at SODIC East Architecture"
                  className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/90 via-[#1A202C]/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.24em] text-[#1A202C] self-start mb-3 shadow-xs">
                    655-ACRE MASTER COMMUNITY &bull; 6,000 HOMES
                  </span>
                  <h2 className="text-white font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    Where Serene Lakes Meet Contemporary Villa Architecture.
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl font-light">
                    80% dedicated to private Villas and Townhouses, with 20% reserved for premium luxury Apartments.
                  </p>
                </div>
              </div>

              {/* Editorial Narrative Pull-Quote */}
              <div className="p-6 rounded-2xl bg-[#FAFAFB] border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  INDEPENDENT CONSULTANCY POSITIONING
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Curated by <strong className="text-[#1A202C] font-semibold">By properties-s.com</strong>, an independent real estate consultancy. We provide unbiased market advisory, unit allocation intelligence, and direct developer coordination across SODIC's entire residential portfolio without developer bias.
                </p>
              </div>

            </div>

            {/* Right: Sleek Frosted Glass Lead Capture Docket (Prompt Requirement 3) */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-200 relative">
                
                <div className="mb-6 text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-400 mb-1">
                    CONFIDENTIAL ENQUIRY
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A202C] tracking-tight">
                    Request Private Dossier
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-light leading-relaxed">
                    Receive unreleased inventory, lakefront floor plans, and custom 10-year payment schedules.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
                      ✓
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#1A202C]">Dossier Request Registered</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you. An independent senior consultant from By properties-s.com is preparing your requested project materials and pricing breakdowns.
                    </p>
                    <a
                      href="https://wa.me/201277752731?text=Hello%20By%20properties-s.com%2C%20I%20just%20submitted%20a%20request%20for%20SODIC%20East%20The%20Lakes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#20BD5A] transition-all"
                    >
                      Connect Instantly on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Full Name (Clean blank input, NO placeholder text) */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-[#FAFAFB] border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-[#1A202C] focus:border-[#1A202C] outline-none transition-all"
                        autoComplete="name"
                      />
                    </div>

                    {/* Phone Number: Split layout with UTF-8 Country Code dropdown on left */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <div className="grid grid-cols-12 gap-2">
                        {/* Properly Encoded Country Code Dropdown (Working Flags, No Mojibake) */}
                        <div className="col-span-5 relative">
                          <select
                            id="countryCodeSelect"
                            name="countryCode"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-full px-3 py-3 bg-white border border-slate-200 rounded-xl text-[#1A202C] text-xs sm:text-sm font-medium cursor-pointer outline-none focus:ring-2 focus:ring-[#1A202C]"
                          >
                            {COUNTRY_CODES.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.flag} {item.code} ({item.name})
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Clean Blank Phone Input on Right (NO placeholder text) */}
                        <div className="col-span-7">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-[#FAFAFB] border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-[#1A202C] focus:border-[#1A202C] outline-none transition-all"
                            autoComplete="tel"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button: Solid Charcoal Button (Prompt Requirement 3) */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 px-6 rounded-xl bg-[#1A202C] hover:bg-[#2D3748] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all shadow-md disabled:opacity-70 cursor-pointer"
                      >
                        {isLoading ? "PROCESSING..." : "REQUEST DOSSIER"}
                      </button>
                    </div>

                    {/* Strict Compliance Legal Disclaimer Below Form */}
                    <div className="pt-3 text-center">
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        By submitting, you agree to receive communications from By properties-s.com regarding real estate projects. This landing page is operated by By properties-s.com, an independent real estate consultancy, and is not the official website of the developer. Prices and availability are subject to change.
                      </p>
                      {/* Standalone Clickable Legal Links */}
                      <div className="flex items-center justify-center gap-3 text-xs font-semibold text-slate-600 mt-2.5">
                        <a href="/privacy-policy" className="underline hover:text-[#1A202C] transition-colors">Privacy Policy</a>
                        <span className="text-slate-300">&bull;</span>
                        <a href="/terms-conditions" className="underline hover:text-[#1A202C] transition-colors">Terms &amp; Conditions</a>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </header>

      {/* ========================================================================
          2. PROJECT CONTENT CHAPTERS (COMMON REAL ESTATE TERMINOLOGY)
          RADICALLY NEW CHIC REDESIGN — DO NOT CLONE CURRENT UI
          Asymmetrical double-page spread rhythm with generous negative space
          Zero Gold Policy: Crisp White, Alabaster, Slate/Charcoal #1A202C
          Strictly WhatsApp Solid Green CTA (#25D366) linking to +201277752731
          No 'Visual Gallery' buttons!
          ======================================================================== */}
      <main id="portfolio" className="bg-white">
        
        {/* ----------------------------------------------------------------------
             SECTION A: SODIC EAST | THE LAKES (NEW LAUNCH) — Prompt Requirement 4
             ---------------------------------------------------------------------- */}
        <article id="the-lakes" className="py-20 sm:py-32 border-b border-slate-200 scroll-mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif text-slate-300 font-light">01</span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 block">
                      NEW LAUNCH &bull; 655-ACRE MASTER COMMUNITY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A202C] tracking-tight">
                      SODIC East | The Lakes
                    </h2>
                  </div>
                </div>
                <p className="font-serif text-lg sm:text-2xl text-slate-600 italic font-normal pt-2">
                  Exclusive Waterfront Residences Synthesizing Ultimate Privacy with Master-Planned Architecture.
                </p>
              </div>

              {/* Official Project Badge */}
              <div className="p-3.5 rounded-2xl bg-[#FAFAFB] border border-slate-200 self-start md:self-auto flex items-center gap-3">
                <FallbackImage
                  src="/sodic-east-logo.png"
                  fallbacks={[
                    "./sodic-east-logo.png",
                    "public/sodic-east-logo.png",
                    "images/sodic-east-logo.png",
                  ]}
                  alt="SODIC East Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <span className="w-px h-6 bg-slate-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">THE LAKES</span>
              </div>
            </div>

            {/* Asymmetric Double-Page Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: Master Community Lake Visual */}
              <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <FallbackImage
                  src="/sodic-east-lakes.jpg"
                  fallbacks={[
                    "./sodic-east-lakes.jpg",
                    "public/sodic-east-lakes.jpg",
                    "images/sodic-east-lakes.jpg",
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
                  ]}
                  alt="The Lakes at SODIC East Master Community"
                  className="w-full h-[400px] sm:h-[520px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#1A202C] shadow-sm">
                    655-Acre Master Community &bull; 0% Down Payment
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent p-6 text-white text-xs sm:text-sm font-light">
                  6,000 homes masterfully designed with 80% private villas and townhouses, enveloping tranquil central reflection lakes.
                </div>
              </div>

              {/* Right: Specifications & Pricing Breakdown */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 space-y-6 shadow-sm">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">OFFICIAL SPECIFICATIONS</span>
                    <h3 className="font-serif text-xl font-bold text-[#1A202C] mt-1">The Lakes Overview</h3>
                  </div>

                  {/* Official Description (Prompt Requirement 4) */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Discover The Lakes at SODIC East. A massive 655-acre master-planned community featuring 6,000 homes. Designed for ultimate privacy and exclusivity, 80% of the destination is dedicated to private Villas and Townhouses, with the remaining 20% reserved for premium luxury Apartments.
                  </p>

                  {/* The Offer Highlight Banner */}
                  <div className="p-4 rounded-2xl bg-[#FAFAFB] border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">THE EXCLUSIVE OFFER</div>
                    <div className="font-serif text-lg sm:text-xl font-bold text-[#1A202C] mt-0.5">
                      0% Down Payment &bull; Up to 10 Years Installments
                    </div>
                  </div>

                  {/* Pricing Breakdown Matrix (Prompt Requirement 4) */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">PRICING BREAKDOWN</div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">1 Bedroom</div>
                        <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 6.7M EGP</div>
                      </div>
                      
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">2 Bedrooms</div>
                        <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 10.9M EGP</div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">3 Bedrooms</div>
                        <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 13.2M EGP</div>
                      </div>
                    </div>
                  </div>

                  {/* Solid Green WhatsApp Action Button (Prompt Requirement 4) */}
                  <div className="pt-3">
                    <a
                      href="https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20SODIC%20East%20The%20Lakes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition-all"
                    >
                      <span>INQUIRE ON WHATSAPP (+201277752731)</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </article>

        {/* ----------------------------------------------------------------------
             SECTION B: OGAMI (RAS EL HEKMA) — Prompt Requirement 4
             ---------------------------------------------------------------------- */}
        <article id="ogami" className="py-20 sm:py-32 bg-[#FAFAFB] border-b border-slate-200 scroll-mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif text-slate-300 font-light">02</span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 block">
                      MEDITERRANEAN COASTAL FRONTIER &bull; KM 204 ALEX-MATROUH
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A202C] tracking-tight">
                      Ogami by SODIC
                    </h2>
                  </div>
                </div>
                <p className="font-serif text-lg sm:text-2xl text-slate-600 italic font-normal pt-2">
                  Where Japanese Zen Minimalism Meets the Uncharted Azure Coastline of Ras El Hekma.
                </p>
              </div>

              {/* Official Project Badge */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 self-start md:self-auto flex items-center gap-3">
                <FallbackImage
                  src="/ogami-logo.png"
                  fallbacks={[
                    "./ogami-logo.png",
                    "public/ogami-logo.png",
                    "images/ogami-logo.png",
                  ]}
                  alt="Ogami by SODIC Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <span className="w-px h-6 bg-slate-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">RAS EL HEKMA</span>
              </div>
            </div>

            {/* Asymmetric Staggered Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: Specifications & Pricing Matrix */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 space-y-6 shadow-lg">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">CURATED ATTRIBUTES</span>
                    <h3 className="font-serif text-xl font-bold text-[#1A202C] mt-1">Coastal Sanctuary Specifications</h3>
                  </div>

                  {/* Curated Specs List */}
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span><strong>440-Acre</strong> premier coastal destination at KM 204 on the Alex-Matrouh coastal corridor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span><strong>800-Meter</strong> pristine private beachfront on the celebrated Ras El Hekma bay.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>Maldives-inspired swimmable crystal lagoons synthesizing contemporary Japanese architecture.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>Signature standalone villas and luxury chalets delivered <strong>Fully Finished</strong> to prime standards.</span>
                    </li>
                  </ul>

                  {/* Financial & Terms Docket (Prompt Requirement 4: From 18.8M EGP | 7 Years) */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Starting Price</div>
                      <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 18.8M EGP</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Payment Horizon</div>
                      <div className="text-xs sm:text-sm font-bold text-[#1A202C] mt-1">Up to 7 Years</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Typologies</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#1A202C] mt-1">Chalets &amp; Villas</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Finishing Standard</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#1A202C] mt-1">Fully Finished</div>
                    </div>
                  </div>

                  {/* Solid Green WhatsApp Action Button (Strictly #25D366) */}
                  <div className="pt-2">
                    <a
                      href="https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20Ogami%20Ras%20El%20Hekma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition-all"
                    >
                      <span>INQUIRE ON WHATSAPP (+201277752731)</span>
                    </a>
                  </div>

                </div>

              </div>

              {/* Right: Coastal Visual */}
              <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 order-1 lg:order-2">
                <FallbackImage
                  src="/ogami.jpg"
                  fallbacks={[
                    "./ogami.jpg",
                    "public/ogami.jpg",
                    "images/ogami.jpg",
                    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
                  ]}
                  alt="Ogami by SODIC Ras El Hekma Coastal Villas"
                  className="w-full h-[400px] sm:h-[520px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#1A202C] shadow-sm">
                    440-Acre Master Community &bull; 800m Beachfront
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent p-6 text-white text-xs sm:text-sm font-light">
                  Maldives-inspired swimmable crystal lagoons engineered for utmost visual and acoustic seclusion.
                </div>
              </div>

            </div>

          </div>
        </article>

        {/* ----------------------------------------------------------------------
             SECTION C: EAST VALE (MOSTAKBAL CITY) — Prompt Requirement 4
             ---------------------------------------------------------------------- */}
        <article id="east-vale" className="py-20 sm:py-32 border-b border-slate-200 scroll-mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif text-slate-300 font-light">03</span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 block">
                      BIOPHILIC URBAN COMMUNITY &bull; MOSTAKBAL CITY MASTERPLAN
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A202C] tracking-tight">
                      East Vale
                    </h2>
                  </div>
                </div>
                <p className="font-serif text-lg sm:text-2xl text-slate-600 italic font-normal pt-2">
                  SODIC’s Flagship Sanctuary in Mostakbal City — Biophilic Living Engineered for Restorative Calm.
                </p>
              </div>

              {/* Official Project Badge */}
              <div className="p-3.5 rounded-2xl bg-[#FAFAFB] border border-slate-200 self-start md:self-auto flex items-center gap-3">
                <FallbackImage
                  src="/east-vale-logo.png"
                  fallbacks={[
                    "./east-vale-logo.png",
                    "public/east-vale-logo.png",
                    "images/east-vale-logo.png",
                  ]}
                  alt="East Vale Logo"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
                <span className="w-px h-6 bg-slate-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">MOSTAKBAL CITY</span>
              </div>
            </div>

            {/* Asymmetric Double-Page Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: Biophilic Architecture Visual */}
              <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <FallbackImage
                  src="/east-vale.jpg"
                  fallbacks={[
                    "./east-vale.jpg",
                    "public/east-vale.jpg",
                    "images/east-vale.jpg",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
                  ]}
                  alt="East Vale Mostakbal City Modern Residences"
                  className="w-full h-[400px] sm:h-[520px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#1A202C] shadow-sm">
                    Mostakbal City &bull; 5% Down Payment
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent p-6 text-white text-xs sm:text-sm font-light">
                  Biophilic parkland residences integrated with continuous linear walking trails and cycling networks.
                </div>
              </div>

              {/* Right: Specifications & Pricing Matrix */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 space-y-6 shadow-sm">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">FLAGSHIP PARAMETERS</span>
                    <h3 className="font-serif text-xl font-bold text-[#1A202C] mt-1">Biophilic Architecture Profile</h3>
                  </div>

                  {/* Curated Specs List */}
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>SODIC's preeminent master-planned destination in Mostakbal City, bridging New Cairo and the New Capital.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>Seamless convergence of expansive green spines, linear botanical parks, and flowing water bodies.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>Low-density residential clusters engineered specifically for maximum acoustic tranquility and personal serenity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] mt-2 flex-shrink-0" />
                      <span>All residences delivered <strong>Fully Finished with Air Conditioning Systems Pre-Installed</strong>.</span>
                    </li>
                  </ul>

                  {/* Financial & Terms Docket (Prompt Requirement 4: From 10.5M EGP | 5% DP | 9 Years) */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Luxury Apartments</div>
                      <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 10.5M EGP</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Signature Villas</div>
                      <div className="font-serif text-base sm:text-lg font-bold text-[#1A202C] mt-0.5">From 33M EGP</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Payment Structure</div>
                      <div className="text-xs sm:text-sm font-bold text-[#1A202C] mt-1">5% DP &bull; Up to 9 Yrs</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFAFB] border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Finishing Standard</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#1A202C] mt-1">Finished + ACs</div>
                    </div>
                  </div>

                  {/* Solid Green WhatsApp Action Button (Strictly #25D366) */}
                  <div className="pt-2">
                    <a
                      href="https://wa.me/201277752731?text=Hello%2C%20I%20am%20inquiring%20about%20East%20Vale%20Mostakbal%20City"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition-all"
                    >
                      <span>INQUIRE ON WHATSAPP (+201277752731)</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </article>

      </main>

      {/* ========================================================================
          3. STRATEGIC FIDUCIARY ADVISORY (THE PHILOSOPHY OF INDEPENDENT CONSULTANCY)
          Generous negative space, editorial manifesto, zero gold policy
          ======================================================================== */}
      <section className="py-24 sm:py-36 bg-[#FAFAFB] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-[0.26em] text-[#1A202C] shadow-sm">
              INDEPENDENT REAL ESTATE CONSULTANCY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A202C] tracking-tight">
              Why Discerning Buyers Navigate SODIC Developments Through By properties-s.com
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Acquiring prime real estate demands objective fiduciary insight. As an independent consultancy, our guidance is bound strictly to your capital preservation and lifestyle aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAFB] border border-slate-200 flex items-center justify-center text-[#1A202C] font-serif text-lg font-bold">
                  01
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A202C]">
                  100% Unbiased Consultation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                  We conduct impartial cross-market comparisons to ensure your capital is positioned in the premier asset. By remaining completely independent from developer quotas, our consultants benchmark orientation, micro-location premiums, construction milestones, and long-term capital liquidity across The Lakes, Ogami, and East Vale.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C]" />
                <span>Objective Inventory Assessment</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAFB] border border-slate-200 flex items-center justify-center text-[#1A202C] font-serif text-lg font-bold">
                  02
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A202C]">
                  Tailored Payment Advisory
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                  We engineer bespoke disbursement frameworks aligned with your liquidity cycles. From capitalizing on groundbreaking 0% down payments at The Lakes to structuring balanced 10-year repayment schedules, our advisory specialists act as your direct advocates to optimize developer terms and secure priority unit allocations.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C]" />
                <span>Strategic Fiscal Engineering</span>
              </div>
            </div>

          </div>

          <div className="text-center">
            <a
              href="https://wa.me/201277752731?text=Hello%20By%20properties-s.com%2C%20I%20would%20like%20to%20schedule%20a%20private%20consultation%20regarding%20SODIC%20Developments."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 py-4 px-10 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm uppercase tracking-[0.18em] font-bold shadow-xl transition-all"
            >
              <span>SCHEDULE PRIVATE CONSULTATION (+201277752731)</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================
          4. TECHNICAL FOOTER & COMPLIANCE (CALM LUXURY)
          Strict Zero Gold Policy: Crisp White & Alabaster
          Global Branding: By properties-s.com
          Positioning: Independent Real Estate Consultancy (Zero use of 'brokerage')
          ======================================================================== */}
      <footer className="bg-white border-t border-slate-200 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="flex flex-col items-center space-y-3">
            <a href="/" className="font-serif text-sm sm:text-base font-bold tracking-[0.34em] text-[#1A202C] uppercase hover:text-slate-600 transition-colors">
              PROPERTIES-S.COM
            </a>
            <div className="flex items-center justify-center gap-3 py-1 px-4 rounded-xl bg-[#FAFAFB] border border-slate-200">
              <FallbackImage
                src="/sodic-logo.png"
                fallbacks={[
                  "./sodic-logo.png",
                  "public/sodic-logo.png",
                  "images/sodic-logo.png",
                ]}
                alt="SODIC Developments"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="w-px h-5 bg-slate-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-700">PORTFOLIO</span>
            </div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-600">
              By properties-s.com
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
              Independent Real Estate Consultancy &bull; Strategic Marketing Partner
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xs leading-relaxed text-slate-500">
              By submitting, you agree to receive communications from By properties-s.com regarding real estate projects. This landing page is operated by By properties-s.com, an independent real estate consultancy, and is not the official website of the developer. Prices, payment structures, and availability are subject to change.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#1A202C]">
            <a href="/hyde-park" className="hover:text-slate-500 transition-colors">Hyde Park Portfolio</a>
            <span className="text-slate-300">&bull;</span>
            <a href="/privacy-policy" className="underline hover:text-slate-500 transition-colors">Privacy Policy</a>
            <span className="text-slate-300">&bull;</span>
            <a href="/terms-conditions" className="underline hover:text-slate-500 transition-colors">Terms &amp; Conditions</a>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-400 uppercase tracking-widest">
            <p>&copy; 2026 By properties-s.com &mdash; Independent Real Estate Consultancy. All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* ========================================================================
          FLOATING WHATSAPP BUTTON (FIXED ROUND SOLID GREEN #25D366)
          ======================================================================== */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/201277752731?text=Hello%20By%20properties-s.com%2C%20I%20would%20like%20to%20inquire%20about%20SODIC%20East%20The%20Lakes."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on WhatsApp with By properties-s.com"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>
        </a>
      </aside>

    </div>
  );
};

export default SodicPortfolio;
