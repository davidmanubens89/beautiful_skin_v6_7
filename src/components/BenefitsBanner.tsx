import React, { useState, useEffect } from 'react';

const BenefitsBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    {
      text: "Your skin texture will become smoother and more refined with our gentle exfoliating cleanser and targeted treatments",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Experience a natural, healthy radiance as our vitamin-rich serums boost your skin's vitality",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Achieve optimal hydration levels with our moisture-locking formula, keeping your skin plump and supple for hours",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Our ceramide-rich moisturizer helps strengthen your skin's natural barrier, protecting against environmental damage",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Regular use of our retinol and peptide complex will visibly reduce fine lines and improve skin firmness",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Benefits</h2>
      <div className="relative h-96 overflow-hidden rounded-lg">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={benefit.image}
              alt={benefit.text}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-2xl text-white font-medium px-16 text-center leading-relaxed">
                {benefit.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsBanner;