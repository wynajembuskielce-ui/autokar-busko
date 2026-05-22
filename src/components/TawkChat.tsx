'use client'
import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
    const s1 = document.createElement('script')
    s1.async = true
    s1.src = 'https://embed.tawk.to/69e93b2e47b9821c343cb65c/1jmrguc2j'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    document.head.appendChild(s1)
    return () => {
      if (document.head.contains(s1)) {
        document.head.removeChild(s1)
      }
    }
  }, [])
  return null
}
