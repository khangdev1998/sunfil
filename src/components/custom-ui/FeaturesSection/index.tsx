import { cn } from "@/lib/utils";
import FeatureCard from "./FeatureCard";

const FeaturesSection = ({ className }: { className?: string }) => {
  const data = [
    {
      id: 1,
      title: "Miễn phí vận chuyển",
      description: "Với hoá đơn từ 1 triệu",
      icon: "/images/feature-1.svg",
    },
    {
      id: 2,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
      icon: "/images/feature-2.svg",
    },
    {
      id: 3,
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM",
      icon: "/images/feature-3.svg",
    },
    {
      id: 4,
      title: "30 ngày đổi trả",
      description:
        "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyểnt",
      icon: "/images/feature-4.svg",
    },
  ];

  return (
    <div className={cn("grid grid-cols-4 gap-8", className)}>
      {data.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
