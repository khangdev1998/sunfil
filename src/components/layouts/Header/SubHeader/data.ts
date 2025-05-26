import { Filter, Wind, Fuel, Car, Wrench } from "lucide-react";

interface ServiceFeature {
  icon: string;
  text: string;
  width: number;
  height: number;
}

interface NavLink {
  href: string;
  text: string;
}

interface Category {
  name: string;
  icon: React.ComponentType;
  color: string;
  image: string;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: "/images/clock.svg",
    text: "Hỗ trợ 24/7",
    width: 20,
    height: 20,
  },
  {
    icon: "/images/hand-money.svg",
    text: "Miễn Phí Vận Chuyển",
    width: 24,
    height: 24,
  },
  {
    icon: "/images/ship.svg",
    text: "Giao Hàng Nhanh 2h",
    width: 24,
    height: 24,
  },
  {
    icon: "/images/ship.svg",
    text: "30 Ngày Đổi Trả",
    width: 20,
    height: 20,
  },
];

export const navLinks: NavLink[] = [
  { href: "#", text: "Về Chúng Tôi" },
  { href: "#", text: "Bài Viết" },
  { href: "#", text: "Catalog" },
  { href: "#", text: "Liên Hệ" },
];

export const categories : Category[] =  [
  {
    name: "Bộ Lọc Dầu",
    icon: Filter,
    color: "bg-blue-100 text-blue-600",
    image: "/images/category-1.png",
  },
  {
    name: "Bộ Lọc Không Khí",
    icon: Wind,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-2.png",
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    icon: Fuel,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-3.png",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    icon: Car,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-4.png",
  },
  {
    name: "Bộ Lọc Không Khí",
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
    image: "/images/category-5.png",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    icon: Filter,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-6.png",
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    icon: Filter,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-7.png",
  },
  {
    name: "Bộ Lọc Không Khí",
    icon: Filter,
    color: "bg-gray-100 text-gray-600",
    image: "/images/category-8.png",
  },
];
