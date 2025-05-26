"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sectionsData } from "./data";
import { cn } from "@/lib/utils";

export function FilterSidebar() {
  const [sections, setSections] = useState(sectionsData);

  const toggleSection = (index: number) => {
    setSections((prev) =>
      prev.map((sec, i) =>
        i === index ? { ...sec, isOpen: !sec.isOpen } : sec
      )
    );
  };

  const toggleOption = (sectionIndex: number, optionId: string) => {
    setSections((prev) =>
      prev.map((sec, i) => {
        if (i !== sectionIndex) return sec;

        // riêng mục "Khoảng giá" => radio-like
        if (sec.title === "Khoảng giá") {
          return {
            ...sec,
            options: sec.options.map((opt) => {
              if (opt.id === optionId) {
                // nếu đang checked thì uncheck, ngược lại check
                return { ...opt, checked: !opt.checked };
              }
              return { ...opt, checked: false };
            }),
          };
        }

        // các mục khác => checkbox-like
        return {
          ...sec,
          options: sec.options.map((opt) =>
            opt.id === optionId ? { ...opt, checked: !opt.checked } : opt
          ),
        };
      })
    );
  };

  return (
    <div className="bg-white rounded-lg h-fit">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Image
            src="/images/filter-icon.svg"
            alt="filter-icon"
            width={32}
            height={32}
          />
          <h2 className="text-2xl font-bold text-[#0373F3]">Bộ Lọc</h2>
        </div>
      </div>

      {/* Sections */}
      <div className="p-4 space-y-4">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <Button
              variant="ghost"
              className="w-full justify-between !p-0 h-auto font-medium text-gray-900 hover:bg-transparent!"
              onClick={() => toggleSection(idx)}
            >
              <span className="font-semibold text-xl">{section.title}</span>
              {section.isOpen ? (
                <ChevronUp className="size-5 text-gray-500" />
              ) : (
                <ChevronDown className="size-5 text-gray-500" />
              )}
            </Button>

            {section.isOpen &&
              // nếu là section "Khoảng giá" thì render list button
              (section.title === "Khoảng giá" ? (
                <div className="mt-3 flex flex-col space-y-2">
                  {section.options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className={cn(
                        "w-full rounded-md px-4 py-2 text-sm justify-center bg-white! duration-0",
                        option.checked
                          ? "bg-blue-500! text-white hover:text-none"
                          : "hover:bg-gray-50!"
                      )}
                      onClick={() => toggleOption(idx, option.id)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              ) : (
                // các section khác vẫn giữ checkbox
                <div className="mt-3 space-y-3">
                  {section.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={option.id}
                        checked={option.checked || false}
                        onCheckedChange={() => toggleOption(idx, option.id)}
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm font-medium cursor-pointer flex-1"
                      >
                        {option.label}
                        {option.count > 0 && (
                          <span className="text-[#637381] ml-1">
                            ({option.count})
                          </span>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
