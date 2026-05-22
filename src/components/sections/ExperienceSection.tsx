'use client'

import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Ayur.Ai Private Limited",
    duration: "Jan 2026 – Present",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=200&h=200&fit=crop", // Healthcare/tech workspace
    details: [
      "Building end-to-end healthcare web applications integrating AI-driven wellness solutions.",
      "Developing Doctor Dashboard full-stack (frontend + backend) with responsive UI for healthcare professionals.",
      "Working on AI Well App backend development, including database design, RESTful APIs, and server-side logic.",
      "Developed smart healthcare kiosk app using Kotlin, Jetpack Compose, and MVVM architecture.",
      "Integrating REST APIs and Bluetooth Low Energy (BLE) for BCA machines, smart rings, and smartwatches.",
      "Performing manual and automated quality testing to ensure high reliability across application suites."
    ]
  },
  {
    role: "Full Stack & Software Testing Course",
    company: "QSpiders",
    duration: "March 2025 – Dec 2025",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop", // Code on screen
    details: [
      "Acquired comprehensive practical knowledge in Manual Testing, Automation Testing, Core Java, and SQL.",
      "Gained hands-on experience with Selenium WebDriver, TestNG, and bug reporting workflows using JIRA.",
      "Designed and executed 100+ manual test cases for critical functional modules of e-commerce web applications.",
      "Automated key user flows (Login, Search, Checkout) using Selenium WebDriver styled with the Page Object Model (POM) pattern."
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,6%)] via-[hsl(230,40%,8%)] to-[hsl(260,30%,8%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Scan lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(6,182,212,0.2) 2px, rgba(6,182,212,0.2) 4px)',
        }}
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* HUD corners */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-500/20 hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500/20 hidden lg:block" />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="A timeline of my professional experience and technical training"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line with gradient */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent md:left-[31px]" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <AnimatedSection
                key={`${exp.role}-${exp.company}`}
                delay={idx * 0.1}
                className="relative group"
              >
                {/* Timeline Indicator Node - Cyber styled */}
                <div className="absolute left-0 top-1 md:left-3 z-10">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="absolute -inset-2 rounded-full border border-cyan-500/30 animate-ping" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
                    {/* Core node */}
                    <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-300">
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>

                {/* Terminal-style card */}
                <div className="ml-8 md:ml-12 relative">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-cyan-500/20 border-b-0 rounded-t-sm">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">experience@{exp.company.split(' ')[0].toLowerCase()}.log</span>
                  </div>

                  {/* Card content */}
                  <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-b-sm overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />

                    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-7">
                      {/* Professional Image Section */}
                      <div className="flex-shrink-0">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-sm overflow-hidden border-2 border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:border-cyan-400/70 transition-all duration-300 shadow-lg">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          {/* Cyber grid overlay on image */}
                          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6,182,212,0.5) 1px, transparent 1px)',
                            backgroundSize: '8px 8px'
                          }} />
                          {/* Scanning line overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0"
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
                          />
                          {/* Corner brackets on image */}
                          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60" />
                          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60" />
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60" />
                        </div>
                        {/* Status indicator under image */}
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                          <span className="text-[8px] font-mono text-emerald-400/70">ACTIVE</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-1 rounded-sm">
                            {exp.duration}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                            <span className="text-[8px] font-mono text-cyan-500/50 tracking-wider">
                              {idx === 0 ? "CURRENT_POSITION" : "CERTIFICATION"}
                            </span>
                            <span className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400 mb-2">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 mt-1 mb-5 text-sm font-mono">
                          <span className="text-emerald-400 flex items-center gap-1.5">
                            <span className="text-base">→</span> {exp.company}
                          </span>
                          <span className="text-cyan-500/30">|</span>
                          <span className="text-cyan-500/60 flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2.5 mt-4">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="text-xs md:text-sm font-mono text-cyan-100/70 flex items-start gap-2.5 leading-relaxed">
                              <span className="text-emerald-400 shrink-0 select-none mt-0.5">$</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom gradient line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}