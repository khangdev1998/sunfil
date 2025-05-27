"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { products } from "@/app/api/data";
import { CartSheet } from "./CartSheet";
import { cn } from "@/lib/utils";

export function MainHeader() {
  const suggestions = [
    "Hoàn toàn freeship qua các ứng dụng",
    "Bộ lọc chất lượng cao chuẩn quốc tế",
    "Hỗ trợ kỹ thuật 24/7, tư vấn tận tình",
  ];

  const [text] = useTypewriter({
    words: suggestions,
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const placeholderText =
    !focused && !search ? `${text}|` : "Tìm kiếm sản phẩm";

  return (
    <header>
      <div className="container py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="logo-web">
            <Image src="/images/logo.svg" alt="Logo" width={278} height={144} />
          </Link>

          {/* Search Bar */}
          <div
            className={cn(
              "flex flex-1 max-w-[738px] h-16 items-center gap-6 border-2 border-blue-500 rounded-full py-2 pl-5 pr-2 transition-all duration-300",
              focused &&
                "shadow-[0_15px_30px_-5px_rgba(147,197,253,0.5),0_10px_20px_-5px_rgba(147,197,253,0.3)]"
            )}
          >
            <input
              className="size-full outline-none placeholder:font-normal text-base"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={placeholderText}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <Image
              src="/images/camera.svg"
              alt="Camera"
              width={25}
              height={23}
            />
            <Button className="bg-blue-500 h-full hover:bg-blue-600 rounded-full p-3 px-[25px]">
              <Image
                src="/images/glass.svg"
                alt="Search"
                width={25}
                height={25}
              />
            </Button>
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
