'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = Array.from({ length: 18 }, (_, i) =>
  `/images/slider/karuzela-autokar-${i + 1}.jpg`
)

export default function ImageSlider() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() =>
      setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%',
      height: '400px', overflow: 'hidden' }}>
      {slides.map((src, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 1s ease'
        }}>
          <Image src={src} alt={`Autokar Busko-Zdroj Autokar Busko ${i + 1}`}
            fill style={{ objectFit: 'cover' }} />
        </div>
      ))}
      <button onClick={() =>
        setCur(c => (c - 1 + slides.length) % slides.length)}
        style={{ position: 'absolute', left: 16, top: '50%',
          transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)',
          color: 'white', border: 'none', padding: '12px 16px',
          cursor: 'pointer', borderRadius: '8px', fontSize: '20px' }}>
        ‹
      </button>
      <button onClick={() =>
        setCur(c => (c + 1) % slides.length)}
        style={{ position: 'absolute', right: 16, top: '50%',
          transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)',
          color: 'white', border: 'none', padding: '12px 16px',
          cursor: 'pointer', borderRadius: '8px', fontSize: '20px' }}>
        ›
      </button>
      <div style={{ position: 'absolute', bottom: 16,
        left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '8px' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)}
            style={{ width: '10px', height: '10px', borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: i === cur ? '#f59e0b' : 'rgba(255,255,255,0.5)' }} />
        ))}
      </div>
    </div>
  )
}
