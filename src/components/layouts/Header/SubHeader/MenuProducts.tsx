import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/app/api/data";
import { categories } from "./data";
import ProductCard from "@/components/custom-ui/ProductCard";

export function MenuProducts() {
  const topProducts = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i,
      name: "Bộ lọc gió",
      icon: "/placeholder.svg?height=60&width=60",
    }));

  return (
    <div className="flex bg-gray-50 border shadow-lg rounded-b-lg">
      {/* Sidebar */}
      <div className="w-64 bg-white">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-3 justify-between py-4 px-3 hover:bg-gray-50 hover:text-[#025FCA] rounded-lg cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={40}
                  height={40}
                />
                <span className="text-base font-medium group-hover:text-[#025FCA]">
                  {category.name}
                </span>
              </div>
              <ChevronRight className="size-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto w-[1200px] max-h-[594px]">
        {/* Top Products Grid */}
        <div className="grid grid-cols-3 gap-4 border-b pb-7 mb-6">
          {topProducts.map((product) => (
            <Card
              key={product.id}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer border-transparent"
            >
              <CardContent className="flex items-center gap-3 p-0">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Filter className="w-6 h-6 text-gray-600" />
                </div>
                <span className="font-medium text-gray-800">
                  {product.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Best Selling Products Section */}
        <div className="flex gap-4 items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Sản Phẩm Bán Chạy</h2>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-colors font-medium flex items-center gap-1"
          >
            Xem tất cả
            <ChevronRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
