"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-auto text-white font-sans">
      {/* Top Red Bar */}
      <div className="bg-[#b31f24] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-bold uppercase tracking-wide">
          <Link href="/" className="hover:text-yellow-200 transition-colors">
            Trang chủ
          </Link>
          <span className="text-white/60 font-normal">|</span>
          <Link href="/rss" className="hover:text-yellow-200 transition-colors">
            RSS
          </Link>
          <span className="text-white/60 font-normal">|</span>
          <Link href="/so-do-cong-ttdt" className="hover:text-yellow-200 transition-colors">
            Sơ đồ cổng TTĐT
          </Link>
          <span className="text-white/60 font-normal">|</span>
          <Link href="/lien-he" className="hover:text-yellow-200 transition-colors">
            Liên hệ
          </Link>
        </div>
      </div>

      {/* Main Navy Content */}
      <div className="relative bg-[#213063] text-slate-100 pt-7 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Wave Pattern at Bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q10 0 20 10 T40 10 M0 15 Q10 5 20 15 T40 15 M0 20 Q10 10 20 20 T40 20' fill='none' stroke='%23ffffff' stroke-width='1.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: QR Code */}
            <div className="md:col-span-3 lg:col-span-2 flex justify-center md:justify-start">
              <div className="bg-white p-2.5 rounded shadow-md inline-block">
                <Image
                  src="/qr-apag.png"
                  alt="QR Code APAG"
                  width={140}
                  height={140}
                  className="w-32 h-32 md:w-36 md:h-36 object-contain"
                  priority
                />
              </div>
            </div>

            {/* Middle: Headquarters Info */}
            <div className="md:col-span-4 lg:col-span-5 text-xs sm:text-[13px] leading-relaxed space-y-2">
              <h3 className="font-bold text-sm sm:text-[15px] uppercase text-white tracking-wide">
                HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG.
              </h3>
              <p>
                Website:{" "}
                <a
                  href="https://www.apag.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium text-white"
                >
                  WWW.APAG.EDU.VN
                </a>
              </p>
              <p>
                Trụ sở chính: số 77 đường Nguyễn Chí Thanh, phường Giảng Võ, thành phố Hà Nội.
              </p>
              <p>
                Điện thoại: (024) 38343223. Fax: (024) 38358943
              </p>

              <div className="pt-2">
                <p className="font-bold text-white">Các cơ sở</p>
                <p>- Cơ sở số 36 đường Xuân La, phường Xuân Đỉnh, thành phố Hà Nội</p>
                <p>- Cơ sở số 371 đường Nguyễn Hoàng Tôn, phường Xuân Đỉnh, thành phố Hà Nội</p>
              </div>
            </div>

            {/* Right: Branch Campuses */}
            <div className="md:col-span-5 lg:col-span-5 text-xs sm:text-[13px] leading-relaxed space-y-3.5">
              <div>
                <h4 className="font-bold text-white text-xs sm:text-[13.5px]">
                  Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh
                </h4>
                <p>Địa chỉ: số 10 đường 3 Tháng 2, phường Hòa Hưng, thành phố Hồ Chí Minh</p>
                <p>- Cơ sở số 181 đường Lê Đức Thọ, phường Gò Vấp, thành phố Hồ Chí Minh</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs sm:text-[13.5px]">
                  Phân hiệu Học viện Hành chính và Quản trị công tại thành phố Đà Nẵng
                </h4>
                <p>Địa chỉ: số 749 đường Trần Hưng Đạo, phường Điện Bàn Đông, thành phố Đà Nẵng</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs sm:text-[13.5px]">
                  Phân hiệu Học viện Hành chính và Quản trị công tại tỉnh Đắk Lắk
                </h4>
                <p>Địa chỉ: số 02 đường Trương Quang Tuân, phường Tân Lập, tỉnh Đắk Lắk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="absolute right-4 sm:right-6 bottom-4 z-20 w-8 h-8 md:w-9 md:h-9 bg-[#b31f24] hover:bg-[#cf2329] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
