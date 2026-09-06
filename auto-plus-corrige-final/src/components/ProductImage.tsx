'use client'

import { useState } from 'react'

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function ProductImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={className} data-fallback="true">
        <span className="fallback-badge">{initials(alt)}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
