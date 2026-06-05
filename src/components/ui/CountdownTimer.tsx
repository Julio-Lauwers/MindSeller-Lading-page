'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pricing_countdown_expiry'
const DURATION_MS = 24 * 60 * 60 * 1000

function getExpiry(): number {
  if (typeof window === 'undefined') return Date.now() + DURATION_MS
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const expiry = parseInt(stored, 10)
    if (expiry > Date.now()) return expiry
  }
  const expiry = Date.now() + DURATION_MS
  localStorage.setItem(STORAGE_KEY, String(expiry))
  return expiry
}

function formatTime(ms: number): string {
  if (ms <= 0) return '00:00:00'
  const totalSeconds = Math.floor(ms / 1000)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':')
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<string | null>(null)

  useEffect(() => {
    const expiry = getExpiry()
    const tick = () => setTimeLeft(formatTime(expiry - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft === null) return <span>24:00:00</span>
  return <span>{timeLeft}</span>
}
