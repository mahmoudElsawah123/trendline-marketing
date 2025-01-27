import React from 'react';
import Image from 'next/image';
import bgBanner from '/public/images/2.svg';
import {useTranslations} from 'next-intl';

const Banner = () => {
  const t = useTranslations('Banner');
  return (
    // Section for the banner with ARIA role and label for accessibility
    <section 
      role="banner" 
      aria-label="Bags Collection Banner"
      className="relative flex items-center justify-center h-[164px] bg-cover bg-center"
    >
      {/* Background Image using Next.js Image component */}
      <Image
        src={bgBanner}
        alt="Decorative background for Bags Collection"
        fill
        className="object-cover"
        priority // Ensures the image is loaded with high priority
      />

      {/* Main content of the banner */}
      <div className="text-6xl font-bold text-primary relative z-10">
        {/* Main heading with ARIA label */}
        <h1 className="ml-6" aria-label="Bags Collection">
        {t('title')}
        </h1>
        
        {/* Reflective text for visual effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 text-8xl font-bold text-[#b4afaf] opacity-20 transform scale-y-[1]"
          aria-hidden="true" // Hide from screen readers as it's decorative
        >
          {t('title')}
        </div>
      </div>
    </section>
  );
};

export default Banner;