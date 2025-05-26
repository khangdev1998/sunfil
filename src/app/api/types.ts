export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
}

export interface PromoSectionProps {
  className?: string;
}
