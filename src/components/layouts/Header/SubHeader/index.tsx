"use client";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MenuProducts from "./MenuProducts";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SubHeader() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container flex items-center justify-between h-[50px] pb-4 relative z-30">
        {/* Left side - Category menu and navigation */}
        <div className="flex items-center space-x-6">
          {/* Category dropdown with hover functionality */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              variant="ghost"
              className="bg-[#0155C6] hover:bg-[#5183c4]! hover:text-gray-100 transition-all h-full text-white px-4 py-[12.8px] rounded-md flex items-center space-x-2"
            >
              <Menu className="size-5" />
              <span className="text-base font-bold">Danh Mục Sản Phẩm</span>
              <ChevronDown className="size-4" />
            </Button>

            {/* Positioned menu */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full"
                >
                  <MenuProducts />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <a
              href="#"
              className="text-base font-medium hover:text-blue-500 transition-colors"
            >
              Về Chúng Tôi
            </a>
            <a
              href="#"
              className="text-base font-medium hover:text-blue-500 transition-colors"
            >
              Bài Viết
            </a>
            <a
              href="#"
              className="text-base font-medium hover:text-blue-500 transition-colors"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-base font-medium hover:text-blue-500 transition-colors"
            >
              Liên Hệ
            </a>
          </nav>
        </div>

        {/* Right side - Service features */}
        <div className="lg:flex items-center space-x-5">
          {/* 24/7 Support */}
          <div className="flex items-center space-x-2">
            <Image src="/images/clock.svg" alt="clock" width={20} height={20} />
            <span className="text-base font-semibold">Hỗ trợ 24/7</span>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/hand-money.svg"
              alt="hand-money"
              width={24}
              height={24}
            />
            <span className="text-base font-semibold">Miễn Phí Vận Chuyển</span>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-center space-x-2">
            <Image src="/images/ship.svg" alt=" ship" width={24} height={24} />
            <span className="text-base font-semibold">Giao Hàng Nhanh 2h</span>
          </div>

          {/* 30 Days Return */}
          <div className="flex items-center space-x-2">
            <Image src="/images/ship.svg" alt=" ship" width={20} height={20} />
            <span className="text-base font-semibold">30 Ngày Đổi Trả</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-blue-700"
        >
          <Menu className="size-5" />
        </Button>
      </div>

      {/* Animated Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-20 top-0"
          />
        )}
      </AnimatePresence>
    </>
  );
}
