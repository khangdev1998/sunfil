import Image from "next/image";

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="flex gap-[18px] items-center rounded-xl bg-white py-[25px] px-3.5 shadow-lg">
      <Image src={icon} alt="feature-icon" width={42} height={42} />
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-sm text-[#637381]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
