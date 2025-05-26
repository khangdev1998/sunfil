"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@/app/api/types";

interface CartSheetProps {
  products: Product[];
}

export function CartSheet({ products }: CartSheetProps) {
  const displayedProducts = products.slice(0, 14);
  const totalAmount = displayedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <TooltipProvider>
      <Tooltip>
        <Sheet>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <button className="relative flex items-center gap-2 hover:text-blue-600">
                <Image
                  src="/images/cart.svg"
                  alt="Giỏ hàng"
                  width={28}
                  height={28}
                />
                {displayedProducts.length > 0 && (
                  <span className="count absolute -top-[15px] -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {displayedProducts.length}
                  </span>
                )}
              </button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>Nhấn để xem giỏ hàng</TooltipContent>

          <SheetContent side="right" className="w-full max-w-md p-0">
            <SheetHeader className="border-b">
              <div className="flex items-center justify-between p-z4">
                <SheetTitle className="text-lg font-semibold">
                  Giỏ hàng của bạn
                </SheetTitle>
              </div>
            </SheetHeader>

            <div className="flex flex-col h-[calc(100vh-75px)]">
              {displayedProducts.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                  <p className="text-gray-500">
                    Chưa có sản phẩm nào trong giỏ hàng.
                  </p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {displayedProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="flex flex-row items-center gap-4 p-4"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="rounded"
                      />
                      <CardContent className="flex-1 p-0">
                        <p className="font-medium text-base line-clamp-2">
                          {product.name}
                        </p>
                        <p className="mt-1 text-blue-600 font-semibold">
                          {product.price.toLocaleString()}đ
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="p-4 mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Tổng cộng:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {totalAmount.toLocaleString()}đ
                  </span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-5.5!">
                  Thanh toán ngay
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Tooltip>
    </TooltipProvider>
  );
}
