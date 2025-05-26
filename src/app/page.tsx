import FeaturesSection from "@/components/custom-ui/FeaturesSection";
import FilterProductsSection from "@/components/custom-ui/FillterProductsSection";
import PromoSection from "@/components/custom-ui/PromoSection";
import StoreLocator from "@/components/custom-ui/StoreLocator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HomePage() {
  return (
    <>
      <Breadcrumb className="mb-8">
        <BreadcrumbList className="sm:gap-4">
          <BreadcrumbItem>
            <BreadcrumbLink className="text-[#919EAB]" href="/">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-[#024897]">
              Sản phẩm
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PromoSection className="mb-8" />

      <FilterProductsSection />

      <FeaturesSection className="mt-[72px] mb-10" />

      <StoreLocator />
    </>
  );
}
