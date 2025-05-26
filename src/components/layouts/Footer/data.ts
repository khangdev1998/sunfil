export interface CompanyInfoItem {
  label: string;
  value: string;
}

export interface SitemapItem {
  title: string;
  href?: string;
}

export interface LegalItem {
  label: string;
  href?: string;
  highlight?: boolean;
}

export interface AppLink {
  href: string;
  img: string;
  alt: string;
}

export const COMPANY_INFO: CompanyInfoItem[] = [
  { label: "Tax code:", value: "0305094228" },
  { label: "Address:", value: "15 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Vietnam." },
  { label: "Phone number:", value: "02837607607" },
  { label: "Opening hour:", value: "09:00 - 22:00 from Mon - Fri" },
];

export const SITEMAP: SitemapItem[] = [
  { title: "About", href: "/about" },
  { title: "Article", href: "/articles" },
  { title: "Cart", href: "/cart" },
  { title: "Contact", href: "/contact" },
];

export const LEGAL: LegalItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy", highlight: true },
  { label: "Cookie policy", href: "/cookie-policy" },
  { label: "Delivery policy", href: "/delivery-policy" },
  { label: "FAQs", href: "/faqs" },
];

export const APPS: AppLink[] = [
  {
    href: "https://play.google.com/store/games",
    img: "/images/button-app-store.png",
    alt: "Google Play Store",
  },
  {
    href: "https://www.apple.com/vn/app-store/",
    img: "/images/button-app-store-2.png",
    alt: "Apple App Store",
  },
];