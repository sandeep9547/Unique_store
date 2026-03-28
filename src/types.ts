export type Category = 'bakery' | 'toys' | 'combos';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  subCategory: string;
  image: string;
  rating: number;
  reviews: number;
  isBestseller?: boolean;
  ageGroup?: string;
  benefits?: string[];
  perfectFor?: string[];
}

export interface Combo {
  id: string;
  cakeId: string;
  toyId: string;
  discountedPrice: number;
}
