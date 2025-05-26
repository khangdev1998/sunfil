import { cn } from "@/lib/utils";
import Image from "next/image";

const StoreLocator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-8 relative w-screen left-1/2 -translate-x-1/2 bg-[#E6F1FF] py-10",
        className
      )}
    >
      <div className="container flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/images/map.svg"
            alt="locator-icon"
            width={48}
            height={48}
          />
          <span className="text-2xl font-medium">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </span>
        </div>
        <button className="text-[#025FCA] text-2xl font-semibold flex items-center gap-3 bg-white shadow-lg rounded-full w-full max-w-[204px] h-[56px] py-4 px-6 hover:bg-[#F4F6F8] transition-colors duration-300">
          Xem ngay
          <Image
            src="/images/arrow-right.svg"
            alt="arrow-right-icon"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default StoreLocator;
