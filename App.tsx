import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_URL, SOCIAL_LINKS, ACHIEVEMENTS, UPCOMING_EVENTS, WHAT_WE_DO } from './constants';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Floating Social Bar Component (Fixed on mobile)
const SocialBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy/95 backdrop-blur-lg border-t border-white/10 p-2 safe-bottom">
    <div className="flex flex-col gap-2">
      {/* Primary Join Button */}
      <a
        href={SOCIAL_LINKS.membershipForm}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-lightBlue text-navy py-3 rounded-xl flex items-center justify-center gap-2 font-black text-base shadow-lg active:scale-95 transition-transform"
      >
        <i className="fas fa-user-plus"></i>
        <span>Join UOWD Tech Club</span>
      </a>
      {/* Social Links Row */}
      <div className="flex justify-center gap-2">
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <i className="fab fa-whatsapp text-lg"></i>
          <span>WhatsApp</span>
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <i className="fab fa-instagram text-lg"></i>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  </div>
);

// Hero Section
const HeroSection: React.FC = () => (
  <section className="min-h-[100svh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-navy via-navy to-darkPurple px-4 py-12">
    {/* Background effects */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-lightBlue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-darkPurple/40 rounded-full blur-[100px] animate-pulse-slow"></div>
    </div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative z-10 text-center max-w-lg mx-auto"
    >
      {/* Badge */}
      <motion.div variants={fadeInUp} className="mb-6">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-lightBlue px-4 py-1.5 rounded-full text-xs font-bold">
          <i className="fas fa-trophy text-yellow-400"></i>
          CLUB OF THE YEAR 2025
        </span>
      </motion.div>

      {/* Logo */}
      <motion.div variants={fadeInUp} className="mb-6">
        <img
          src={LOGO_URL}
          alt="UOWD Tech Club"
          className="h-28 w-28 md:h-36 md:w-36 mx-auto rounded-full border-4 border-lightBlue shadow-[0_0_40px_rgba(0,212,255,0.4)]"
        />
      </motion.div>

      {/* Title */}
      <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
        UOWD <span className="text-lightBlue">TECH CLUB</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
        Where innovation meets community. Build skills, make connections, shape the future.
      </motion.p>

      {/* Join Button - Primary CTA */}
      <motion.div variants={fadeInUp} className="mb-6">
        <a
          href={SOCIAL_LINKS.membershipForm}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-lightBlue hover:bg-lightBlue/90 text-navy font-black py-4 px-10 rounded-full text-lg transition-all hover:scale-105 shadow-[0_10px_40px_-10px_rgba(0,212,255,0.6)] active:scale-95"
        >
          <i className="fas fa-user-plus text-xl"></i>
          Join UOWD Tech Club
          <i className="fas fa-arrow-right text-sm"></i>
        </a>
      </motion.div>

      {/* Desktop Social Buttons */}
      <motion.div variants={fadeInUp} className="hidden md:flex justify-center gap-4 mb-8">
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1fb855] text-white py-3 px-6 rounded-full flex items-center gap-2 font-semibold transition-all hover:scale-105 shadow-lg"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          Join WhatsApp
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white py-3 px-6 rounded-full flex items-center gap-2 font-semibold transition-all hover:scale-105 shadow-lg"
        >
          <i className="fab fa-instagram text-xl"></i>
          Follow Us
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-black text-lightBlue">800+</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Members</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-black text-lightBlue">50+</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Events/Year</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-black text-lightBlue">20+</div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">Partners</div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

// What We Do Section
const WhatWeDoSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-white px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.span variants={fadeInUp} className="inline-block text-lightBlue text-sm font-bold uppercase tracking-widest mb-3">
          What We Do
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-navy mb-4">
          More Than Just a Club
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
          We bridge academic learning with real-world tech experience through hands-on activities.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      >
        {WHAT_WE_DO.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl p-5 md:p-6 text-center hover:bg-lightBlue/5 transition-colors border border-gray-100"
          >
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4 text-lightBlue">
              <i className={`fas ${item.icon} text-xl`}></i>
            </div>
            <h3 className="font-bold text-navy text-sm md:text-base mb-1">{item.title}</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Achievements Section
const AchievementsSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-navy text-white px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.span variants={fadeInUp} className="inline-block text-lightBlue text-sm font-bold uppercase tracking-widest mb-3">
          Our Achievements
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black mb-4">
          Proven Track Record
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl mx-auto">
          Our members consistently excel at competitions, secure top internships, and build impactful projects.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="space-y-4"
      >
        {ACHIEVEMENTS.map((achievement, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-lightBlue/20 rounded-full flex items-center justify-center shrink-0">
              <i className={`fas ${achievement.icon} text-lightBlue`}></i>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
              <span className="inline-block mt-2 text-xs text-lightBlue font-semibold">{achievement.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Upcoming Events Section
const EventsSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-gray-50 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.span variants={fadeInUp} className="inline-block text-lightBlue text-sm font-bold uppercase tracking-widest mb-3">
          Coming Soon
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-navy mb-4">
          Upcoming Events
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto">
          Don't miss out on these exciting opportunities to learn, connect, and grow.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="space-y-4"
      >
        {UPCOMING_EVENTS.map((event, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4"
          >
            <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-black text-navy">{event.day}</div>
              <div>
                <div className="text-sm font-semibold text-gray-600">{event.month}</div>
                <div className="text-xs text-gray-400">{event.time}</div>
              </div>
            </div>
            <div className="flex-grow">
              <span className="inline-block bg-lightBlue/10 text-lightBlue text-xs font-bold px-2 py-1 rounded-full mb-2">
                {event.type}
              </span>
              <h3 className="font-bold text-navy text-lg mb-1">{event.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{event.description}</p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <i className="fas fa-location-dot"></i>
                <span>{event.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Join CTA Section
const JoinSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-white px-4">
    <div className="max-w-xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="bg-gradient-to-br from-navy to-darkPurple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-lightBlue/10 blur-[60px] rounded-full"></div>

        <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
          Ready to Level Up?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-300 mb-8 relative z-10">
          Join 800+ students who are building the future of tech. Membership is free and open to all UOWD students.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col gap-3 relative z-10">
          <a
            href={SOCIAL_LINKS.membershipForm}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lightBlue text-navy py-4 px-8 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-lightBlue/90 transition-all hover:scale-105 shadow-xl"
          >
            <i className="fas fa-user-plus text-xl"></i>
            Join UOWD Tech Club Now
            <i className="fas fa-arrow-right"></i>
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-3 px-8 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-[#1fb855] transition-colors shadow-lg"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Join WhatsApp Group
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
          >
            <i className="fab fa-instagram text-xl"></i>
            Follow on Instagram
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Footer
const Footer: React.FC = () => (
  <footer className="bg-navy text-white py-8 px-4 pb-32 md:pb-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={LOGO_URL} alt="Tech Club" className="h-10 w-10 rounded-full border-2 border-lightBlue" />
        <span className="font-bold text-lg">UOWD Tech Club</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Building the future, one line of code at a time.
      </p>
      <div className="flex justify-center gap-4 mb-6">
        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors">
          <i className="fab fa-instagram text-xl"></i>
        </a>
      </div>
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} UOWD Tech Club. All rights reserved.
      </p>
    </div>
  </footer>
);

// Main App
const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-lightBlue selection:text-navy antialiased">
      <HeroSection />
      <WhatWeDoSection />
      <AchievementsSection />
      <EventsSection />
      <JoinSection />
      <Footer />
      <SocialBar />
    </div>
  );
};

export default App;
