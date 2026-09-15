export interface Product {
  id: string;
  name: string;
  category: 'Audio' | 'Earbuds' | 'Speakers' | 'Chargers' | 'Accessories' | 'Smart Tech' | 'Power' | 'Wearables';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'BEST SELLER' | 'TRENDING' | 'NEW ARRIVAL' | 'HOT DEAL' | 'LIMITED';
  image: string;
  galleryImages: string[];
  description: string;
  shortDescription: string;
  features: string[];
  specs: { [key: string]: string };
  colors: { name: string; hex: string }[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
  accentColor: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export type PageView = 'home' | 'shop' | 'categories' | 'deals' | 'about' | 'contact';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}
