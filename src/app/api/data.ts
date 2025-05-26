import type { Product } from "./types";

const rawProducts = [
  {
    name: "Lọc dầu động cơ HighFlow Pro chính hãng",
    price: 450000,
    originalPrice: 500000,
    image: "/images/product-1.png",
  },
  {
    name: "Má phanh trước CeramicBrake X5 tiêu chuẩn Nhật",
    price: 1200000,
    originalPrice: 1500000,
    image: "/images/product-2.jpg",
  },
  {
    name: "Bugi Iridium NGK IFR6D-11 siêu bền chính hãng",
    price: 250000,
    originalPrice: 300000,
    image: "/images/product-3.png",
  },
  {
    name: "Ắc quy khô Atlas Power12V tuổi thọ cao",
    price: 2100000,
    originalPrice: 2500000,
    image: "/images/product-4.png",
  },
  {
    name: "Dầu hộp số ATF Dexron VI cao cấp",
    price: 180000,
    originalPrice: 220000,
    image: "/images/product-5.png",
  },
  {
    name: "Đèn pha LED UltraBright 6000K ánh sáng chuẩn",
    price: 850000,
    originalPrice: 1100000,
    image: "/images/product-6.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  // ...lặp lại sản phẩm vì đây chỉ là fake data. Trong trường hợp thực tế, danh sách sản phẩm sẽ được lấy từ máy chủ.
  {
    name: "Lọc dầu động cơ HighFlow Pro chính hãng",
    price: 450000,
    originalPrice: 500000,
    image: "/images/product-1.png",
  },
  {
    name: "Má phanh trước CeramicBrake X5 tiêu chuẩn Nhật",
    price: 1200000,
    originalPrice: 1500000,
    image: "/images/product-2.jpg",
  },
  {
    name: "Bugi Iridium NGK IFR6D-11 siêu bền chính hãng",
    price: 250000,
    originalPrice: 300000,
    image: "/images/product-3.png",
  },
  {
    name: "Ắc quy khô Atlas Power12V tuổi thọ cao",
    price: 2100000,
    originalPrice: 2500000,
    image: "/images/product-4.png",
  },
  {
    name: "Dầu hộp số ATF Dexron VI cao cấp",
    price: 180000,
    originalPrice: 220000,
    image: "/images/product-5.png",
  },
  {
    name: "Đèn pha LED UltraBright 6000K ánh sáng chuẩn",
    price: 850000,
    originalPrice: 1100000,
    image: "/images/product-6.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
  {
    name: "Bộ lọc gió cabin CleanAir Max chính hãng",
    price: 320000,
    originalPrice: 360000,
    image: "/images/product-7.png",
  },
] as const;

// 2. Export mảng products đã có đủ id và discount
export const products: Product[] = rawProducts.map((item, index) => {
  const discount = Math.round(
    ((item.originalPrice - item.price) / item.originalPrice) * 100
  );
  return {
    id: String(index + 1),
    name: item.name,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.image,
    discount, // % giảm giá nguyên
  };
});
