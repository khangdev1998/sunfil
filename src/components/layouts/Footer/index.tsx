import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative">
      <Image
        className="absolute inset-0 size-full bg-cover bg-no-repeat bg-center -z-10 opacity-35"
        src="/images/footer-bg.jpg"
        alt="this-image"
        layout="fill"
      />
      <div className="container py-24">
        <div className="grid grid-cols-[4fr_1fr_1fr_1.5fr] gap-[100px]">
          {/* Company Information */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-[#013065] mb-5 uppercase">
              Viet Hung Auto Production Trading Joint Stock Company
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span>Tax code:</span>{" "}
                <b className="font-semibold">0305094228</b>
              </p>
              <p>
                <span>Address:</span>
                <b className="font-semibold">
                  15 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </b>
              </p>
              <p>
                <span>Phone number:</span>{" "}
                <a
                  href="tel: 0283 760 7607"
                  className="underline font-semibold hover:text-blue-600 transition-colors"
                >
                  0283 760 7607
                </a>
              </p>
              <p>
                <span>Opening hour:</span>
                <b className="font-semibold"> 09:00 - 22:00 from Mon - Fri</b>
              </p>
            </div>

            {/* Certification */}
            <a
              href="https://moit.gov.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/license.svg"
                alt="certification badge"
                width={200}
                height={75}
              />
            </a>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Sitemap
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-semibold hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-0.5 bg-gray-400 mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  Cookie policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  Delivery policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#637381] hover:text-blue-600 transition-colors inline-block"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-[#013065] mb-8">
              Download App
            </h3>
            <div className="space-y-3">
              {/* Google Play Store */}
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/button-app-store.png"
                  alt="certification badge"
                  width={230}
                  height={64}
                />
              </a>

              {/* Apple App Store */}
              <a
                href="https://www.apple.com/vn/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/button-app-store-2.png"
                  alt="certification badge"
                  width={230}
                  height={64}
                />
              </a>
            </div>

            {/* Language Selector */}
            <button className="flex items-center mt-8 ms-auto">
              <Image
                src="/images/flag-vn.svg"
                alt="Vietnamese Flag"
                width={36}
                height={36}
                className="inline-block"
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
