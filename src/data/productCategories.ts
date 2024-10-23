export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: SubCategory[];
}

export const productCategories: Category[] = [
  {
    id: 'cleansers',
    name: 'Cleansers',
    description: 'Products that remove dirt, oil, and impurities from the skin',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'face-washes',
        name: 'Face Washes',
        description: 'Water-based cleansers for daily use'
      },
      {
        id: 'micellar-waters',
        name: 'Micellar Waters',
        description: 'Gentle, no-rinse cleansing solutions'
      },
      {
        id: 'oil-cleansers',
        name: 'Oil Cleansers',
        description: 'Oil-based cleansers that dissolve makeup and impurities'
      },
      {
        id: 'cleansing-balms',
        name: 'Cleansing Balms',
        description: 'Solid oil-based cleansers that melt into the skin'
      }
    ]
  },
  {
    id: 'exfoliants',
    name: 'Exfoliants',
    description: 'Products that remove dead skin cells and improve skin texture',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'physical-scrubs',
        name: 'Physical Scrubs',
        description: 'Granular products that manually exfoliate the skin'
      },
      {
        id: 'chemical-exfoliants',
        name: 'Chemical Exfoliants',
        description: 'AHAs and BHAs that dissolve dead skin cells'
      },
      {
        id: 'enzyme-exfoliants',
        name: 'Enzyme Exfoliants',
        description: 'Natural enzymes that gently dissolve dead skin cells'
      }
    ]
  },
  {
    id: 'toners',
    name: 'Toners',
    description: 'Products that balance skin pH and provide initial hydration',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'hydrating-toners',
        name: 'Hydrating',
        description: 'Moisture-boosting toners for dry skin'
      },
      {
        id: 'balancing-toners',
        name: 'Balancing',
        description: 'pH-balancing toners for combination skin'
      },
      {
        id: 'astringent-toners',
        name: 'Astringent',
        description: 'Oil-controlling toners for oily skin'
      }
    ]
  },
  {
    id: 'treatments',
    name: 'Treatments',
    description: 'Targeted solutions for specific skin concerns',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'serums',
        name: 'Serums',
        description: 'Concentrated treatments with active ingredients'
      },
      {
        id: 'ampoules',
        name: 'Ampoules',
        description: 'Highly concentrated treatment solutions'
      },
      {
        id: 'spot-treatments',
        name: 'Spot Treatments',
        description: 'Targeted treatments for specific areas'
      },
      {
        id: 'acne-treatments',
        name: 'Acne Treatments',
        description: 'Products specifically formulated for acne-prone skin'
      }
    ]
  },
  {
    id: 'moisturizers',
    name: 'Moisturizers',
    description: 'Products that hydrate and protect the skin',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'lotions',
        name: 'Lotions',
        description: 'Light, quick-absorbing moisturizers'
      },
      {
        id: 'creams',
        name: 'Creams',
        description: 'Rich, nourishing moisturizers'
      },
      {
        id: 'gels',
        name: 'Gels',
        description: 'Lightweight, water-based moisturizers'
      },
      {
        id: 'oils',
        name: 'Oils',
        description: 'Natural oils for deep nourishment'
      }
    ]
  },
  {
    id: 'sun-protection',
    name: 'Sun Protection',
    description: 'Products that protect skin from UV damage',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'sunscreens',
        name: 'Sunscreens',
        description: 'Dedicated sun protection products'
      },
      {
        id: 'spf-moisturizers',
        name: 'SPF Moisturizers',
        description: 'Moisturizers with added sun protection'
      },
      {
        id: 'uv-protection-sprays',
        name: 'UV Protection Sprays',
        description: 'Easy-to-apply sun protection sprays'
      }
    ]
  },
  {
    id: 'eye-care',
    name: 'Eye Care',
    description: 'Specialized products for the delicate eye area',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'eye-creams',
        name: 'Eye Creams',
        description: 'Rich moisturizers for the eye area'
      },
      {
        id: 'eye-serums',
        name: 'Eye Serums',
        description: 'Concentrated treatments for eye concerns'
      },
      {
        id: 'eye-masks',
        name: 'Eye Masks',
        description: 'Intensive treatments for the eye area'
      }
    ]
  },
  {
    id: 'masks',
    name: 'Masks',
    description: 'Intensive treatments for specific skin concerns',
    image: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'sheet-masks',
        name: 'Sheet Masks',
        description: 'Single-use fabric masks soaked in serum'
      },
      {
        id: 'clay-masks',
        name: 'Clay Masks',
        description: 'Purifying masks for deep cleansing'
      },
      {
        id: 'sleeping-masks',
        name: 'Sleeping Masks',
        description: 'Overnight treatments for intensive care'
      },
      {
        id: 'hydrating-masks',
        name: 'Hydrating Masks',
        description: 'Masks focused on moisture replenishment'
      }
    ]
  },
  {
    id: 'special-care',
    name: 'Special Care',
    description: 'Additional products for enhanced skincare',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    subcategories: [
      {
        id: 'face-mists',
        name: 'Face Mists',
        description: 'Refreshing sprays for hydration throughout the day'
      },
      {
        id: 'essence',
        name: 'Essence',
        description: 'Lightweight treatments for hydration and brightening'
      },
      {
        id: 'face-oils',
        name: 'Face Oils',
        description: 'Pure oils for targeted skin benefits'
      },
      {
        id: 'facial-tools',
        name: 'Facial Rollers/Tools',
        description: 'Tools to enhance product absorption and skin health'
      }
    ]
  }
];