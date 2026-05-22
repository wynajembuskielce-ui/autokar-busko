'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const fleetImages = [
  { src: '/images/flota/flota-autokar-5.jpg', alt: 'Autokar turystyczny 50 osob, Krakow, Muszkieter, wynajem na wesele i wycieczki' },
  { src: '/images/flota/flota-autokar-3.jpg', alt: 'Autokar 35 osob na transport grupowy, Krakow, Muszkieter Przewozy' },
  { src: '/images/flota/flota-bus-7.jpg', alt: 'Minibus VIP 17 osob, transport grupowy Krakow, klimatyzacja i komfort' },
  { src: '/images/flota/flota-bus-3.jpg', alt: 'Bus 9 osob, szybki transfer lotniskowy z Krakowa, Muszkieter' },
  { src: '/images/flota/flota-bus-8.jpg', alt: 'Minibus VIP dla firm i delegacji, wynajem busa Krakow' },
  { src: '/images/flota/flota-autokar-10.jpg', alt: 'Autokar na transfer lotnisko Warszawa Krakow Katowice z Krakowa' },
];

export default function FleetCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-900 md:h-56">
        {fleetImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {fleetImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#f59e0b]' : 'h-2 w-2 bg-gray-400 hover:bg-[#f59e0b]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}