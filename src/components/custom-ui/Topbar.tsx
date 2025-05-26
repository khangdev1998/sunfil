import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center gap-4 sticky top-0 z-50">
      <div className="w-full p-2 bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] text-white">
        <div className="container flex justify-between items-center">
          <div className="flex gap-2">
            <Image
              src="/images/subtract.svg"
              alt="this-icon"
              width={14}
              height={14}
            />
            <span className="text-xs font-normal">
              Nhập mã <b className="text-[#FACA4A] font-bold text-sm">NEWBIE</b>{" "}
              giảm ngay 10% cho lần đầu mua hàng.
            </span>
          </div>

          <div className="flex gap-6">
            <div className="flex items-center">
              <Image
                className="mr-2"
                src="/images/call.svg"
                alt="phone-icon"
                width={11}
                height={11}
              />
              <div>
                <span className="text-xs">Hotline:</span>{" "}
                <a
                  href="tel:0283760760"
                  className="text-[#FACA4A] text-sm inline-block hover:text-yellow-200 transition-colors duration-300"
                >
                  0283 760 760
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                className="mr-2"
                src="/images/box.svg"
                alt="phone-icon"
                width={11}
                height={11}
              />
              <div>
                <a href="#!" className="text-xs">
                  Tải ứng dụng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
