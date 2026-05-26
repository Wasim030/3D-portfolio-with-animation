'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    cursorX.set(x)
    cursorY.set(y)
  }, [cursorX, cursorY])

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      setIsHovered(!!isClickable)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.documentElement.classList.add('custom-cursor-active')

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [handleMouseMove])

  if (!isVisible) return null

  const activeColor = isClicked ? '#f43f5e' : isHovered ? '#34d399' : '#22d3ee'
  const glowSm = isClicked
    ? '0 0 8px rgba(244,63,94,0.8)'
    : isHovered
      ? '0 0 8px rgba(52,211,153,0.8)'
      : '0 0 8px rgba(34,211,238,0.7)'
  const glowLg = isClicked
    ? '0 0 20px rgba(244,63,94,0.4)'
    : isHovered
      ? '0 0 20px rgba(52,211,153,0.4)'
      : '0 0 20px rgba(34,211,238,0.3)'

  return (
    <>
      {/* ── Core: Robot Eye Pupil ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isClicked ? 2 : isHovered ? 8 : 2.5,
            height: isClicked ? 2 : isHovered ? 8 : 2.5,
            borderRadius: isHovered ? '2px' : '50%',
            backgroundColor: activeColor,
            boxShadow: glowSm,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* ── Iris Ring: Contracting Camera Aperture ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.svg
          width="48"
          height="48"
          viewBox="-24 -24 48 48"
          animate={{
            rotate: [0, 360],
            scale: isClicked ? 0.55 : isHovered ? 1.0 : 0.8,
          }}
          transition={{
            rotate: { repeat: Infinity, duration: isHovered ? 3 : 6, ease: 'linear' },
            scale: { type: 'spring', stiffness: 250, damping: 18 },
          }}
        >
          {/* Aperture blades — 6 overlapping triangular shapes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <motion.line
              key={`blade-${angle}`}
              x1={Math.cos(((angle - 30) * Math.PI) / 180) * (isHovered ? 8 : 10)}
              y1={Math.sin(((angle - 30) * Math.PI) / 180) * (isHovered ? 8 : 10)}
              x2={Math.cos(((angle + 30) * Math.PI) / 180) * (isHovered ? 16 : 18)}
              y2={Math.sin(((angle + 30) * Math.PI) / 180) * (isHovered ? 16 : 18)}
              stroke={activeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.6}
            />
          ))}

          {/* Outer ring — thin circle */}
          <motion.circle
            r="18"
            fill="none"
            stroke={activeColor}
            strokeWidth="0.5"
            opacity={0.25}
            strokeDasharray="3 5"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />

          {/* Focus ring — pulsing */}
          <motion.circle
            r={isHovered ? 12 : 14}
            fill="none"
            stroke={activeColor}
            strokeWidth="0.8"
            opacity={0.35}
            animate={{
              r: isHovered ? [12, 13, 12] : [14, 15, 14],
              opacity: [0.35, 0.15, 0.35],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>

      {/* ── Hex Scanner Frame ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.svg
          width="72"
          height="72"
          viewBox="-36 -36 72 72"
          animate={{
            rotate: [360, 0],
            scale: isClicked ? 0.65 : isHovered ? 0.95 : 0.75,
          }}
          transition={{
            rotate: { repeat: Infinity, duration: isHovered ? 5 : 10, ease: 'linear' },
            scale: { type: 'spring', stiffness: 150, damping: 12 },
          }}
        >
          {/* Hexagon outline */}
          <motion.polygon
            points={hexPoints(28)}
            fill="none"
            stroke={activeColor}
            strokeWidth="0.8"
            opacity={isHovered ? 0.5 : 0.2}
            strokeLinejoin="round"
          />

          {/* Corner notch marks at each hex vertex */}
          {hexVertices(28).map((v, i) => (
            <motion.circle
              key={`notch-${i}`}
              cx={v.x}
              cy={v.y}
              r="1.5"
              fill={activeColor}
              opacity={isHovered ? 0.7 : 0.25}
              animate={{
                opacity: isHovered ? [0.7, 0.3, 0.7] : 0.25,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Scanning sweep line across the hexagon */}
          <motion.line
            x1="-28"
            y1="0"
            x2="28"
            y2="0"
            stroke={activeColor}
            strokeWidth="0.5"
            opacity={0.2}
            animate={{
              y1: [-20, 20, -20],
              y2: [-20, 20, -20],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>

      {/* ── Click: Electric Burst ── */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9996]"
            style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
          >
            {/* 8 electric bolts radiating outward */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <motion.div
                key={`bolt-${angle}`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 1,
                  height: 20,
                  background: `linear-gradient(to bottom, ${activeColor}, transparent)`,
                  transformOrigin: 'top center',
                  transform: `rotate(${angle}deg)`,
                  borderRadius: 1,
                }}
                initial={{ scaleY: 0, opacity: 1 }}
                animate={{ scaleY: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Hex Geometry Helpers ── */

function hexPoints(r: number): string {
  return hexVertices(r).map(v => `${v.x},${v.y}`).join(' ')
}

function hexVertices(r: number): { x: number; y: number }[] {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (60 * i - 30) * (Math.PI / 180)
    return { x: r * Math.cos(angle), y: r * Math.sin(angle) }
  })
}
