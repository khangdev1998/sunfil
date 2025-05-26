import { memo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../../app/api/types";
import { formatCurrency } from "../../app/api/utils";

interface ProductCardProps {
  product: Product;
  useLabel?: boolean;
}

const ProductCard = memo(({ product, useLabel }: ProductCardProps) => {
  return (
    <Card className="bg-white rounded-lg shadow-xs h-full py-0">
      <CardContent className="pb-4 px-4 pt-2">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-cover mb-4 rounded-lg hover:scale-105 transition-all duration-300 hover:opacity-80"
          loading="lazy"
        />

        {useLabel && (
          <div className="label flex items-center rounded-full bg-gradient-to-br from-[#FFD666] to-[#FFAB00] text-[#7a0916] text-sm font-semibold px-3 py-1 w-fit">
            <Image
              src="images/fire.svg"
              alt="Discount"
              width={12}
              height={12}
              className="inline-block mr-2"
            />
            Giá cực sốc
          </div>
        )}

        <h3 className="text-base font-semibold my-[15px] line-clamp-2">
          {product.name}
        </h3>

        <div className="mb-3">
          <div className="text-xl font-semibold text-[#B71D18]">
            {formatCurrency(product.price)}
          </div>
          <div className="flex items-center gap-[10px] text-sm mt-2">
            <span className="line-through text-[#919EAB]">
              {formatCurrency(product.originalPrice)}
            </span>
            <span className="text-[#B71D18] text-xs font-medium">
              -{product.discount}%
            </span>
          </div>
        </div>

        <Button className="w-full bg-[#E6F1FF] hover:bg-blue-500 text-[#025FCA] hover:text-white font-semibold text-sm py-2">
          Mua ngay
        </Button>
      </CardContent>
    </Card>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;

