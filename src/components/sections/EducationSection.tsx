'use client'

import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

const educationList = [
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "Priyadarshini Engineering College",
    duration: "June 2021 – May 2025",
    score: "CGPA: 8.0 / 10",
    location: "Vaniyambadi, Tamil Nadu"
  },
  {
    degree: "MPC with Computer Science (HSC)",
    school: "Islamiah Boys Higher Secondary School",
    duration: "June 2019 – May 2021",
    score: "Distinction / Top Scorer",
    location: "Vaniyambadi, Tamil Nadu",
    description: "Achieved top scores in multiple subjects across both Grade 10 and Grade 12 final examinations."
  }
]

const certifications = [
  { name: "React — The Complete Guide (Hooks, Router, Redux)", provider: "Simplilearn" },
  { name: "Node.js Developer Course", provider: "Eduprep" },
  { name: "MongoDB Basics", provider: "Simplilearn" },
  { name: "Java Programming", provider: "Prodigy Infotech" },
  { name: "Full Stack Web Development", provider: "Eduprep" },
  { name: "Advanced QA Automation Testing", provider: "QSpiders" }
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
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

      <div className="relative z-10 section-container">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic background and verified credentials"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side: Education */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-cyan-500/40" />
                <span className="text-xs font-mono text-cyan-400/70 tracking-[0.2em] uppercase">[ ACADEMIC_PATH ]</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent" />
              </div>
            </AnimatedSection>

            {educationList.map((edu, idx) => (
              <AnimatedSection
                key={edu.degree}
                delay={0.4 + (idx * 0.15)}
                direction="left"
                className="relative group"
              >
                <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-b border-cyan-500/20">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-[9px] font-mono text-cyan-500/50 tracking-wider">education@terminal</span>
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <h4 className="text-lg sm:text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/70 bg-cyan-950/50 border border-cyan-500/30 px-2 py-1 rounded-sm shrink-0">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-mono text-cyan-100/70 flex items-center gap-2">
                        <span className="text-emerald-400">→</span> {edu.school}
                      </p>
                      <p className="text-xs font-mono text-cyan-500/50 flex items-center gap-2">
                        <span className="text-cyan-500">📍</span> {edu.location}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-950/30 border-l-2 border-emerald-400 text-xs font-mono text-emerald-300 mt-3">
                        <span className="text-emerald-400">✓</span> {edu.score}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-xs font-mono text-cyan-400/60 mt-4 italic border-t border-cyan-500/20 pt-3">
                        {`// ${edu.description}`}
                      </p>
                    )}
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Side: Certifications */}
          <div>
            <AnimatedSection delay={0.3}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-cyan-500/40" />
                <span className="text-xs font-mono text-cyan-400/70 tracking-[0.2em] uppercase">[ VERIFIED_CREDENTIALS ]</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent" />
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <AnimatedSection
                  key={cert.name}
                  delay={0.5 + (idx * 0.05)}
                  className="relative group"
                >
                  <div className="relative bg-slate-950/60 backdrop-blur-sm border border-cyan-500/20 rounded-sm p-4 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.08)] h-full flex flex-col">
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                    </div>

                    <div className="text-xs font-mono text-cyan-400/50 mb-2 flex items-center gap-1">
                      <span className="text-emerald-400">$</span> cert_{idx + 1}.json
                    </div>

                    <div className="text-sm font-mono font-bold text-cyan-100/80 mb-2 line-clamp-2">
                      {cert.name}
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400/60 tracking-wider">
                        {cert.provider}
                      </span>
                      <div className="w-4 h-4 border border-cyan-500/30 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-400/60 rounded-sm" />
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}