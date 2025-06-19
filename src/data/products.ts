import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Makeup',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Face', 'Eyes', 'Lips', 'Nails', 'Brushes', 'Palettes']
  },
  {
    id: '2',
    name: 'Skincare',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Masks', 'Toners', 'Sunscreen']
  },
  {
    id: '3',
    name: 'Haircare',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Shampoo', 'Conditioner', 'Styling', 'Treatments', 'Hair Oil', 'Hair Masks']
  },
  {
    id: '4',
    name: 'Fragrance',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Perfume', 'Body Spray', 'Deodorant', 'Body Mist']
  },
  {
    id: '5',
    name: 'Bath & Body',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Body Wash', 'Body Lotion', 'Scrubs', 'Bath Bombs']
  },
  {
    id: '6',
    name: 'Men\'s Grooming',
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Beard Care', 'Shaving', 'Face Care', 'Hair Styling']
  }
];

export const products: Product[] = [
  // Makeup Products
  {
    id: '1',
    name: 'Radiant Glow Foundation',
    brand: 'LuxeBeauty',
    price: 45.99,
    originalPrice: 55.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Face',
    rating: 4.5,
    reviewCount: 234,
    description: 'A lightweight, buildable foundation that provides natural-looking coverage with a radiant finish.',
    shades: ['Fair', 'Light', 'Medium', 'Tan', 'Deep'],
    inStock: true,
    isNew: true,
    discount: 18
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    brand: 'GlamourPro',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Lips',
    rating: 4.8,
    reviewCount: 456,
    description: 'Long-lasting matte lipstick with intense color payoff and comfortable wear.',
    shades: ['Ruby Red', 'Rose Pink', 'Berry Crush', 'Nude Beige'],
    inStock: true,
    isBestseller: true
  },
  {
    id: '3',
    name: 'Volumizing Mascara',
    brand: 'EyeGlow',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Eyes',
    rating: 4.3,
    reviewCount: 312,
    description: 'Dramatic volume and length mascara that separates and defines each lash.',
    inStock: true,
    isBestseller: true
  },
  {
    id: '4',
    name: 'Eyeshadow Palette - Sunset Dreams',
    brand: 'ColorCraft',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Palettes',
    rating: 4.7,
    reviewCount: 189,
    description: '12-shade eyeshadow palette with warm sunset tones for versatile looks.',
    inStock: true,
    discount: 20
  },
  {
    id: '5',
    name: 'Precision Eyeliner',
    brand: 'LineArt',
    price: 16.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Eyes',
    rating: 4.4,
    reviewCount: 278,
    description: 'Waterproof precision eyeliner for sharp, defined lines that last all day.',
    inStock: true
  },
  {
    id: '6',
    name: 'Blush & Highlight Duo',
    brand: 'GlowUp',
    price: 28.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Face',
    rating: 4.6,
    reviewCount: 156,
    description: 'Perfect duo for adding color and glow to your cheeks.',
    shades: ['Peachy Pink', 'Rose Gold', 'Coral Sunset'],
    inStock: true,
    isNew: true
  },
  {
    id: '7',
    name: 'Nail Polish Set',
    brand: 'NailArt',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Nails',
    rating: 4.2,
    reviewCount: 89,
    description: 'Set of 5 trendy nail polish colors for every occasion.',
    inStock: true,
    discount: 22
  },
  {
    id: '8',
    name: 'Professional Makeup Brush Set',
    brand: 'BrushCraft',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Makeup',
    subcategory: 'Brushes',
    rating: 4.8,
    reviewCount: 345,
    description: '15-piece professional makeup brush set with premium synthetic bristles.',
    inStock: true,
    isBestseller: true,
    discount: 25
  },

  // Skincare Products
  {
    id: '9',
    name: 'Hydrating Face Serum',
    brand: 'PureSkin',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Serums',
    rating: 4.6,
    reviewCount: 189,
    description: 'Intensive hydrating serum with hyaluronic acid for plump, dewy skin.',
    ingredients: ['Hyaluronic Acid', 'Vitamin E', 'Niacinamide'],
    inStock: true,
    discount: 20
  },
  {
    id: '10',
    name: 'Gentle Foaming Cleanser',
    brand: 'CleanGlow',
    price: 22.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Cleansers',
    rating: 4.4,
    reviewCount: 267,
    description: 'Gentle foaming cleanser that removes impurities without stripping skin.',
    ingredients: ['Salicylic Acid', 'Aloe Vera', 'Green Tea Extract'],
    inStock: true
  },
  {
    id: '11',
    name: 'Anti-Aging Night Cream',
    brand: 'YouthGlow',
    price: 54.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Moisturizers',
    rating: 4.7,
    reviewCount: 198,
    description: 'Rich night cream with retinol and peptides for youthful skin.',
    ingredients: ['Retinol', 'Peptides', 'Ceramides'],
    inStock: true,
    discount: 21
  },
  {
    id: '12',
    name: 'Vitamin C Face Mask',
    brand: 'BrightSkin',
    price: 18.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Masks',
    rating: 4.3,
    reviewCount: 145,
    description: 'Brightening face mask with vitamin C for radiant skin.',
    ingredients: ['Vitamin C', 'Kojic Acid', 'Licorice Extract'],
    inStock: true,
    isNew: true
  },
  {
    id: '13',
    name: 'Balancing Toner',
    brand: 'EquilibriumSkin',
    price: 26.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Toners',
    rating: 4.5,
    reviewCount: 223,
    description: 'pH-balancing toner that prepares skin for better product absorption.',
    ingredients: ['Witch Hazel', 'Rose Water', 'Glycerin'],
    inStock: true
  },
  {
    id: '14',
    name: 'SPF 50 Sunscreen',
    brand: 'SunShield',
    price: 29.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Skincare',
    subcategory: 'Sunscreen',
    rating: 4.6,
    reviewCount: 312,
    description: 'Broad-spectrum SPF 50 sunscreen with lightweight formula.',
    ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E'],
    inStock: true,
    isBestseller: true
  },

  // Haircare Products
  {
    id: '15',
    name: 'Nourishing Hair Oil',
    brand: 'HairLux',
    price: 29.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Hair Oil',
    rating: 4.4,
    reviewCount: 167,
    description: 'Lightweight hair oil that nourishes and adds shine without weighing hair down.',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Vitamin E'],
    inStock: true
  },
  {
    id: '16',
    name: 'Sulfate-Free Shampoo',
    brand: 'PureHair',
    price: 24.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Shampoo',
    rating: 4.3,
    reviewCount: 234,
    description: 'Gentle sulfate-free shampoo for all hair types.',
    ingredients: ['Coconut Oil', 'Keratin', 'Biotin'],
    inStock: true
  },
  {
    id: '17',
    name: 'Deep Conditioning Treatment',
    brand: 'HairRevive',
    price: 32.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Treatments',
    rating: 4.7,
    reviewCount: 156,
    description: 'Intensive treatment for damaged and dry hair.',
    ingredients: ['Shea Butter', 'Protein Complex', 'Ceramides'],
    inStock: true,
    discount: 17
  },
  {
    id: '18',
    name: 'Volumizing Conditioner',
    brand: 'VolumePro',
    price: 26.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Conditioner',
    rating: 4.2,
    reviewCount: 189,
    description: 'Lightweight conditioner that adds volume without weighing hair down.',
    ingredients: ['Rice Protein', 'Panthenol', 'Collagen'],
    inStock: true
  },
  {
    id: '19',
    name: 'Heat Protection Spray',
    brand: 'StyleGuard',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Styling',
    rating: 4.5,
    reviewCount: 278,
    description: 'Protects hair from heat damage up to 450°F.',
    ingredients: ['Silicones', 'Vitamin E', 'UV Filters'],
    inStock: true,
    isBestseller: true
  },
  {
    id: '20',
    name: 'Repair Hair Mask',
    brand: 'RestoreHair',
    price: 35.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Hair Masks',
    rating: 4.6,
    reviewCount: 145,
    description: 'Weekly treatment mask for severely damaged hair.',
    ingredients: ['Olaplex', 'Quinoa Protein', 'Avocado Oil'],
    inStock: true,
    isNew: true
  },

  // Fragrance Products
  {
    id: '21',
    name: 'Enchanted Rose Perfume',
    brand: 'Essence',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Fragrance',
    subcategory: 'Perfume',
    rating: 4.7,
    reviewCount: 89,
    description: 'A romantic floral fragrance with notes of rose, jasmine, and vanilla.',
    inStock: true,
    isNew: true,
    discount: 20
  },
  {
    id: '22',
    name: 'Fresh Citrus Body Spray',
    brand: 'CitrusBliss',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Fragrance',
    subcategory: 'Body Spray',
    rating: 4.3,
    reviewCount: 156,
    description: 'Refreshing citrus body spray perfect for daily wear.',
    inStock: true
  },
  {
    id: '23',
    name: 'Luxury Cologne',
    brand: 'Gentleman',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Fragrance',
    subcategory: 'Perfume',
    rating: 4.8,
    reviewCount: 234,
    description: 'Sophisticated masculine fragrance with woody and spicy notes.',
    inStock: true,
    isBestseller: true,
    discount: 18
  },
  {
    id: '24',
    name: 'Vanilla Mist',
    brand: 'SweetScents',
    price: 22.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Fragrance',
    subcategory: 'Body Mist',
    rating: 4.4,
    reviewCount: 178,
    description: 'Sweet vanilla body mist with warm, comforting notes.',
    inStock: true
  },

  // Bath & Body Products
  {
    id: '25',
    name: 'Moisturizing Body Wash',
    brand: 'SoftSkin',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Bath & Body',
    subcategory: 'Body Wash',
    rating: 4.2,
    reviewCount: 267,
    description: 'Gentle moisturizing body wash with natural ingredients.',
    ingredients: ['Coconut Oil', 'Shea Butter', 'Vitamin E'],
    inStock: true
  },
  {
    id: '26',
    name: 'Luxury Body Lotion',
    brand: 'SilkTouch',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Bath & Body',
    subcategory: 'Body Lotion',
    rating: 4.6,
    reviewCount: 189,
    description: 'Rich body lotion that provides 24-hour hydration.',
    ingredients: ['Hyaluronic Acid', 'Ceramides', 'Glycerin'],
    inStock: true,
    discount: 16
  },
  {
    id: '27',
    name: 'Exfoliating Body Scrub',
    brand: 'GlowBody',
    price: 21.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Bath & Body',
    subcategory: 'Scrubs',
    rating: 4.4,
    reviewCount: 145,
    description: 'Gentle exfoliating scrub with sugar crystals and essential oils.',
    ingredients: ['Sugar Crystals', 'Jojoba Oil', 'Lavender Oil'],
    inStock: true
  },
  {
    id: '28',
    name: 'Relaxing Bath Bombs Set',
    brand: 'BathBliss',
    price: 19.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Bath & Body',
    subcategory: 'Bath Bombs',
    rating: 4.3,
    reviewCount: 234,
    description: 'Set of 6 aromatherapy bath bombs for relaxation.',
    ingredients: ['Epsom Salt', 'Essential Oils', 'Natural Colors'],
    inStock: true,
    isNew: true
  },

  // Men's Grooming Products
  {
    id: '29',
    name: 'Beard Growth Oil',
    brand: 'BeardMaster',
    price: 27.99,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Men\'s Grooming',
    subcategory: 'Beard Care',
    rating: 4.5,
    reviewCount: 178,
    description: 'Nourishing beard oil that promotes growth and softness.',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Vitamin E'],
    inStock: true,
    isBestseller: true
  },
  {
    id: '30',
    name: 'Premium Shaving Cream',
    brand: 'ShaveClub',
    price: 22.99,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Men\'s Grooming',
    subcategory: 'Shaving',
    rating: 4.4,
    reviewCount: 267,
    description: 'Rich shaving cream for a smooth, comfortable shave.',
    ingredients: ['Glycerin', 'Aloe Vera', 'Coconut Oil'],
    inStock: true
  },
  {
    id: '31',
    name: 'Men\'s Face Moisturizer',
    brand: 'ManCare',
    price: 29.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Men\'s Grooming',
    subcategory: 'Face Care',
    rating: 4.3,
    reviewCount: 156,
    description: 'Lightweight face moisturizer designed for men\'s skin.',
    ingredients: ['Hyaluronic Acid', 'Caffeine', 'Vitamin C'],
    inStock: true,
    discount: 14
  },
  {
    id: '32',
    name: 'Hair Styling Pomade',
    brand: 'StyleKing',
    price: 18.99,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Men\'s Grooming',
    subcategory: 'Hair Styling',
    rating: 4.2,
    reviewCount: 189,
    description: 'Strong hold pomade for classic and modern hairstyles.',
    ingredients: ['Beeswax', 'Lanolin', 'Essential Oils'],
    inStock: true
  }
];