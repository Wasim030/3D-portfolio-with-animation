'use client'

import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

// Each skill mapped to its Simple Icons slug for real logos
const skillCategories = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React.js", slug: "react", color: "61DAFB" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css3", color: "1572B6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "React Router", slug: "reactrouter", color: "CA4245" },
      { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
      { name: "React Hooks", slug: "react", color: "61DAFB" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express.js", slug: "express", color: "FFFFFF" },
      { name: "REST APIs", slug: "fastapi", color: "009688" },
      { name: "JWT Auth", slug: "jsonwebtokens", color: "FFFFFF" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "GraphQL", slug: "graphql", color: "E10098" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Firebase", slug: "firebase", color: "DD2C00" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "Redis", slug: "redis", color: "FF4438" },
    ],
  },
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Java", slug: "openjdk", color: "FFFFFF" },
      { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
      { name: "Python", slug: "python", color: "3776AB" },
    ],
  },
  {
    title: "Deployment",
    icon: "cloud",
    skills: [
      { name: "Vercel", slug: "vercel", color: "FFFFFF" },
      { name: "Netlify", slug: "netlify", color: "00C7B7" },
      { name: "AWS", slug: "amazonaws", color: "FF9900" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "MongoDB Atlas", slug: "mongodb", color: "47A248" },
    ],
  },
  {
    title: "Tools & OS",
    icon: "wrench",
    skills: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Jira", slug: "jira", color: "0052CC" },
      { name: "npm", slug: "npm", color: "CB3837" },
      { name: "Android Studio", slug: "androidstudio", color: "3DDC84" },
    ],
  },
  {
    title: "AI-Driven Tools",
    icon: "cpu",
    skills: [
      { name: "ChatGPT", slug: "openai", color: "10A37F" },
      { name: "GitHub Copilot", slug: "githubcopilot", color: "FFFFFF" },
      { name: "Claude AI", slug: "anthropic", color: "D97706" },
      { name: "Gemini AI", slug: "googlegemini", color: "8E75B2" },
      { name: "Cursor AI", slug: "cursor", color: "00e6ff" },
    ],
  },
  {
    title: "Testing & QA",
    icon: "shield",
    skills: [
      { name: "Postman", slug: "postman", color: "FF6C37" },
      { name: "Manual Testing", slug: "testcafe", color: "1581B0" },
      { name: "Automated QA", slug: "selenium", color: "43B02A" },
      { name: "Unit Testing", slug: "junit5", color: "25A190" },
      { name: "Jira", slug: "jira", color: "C21325" },
    ],
  },
]

// Robotic SVG icons for category headers
function CategoryIcon({ type }: { type: string }) {
  const size = 20
  const color = "currentColor"

  const icons: Record<string, React.ReactNode> = {
    monitor: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    server: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    database: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    cloud: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    wrench: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    cpu: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  }

  return <span className="text-cyan-400">{icons[type] || icons.code}</span>
}

function SkillIcon({ skill }: { skill: { name: string; slug: string; color: string } }) {
  if (skill.name === "ChatGPT") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <rect width="24" height="24" rx="5" fill="#10A37F" />
        <path d="M17.15 11.23a2.76 2.76 0 0 0-.25-1.19 2.76 2.76 0 0 0-1.1-1.2 2.76 2.76 0 0 0-1.63-.3c-.22.02-.45.1-.64.22l-1.23.7c-.1.06-.2.07-.3.07a.64.64 0 0 1-.46-.27c-.12-.17-.16-.38-.11-.59v-1.4a2.76 2.76 0 0 0-1.64-2.5 2.76 2.76 0 0 0-2 .16A2.76 2.76 0 0 0 6.6 6.32c-.08.2-.12.44-.12.67v-1.4a.64.64 0 0 1-.57.65c-.07 0-.15-.01-.22-.05l-1.23-.71a2.76 2.76 0 0 0-2.3-.26 2.76 2.76 0 0 0-1.47.93 2.76 2.76 0 0 0-.74 1.48 2.76 2.76 0 0 0 .32 2l1.23.7a.64.64 0 0 1 .37.75c-.05.21-.16.39-.32.51l-1.23.71a2.76 2.76 0 0 0 .2 3.75c.4.38.9.64 1.45.74a2.76 2.76 0 0 0 2-.15l1.23-.71c.1-.06.2-.07.3-.07a.64.64 0 0 1 .46.27c.12.17.16.38.11.59v-1.4a2.76 2.76 0 0 0 1.64 2.5 2.76 2.76 0 0 0 2-.16 2.76 2.76 0 0 0 1.34-1.39c.08-.2.12-.44.12-.67v-1.4c0-.36.2-.68.57-.65.07 0 .15.01.22.05l1.23.71a2.76 2.76 0 0 0 2.3.26 2.76 2.76 0 0 0 1.47-.93 2.76 2.76 0 0 0 .74-1.48 2.76 2.76 0 0 0-.32-2l-1.23-.7a.64.64 0 0 1-.37-.75c.05-.21.16-.39.32-.51l1.23-.71c.56-.32.96-.8 1.15-1.38Z" fill="white" />
      </svg>
    )
  }

  // Additional custom icons for other skills...
  if (skill.name === "Figma") {
    return (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <path d="M19 0C13.753 0 9.5 4.253 9.5 9.5C9.5 14.747 13.753 19 19 19H28.5V9.5C28.5 4.253 24.247 0 19 0Z" fill="#F24E1E" />
        <path d="M9.5 28.5C9.5 23.253 13.753 19 19 19C24.247 19 28.5 23.253 28.5 28.5C28.5 33.747 24.247 38 19 38C13.753 38 9.5 33.747 9.5 28.5Z" fill="#A259FF" />
        <path d="M9.5 47.5C9.5 42.253 13.753 38 19 38V47.5C19 52.747 14.753 57 9.5 57C4.253 57 0 52.747 0 47.5C0 42.253 4.253 38 9.5 38Z" fill="#0ACF83" />
        <path d="M9.5 19C4.253 19 0 23.253 0 28.5C0 33.747 4.253 38 9.5 38H19V28.5C19 23.253 14.753 19 9.5 19Z" fill="#1ABCFE" />
        <path d="M28.5 38C33.747 38 38 33.747 38 28.5C38 23.253 33.747 19 28.5 19C23.253 19 19 23.253 19 28.5V38H28.5Z" fill="#FF7262" />
      </svg>
    )
  }

  if (skill.name === "VS Code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <path d="M23.98 6.55a.57.57 0 0 0-.24-.38L19.47 3.03a.57.57 0 0 0-.74.07L12 10.37 5.27 3.1a.57.57 0 0 0-.74-.07L.26 6.17a.57.57 0 0 0-.24.38v10.9a.57.57 0 0 0 .24.38l4.27 3.14a.57.57 0 0 0 .74-.07L12 13.63l6.73 7.27a.57.57 0 0 0 .74.07l4.27-3.14a.57.57 0 0 0 .24-.38V6.55Z" fill="#007ACC" />
        <path d="M18.73 3.1a.57.57 0 0 0-.74.07L12 10.37V6.55h-.01L6.73 3.1a.57.57 0 0 0-.74.07L1.13 6.94a.57.57 0 0 0-.01.93l4.48 3.32-4.49 3.34a.57.57 0 0 0 .01.93l5.17 3.76a.57.57 0 0 0 .74-.07L12 13.63V18.6l.01-.05l5.86 4.3a.57.57 0 0 0 .74-.07l5.17-3.76a.57.57 0 0 0 .01-.93l-4.48-3.32l4.49-3.34a.57.57 0 0 0-.01-.93l-5.17-3.76Z" fill="#1F9CFE" opacity="0.85" />
      </svg>
    )
  }

  if (skill.name === "HTML5") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0Z" fill="#E34F26" />
        <path d="M12 2.2V21.8l6.8-2.2L20.3 4H12V2.2Z" fill="#EF652A" />
        <path d="M12 12.5H7.7l-.3-3.2H12V6.1H4.3l.6 6.4H12v3l-3.3-1-.2-2H5.7l.4 4.5L12 18v-5.5Z" fill="#EBEBEB" />
        <path d="M12 12.5h4.3l-.4 4.5-3.9 1V18l3.3-1 .4-4.5H12v-3.2h7.6l-.3 3.2H12v1z" fill="#FFFFFF" />
      </svg>
    )
  }

  if (skill.name === "CSS3") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0Z" fill="#1572B6" />
        <path d="M12 2.2V21.8l6.8-2.2L20.3 4H12V2.2Z" fill="#33A9DC" />
        <path d="M12 12.5H7.7l-.3-3.2H12V6.1H4l.9 9.6L12 18v-5.5Z" fill="#EBEBEB" />
        <path d="M12 12.5h4L15.6 16 12 17v-1.2l2.4-.7.3-3.6H12v-3.2h7.6l-.3 3.2H12v1z" fill="#FFFFFF" />
      </svg>
    )
  }

  if (skill.name === "AWS") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300">
        <path d="M12.3 12.3c0-1.8-.9-3-2.5-3-1.4 0-2.3 1-2.3 2.7v.5c0 1.7.9 2.8 2.3 2.8 1.6 0 2.5-1.2 2.5-3v.5c0 .3 0 .5-.2.5H7.7c.1.7.5 1.3 1.3 1.3.7 0 1.1-.3 1.3-.7l1.5.3c-.4.9-1.3 1.6-2.8 1.6-2.1 0-3.3-1.5-3.3-3.6V12c0-2 1.2-3.6 3.2-3.6 2 0 3 1.4 3 3.4v.5Z" fill="white" />
        <path d="M19.1 14.2l-1.2-4.5h-1.6l-1.1 4.5-1.1 4.5-1.1-4.5H12.5l2 6.5h1.5l1.1-4 1.1 4H19.7l2-6.5h-1.6l-1 4.5Z" fill="white" />
        <path d="M5.4 12c0-1 .5-1.6 1.4-1.6.8 0 1.2.5 1.2 1.3v.5H5.4v-.2ZM8 14.3H5.4c.1.6.4 1 1 1 .5 0 .8-.2.9-.5l.7.3c-.3.7-1 1.2-2.1 1.2-1.6 0-2.5-1.1-2.5-2.7V12c0-1.5.9-2.7 2.4-2.7 1.5 0 2.3 1 2.3 2.5v2.5Z" fill="white" />
        <path d="M1.3 17.5c2.4 1.5 5.5 2.2 8.7 2.2 4 0 7.8-1.2 10.7-3.4.4-.3.2-.8-.2-.7-2.8 1-6.1 1.5-9.4 1.5-3.4 0-6.6-.5-9.3-1.5-.4-.1-.7.4-.5.9Z" fill="#FF9900" />
        <path d="M21 16.5c-.1-.3-.6-.3-.7 0-.3.4-.8.8-1.3 1.1-.3.2-.2.6.2.5 1.1-.3 2.1-1 2.5-1.7.2-.3-.3-.8-.7-.4-.2.2-.4.4-.7.5Z" fill="#FF9900" />
      </svg>
    )
  }

  return (
    <div className="relative flex-shrink-0 w-5 h-5">
      <Image
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
        alt={skill.name}
        width={20}
        height={20}
        className="object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity duration-300"
        unoptimized
      />
    </div>
  )
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("ALL")

  const tabs = ["ALL", ...skillCategories.map(cat => cat.title)]

  const filteredCategories = activeTab === "ALL"
    ? skillCategories
    : skillCategories.filter(cat => cat.title === activeTab)

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
          title="Skills & Technologies"
          subtitle="Systems online — full diagnostic report of technical capabilities"
        />

        {/* Robotic Tab Console */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-6 max-w-5xl mx-auto px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-md font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 overflow-hidden ${isActive
                    ? "text-cyan-400 border-cyan-500/40"
                    : "text-white/40 border-white/5 hover:text-white/80 hover:border-cyan-500/20"
                  }`}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(15,15,30,0.9) 100%)'
                    : 'rgba(15,15,30,0.5)',
                  border: '1px solid',
                  boxShadow: isActive ? '0 0 15px rgba(6,182,212,0.15)' : 'none',
                }}
              >
                {/* Visual LED status indicator */}
                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive
                    ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"
                    : "bg-white/20"
                  }`} />

                <span className="relative z-10">{tab === "ALL" ? "ALL SYSTEMS" : tab}</span>

                {/* Subtly sliding neon border glow on hover/active */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 border border-cyan-400 pointer-events-none rounded-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Tech corner tick */}
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-500/30" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-500/30" />
              </button>
            )
          })}
        </div>

        {/* Robotic grid layout */}
        <motion.div
          layout
          className={
            filteredCategories.length === 1
              ? "flex justify-center max-w-lg mx-auto w-full"
              : filteredCategories.length === 2
                ? "grid md:grid-cols-2 max-w-4xl mx-auto gap-5 w-full"
                : "grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={filteredCategories.length === 1 ? "group relative w-full max-w-md" : "group relative"}
              >
                {/* Card with robotic border */}
                <div className="relative rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(15,15,30,0.95) 40%, rgba(168,85,247,0.04) 100%)',
                    border: '1px solid rgba(6,182,212,0.12)',
                  }}
                >
                  {/* Scanning line effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute left-0 w-full h-[1px]"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
                      }}
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    />
                  </div>

                  {/* Corner brackets — robotic frame */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" />

                  <div className="p-5">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-cyan-500/10">
                      <div className="flex items-center justify-center w-8 h-8 rounded bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <CategoryIcon type={category.icon} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 font-mono">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-[10px] font-mono text-emerald-400/70 tracking-widest uppercase">
                            online
                          </span>
                        </div>
                      </div>
                      {/* Module count badge */}
                      <span className="ml-auto text-[10px] font-mono text-cyan-400/50 bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/10">
                        {category.skills.length} modules
                      </span>
                    </div>

                    {/* Skills Grid with Real Icons */}
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill.name}
                          className="group/skill flex items-center gap-2.5 px-3 py-2 rounded-md cursor-default transition-all duration-300 hover:bg-white/5"
                          style={{
                            border: '1px solid rgba(255,255,255,0.04)',
                          }}
                          whileHover={{
                            borderColor: `rgba(${hexToRgb(skill.color)}, 0.3)`,
                            boxShadow: `0 0 12px rgba(${hexToRgb(skill.color)}, 0.08)`,
                          }}
                        >
                          <SkillIcon skill={skill} />
                          <span className="text-xs font-mono text-white/60 group-hover/skill:text-white/90 transition-colors truncate">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom circuit-line decoration */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// Helper: convert hex color to rgb string for dynamic rgba()
function hexToRgb(hex: string): string {
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r},${g},${b}`
}