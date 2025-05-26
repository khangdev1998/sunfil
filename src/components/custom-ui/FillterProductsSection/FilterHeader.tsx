"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function FilterHeader() {
  const filterOptions = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left side - Product list title */}
      <h1 className="text-xl font-semibold ">Danh sách sản phẩm</h1>

      {/* Right side - Filter and sort options */}
      <div className="flex items-center gap-6">
        {/* Sort by label */}
        <span className="text-base font-medium">Sắp xếp theo</span>

        {/* Filter options */}
        <div className="flex items-center gap-3">
          {filterOptions.map((option) => {
            const isActive = option === activeOption;
            return (
              <Button
                key={option}
                variant="outline"
                size="sm"
                onClick={() => setActiveOption(option)}
                className={cn(
                  "relative flex items-center justify-center overflow-visible px-4 py-[19px] border-transparent! text-sm font-semibold transition-all duration-75 bg-white!",
                  isActive && "border-blue-500 text-blue-500 hover:text-none"
                )}
              >
                {isActive && (
                  <Image
                    className="absolute top-[-2px] right-[-1.1px]"
                    src="/images/triangle-checked.svg"
                    alt="Checked"
                    width={25}
                    height={25}
                  />
                )}
                {/* Label text */}
                <span className={cn(isActive ? "z-10" : "")}>{option}</span>
              </Button>
            );
          })}

          {/* Price dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-gray-900 text-sm p-0 h-auto font-normal"
              >
                Giá: Thấp <ArrowRight /> Cao
                <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuRadioGroup value="low-to-high">
                <DropdownMenuRadioItem value="low-to-high">
                  Giá: Thấp <ArrowRight /> Cao
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high-to-low">
                  Giá: Cao <ArrowRight /> Thấp
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
