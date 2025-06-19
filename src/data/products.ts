import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Makeup',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Face', 'Eyes', 'Lips', 'Nails']
  },
  {
    id: '2',
    name: 'Skincare',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Masks']
  },
  {
    id: '3',
    name: 'Haircare',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Shampoo', 'Conditioner', 'Styling', 'Treatments']
  },
  {
    id: '4',
    name: 'Fragrance',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Perfume', 'Body Spray', 'Deodorant']
  }
];

export const products: Product[] = [
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
    id: '4',
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
    id: '5',
    name: 'Nourishing Hair Oil',
    brand: 'HairLux',
    price: 29.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'Haircare',
    subcategory: 'Treatments',
    rating: 4.4,
    reviewCount: 167,
    description: 'Lightweight hair oil that nourishes and adds shine without weighing hair down.',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Vitamin E'],
    inStock: true
  },
  {
    id: '6',
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
  }
];