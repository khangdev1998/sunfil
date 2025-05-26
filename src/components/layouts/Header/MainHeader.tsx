"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/app/api/data";
import { CartSheet } from "./CartSheet";

export function MainHeader() {
  const suggestions = [
    "Hoàn toàn freeship qua các ứng dụng",
    "Bộ lọc chất lượng cao chuẩn quốc tế",
    "Hỗ trợ kỹ thuật 24/7, tư vấn tận tình",
  ];

  const [text] = useTypewriter({
    words: suggestions,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const placeholderText = !focused && !search ? `${text}|` : "";

  return (
    <header>
      <div className="container py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="logo-web">
            <Image src="/images/logo.svg" alt="Logo" width={278} height={144} />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-[715px]">
            <div className="relative flex items-center">
              <div className="relative flex-1">
                <Input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder={placeholderText || "Tìm kiếm sản phẩm"}
                  className="w-full h-12 pl-4 pr-12 rounded-l-full border-2 border-[#0373F3] bg-transparent! text-gray-600 placeholder:text-[#919EAB]
                  focus:border-blue-400 focus:ring-blue-100 focus:ring-[3px]     focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
                  <Image
                    src="/images/camera.svg"
                    alt="Camera"
                    width={22}
                    height={22}
                  />
                </button>
              </div>
              <Button className="w-[76px] h-full flex items-center justify-center rounded-r-full bg-[#0373F3] hover:bg-blue-700 border-2 border-blue-600">
                <Image
                  src="/images/glass.svg"
                  alt="Search"
                  width={25}
                  height={25}
                />
              </Button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            {/* Language Selector */}
            <button className="flex items-center gap-3 hover:text-blue-700">
              <Image
                src="/images/flag-vn.svg"
                alt="Vietnamese Flag"
                width={36}
                height={36}
              />
              <span className="text-base font-medium">VI</span>
            </button>

            {/* Shopping Cart */}
            <CartSheet products={products} />

            {/* User Account */}
            <button className="flex items-center gap-3 hover:text-blue-700">
              <Image src="/images/user.svg" alt="User" width={30} height={30} />
              <span className="text-base font-medium">Tài khoản</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
