import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { COMPANY_INFO, SITEMAP, LEGAL, APPS } from "./data";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background */}
      <Image
        className="absolute inset-0 size-full bg-cover bg-no-repeat bg-center -z-10 opacity-35"
        src="/images/footer-bg.jpg"
        alt="this-image"
        layout="fill"
      />

      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr_1.5fr] gap-[100px]">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#013065] mb-5 uppercase">
              Viet Hung Auto Production Trading Joint Stock Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {COMPANY_INFO.map(({ label, value }) => (
                <li key={label} className="flex">
                  <span>{label}&nbsp;</span>
                  {label === "Phone number:" ? (
                    <b className="font-semibold">
                      <Link
                        href={`tel:${value.replace(/[^0-9]/g, "")}`}
                        className="underline font-semibold hover:text-blue-600 transition-colors"
                      >
                        {value}
                      </Link>
                    </b>
                  ) : (
                    <b className="font-semibold">{value}</b>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="https://moit.gov.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/license.svg"
                alt="Certification badge"
                width={200}
                height={75}
              />
            </Link>
          </div>

          {/* Sitemap */}
          <nav>
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Sitemap
            </h3>
            <ul className="space-y-3 text-[#637381]">
              {SITEMAP.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href ?? "#"}
                    className="hover:text-blue-600 transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Legal
            </h3>
            <ul className="space-y-3 text-[#637381]">
              {LEGAL.map(({ label, highlight }) => (
                <li key={label}>
                  <Link
                    href="#"
                    className={clsx(
                      "flex items-center hover:text-blue-600 transition-colors",
                      highlight && "font-semibold text-[#1c252e]"
                    )}
                  >
                    {highlight && (
                      <span className="w-2.5 h-0.5 bg-gray-500 mr-2"></span>
                    )}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download App & Language */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Download App
            </h3>
            <div className="space-y-3">
              {APPS.map(({ href, img, alt }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={img}
                    alt={alt}
                    width={230}
                    height={64}
                    unoptimized
                  />
                </Link>
              ))}
            </div>

            <button
              className="flex items-center mt-8 self-end"
              aria-label="Select language"
            >
              <Image
                src="/images/flag-vn.svg"
                alt="Vietnamese Flag"
                width={36}
                height={36}
              />
              <span className="text-xl font-medium uppercase ml-2 mr-3">
                Vi
              </span>
              <ChevronDown className="size-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
