"use client";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuProducts } from "./MenuProducts";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceFeatures, navLinks } from "./data";

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
              className="bg-[#0155C6] hover:bg-[#5183c4] hover:text-gray-100 transition-all h-full text-white px-4 py-[12.8px] rounded-md flex items-center space-x-2"
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
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-base font-medium hover:text-blue-500 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side - Service features */}
        <div className="flex items-center space-x-5">
          {serviceFeatures.map(({ icon, text, width, height }) => (
            <div className="flex items-center space-x-2" key={text}>
              <Image src={icon} alt={text} width={width} height={height} />
              <span className="text-base font-semibold">{text}</span>
            </div>
          ))}
        </div>
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
