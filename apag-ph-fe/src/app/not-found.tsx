import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootNotFound() {
  const navItems = [
    { title: "TRANG CHỦ", href: "/" },
    { title: "GIỚI THIỆU", href: "/gioi-thieu" },
    { title: "ĐÀO TẠO, BỒI DƯỠNG", href: "/dao-tao&boi-duong" },
    { title: "NGHIÊN CỨU KHOA HỌC", href: "/nghien-cuu-khoa-hoc" },
    { title: "HỢP TÁC QUỐC TẾ", href: "/hop-tac-quoc-te" },
    { title: "ĐẢM BẢO CHẤT LƯỢNG", href: "/dam-bao-chat-luong" },
    { title: "HỌC LIỆU", href: "/hoc-lieu" },
    { title: "TIN TỨC", href: "/tin-tuc" },
    { title: "LIÊN HỆ", href: "/lien-he" },
  ];

  const quickLinks = [
    {
      title: "Trang chủ",
      href: "/",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      desc: "Trang thông tin chính",
    },
    {
      title: "Giới thiệu",
      href: "/gioi-thieu",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      desc: "Cơ cấu & Sứ mệnh",
    },
    {
      title: "Đào tạo, Bồi dưỡng",
      href: "/dao-tao&boi-duong",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      desc: "Chương trình đào tạo",
    },
    {
      title: "Nghiên cứu khoa học",
      href: "/nghien-cuu-khoa-hoc",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      desc: "Đề tài & Tạp chí khoa học",
    },
    {
      title: "Tin tức & Sự kiện",
      href: "/tin-tuc",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      desc: "Thông báo & Sự kiện mới",
    },
    {
      title: "Liên hệ",
      href: "/lien-he",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      desc: "Hỗ trợ & Thông tin liên hệ",
    },
  ];

  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased text-[#1E2A5E]">
        {/* ── Official APAG Banner with Red & Blue Curved Ribbons ── */}
        <div className="relative w-full bg-white overflow-hidden select-none border-b border-gray-100 min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[145px] flex items-center justify-center">
          {/* Exact Red & Navy Curved Ribbons Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1600 220"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Left Side Two-Tier Curved Swoosh */}
            <path
              d="M 0,70 C 130,120 260,175 440,220 L 0,220 Z"
              fill="#DA251C"
            />
            <path
              d="M 0,135 C 95,165 190,195 300,220 L 0,220 Z"
              fill="#1E2A5E"
            />

            {/* Right Side Two-Tier Curved Swoosh */}
            <path
              d="M 980,220 C 1140,170 1290,75 1410,0 L 1600,0 L 1600,220 Z"
              fill="#DA251C"
            />
            <path
              d="M 1110,220 C 1250,175 1390,85 1510,0 L 1600,0 L 1600,220 Z"
              fill="#1E2A5E"
            />
          </svg>

          {/* Top-right toolbar */}
          <div className="absolute top-1.5 right-2 sm:top-2 sm:right-4 z-20 flex items-center gap-1">
            <Link
              href="/"
              className="bg-[#DA251C] hover:bg-[#b81e15] text-white text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[2px] transition-colors shadow-xs leading-none"
            >
              <span>ENGLISH</span>
            </Link>
            <Link
              href="/?search=open"
              aria-label="Search"
              className="bg-[#DA251C] hover:bg-[#b81e15] text-white w-6 h-6 sm:w-6.5 sm:h-6.5 flex items-center justify-center rounded-[2px] transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>
            <button
              type="button"
              aria-label="Login"
              className="bg-[#1E2A5E] hover:bg-[#161f45] text-white w-6 h-6 sm:w-6.5 sm:h-6.5 flex items-center justify-center rounded-[2px] transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </button>
          </div>

          {/* Exact APAG Banner Graphic Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-center py-2 sm:py-3">
            <Link href="/" aria-label="Trang chủ APAG" className="block relative w-full group">
              <Image
                src="/apag_banner.png"
                alt="Học viện Hành chính và Quản trị công - APAG"
                width={1639}
                height={323}
                priority
                className="w-full h-auto max-h-[80px] sm:max-h-[105px] md:max-h-[125px] lg:max-h-[140px] object-contain mx-auto block group-hover:opacity-95 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* ── Main Navigation Bar ── */}
        <header className="w-full bg-white border-b border-gray-200 shadow-xs relative z-20">
          <nav className="hidden lg:flex items-stretch justify-center" aria-label="Main navigation">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex items-center justify-center text-center px-3.5 xl:px-5 py-3.5",
                  "text-xs xl:text-sm font-extrabold uppercase tracking-wider leading-tight",
                  "transition-colors duration-150 border-b-2",
                  "min-h-[54px] whitespace-pre-line",
                  idx === 0
                    ? "text-[#DA251C] border-[#DA251C]"
                    : "text-[#1E2A5E] border-transparent hover:text-[#DA251C] hover:border-[#DA251C]",
                ].join(" ")}
              >
                {idx === 0 && (
                  <svg className="w-4 h-4 inline-block mr-1 mb-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                )}
                {item.title}
              </Link>
            ))}
          </nav>
        </header>

        {/* ── 404 Main Body ── */}
        <main className="flex-1 relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] overflow-hidden">
          {/* Background Decorative Blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 mix-blend-multiply" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
          </div>

          <div className="relative max-w-4xl w-full mx-auto text-center z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/70 text-[#DA251C] text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DA251C] animate-pulse" />
              <span>Lỗi 404 • Không tìm thấy trang</span>
            </div>

            {/* 404 Visual */}
            <div className="relative my-2 select-none">
              <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A5E] via-[#2D3E82] to-[#DA251C]">
                404
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2A5E] tracking-tight mb-4">
              Trang bạn tìm kiếm không tồn tại
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              Địa chỉ liên kết có thể đã bị thay đổi, bị xoá hoặc tạm thời không khả dụng. Quý vị vui lòng kiểm tra lại đường dẫn hoặc truy cập các mục bên dưới.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <form action="/" method="GET" className="relative flex items-center shadow-xs rounded-xl overflow-hidden border border-gray-200 focus-within:border-[#DA251C] focus-within:ring-2 focus-within:ring-red-100 transition-all bg-white">
                <div className="pl-4 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Tìm kiếm trên cổng thông tin..."
                  className="w-full py-3 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="m-1 px-4 py-2 bg-[#1E2A5E] hover:bg-[#DA251C] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Tìm kiếm
                </button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#DA251C] hover:bg-[#b81d15] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Về trang chủ</span>
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="pt-8 border-t border-gray-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
                Lối tắt hữu ích
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-xs border border-gray-200/80 hover:border-[#DA251C]/40 hover:bg-white shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="p-2.5 rounded-lg bg-gray-50 text-[#1E2A5E] group-hover:bg-red-50 group-hover:text-[#DA251C] transition-colors mb-2">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-800 group-hover:text-[#DA251C] transition-colors text-center line-clamp-1">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support note */}
            <div className="mt-10 text-xs text-gray-400">
              <p>Cần hỗ trợ? Vui lòng liên hệ Văn phòng Học viện qua số điện thoại hoặc email chính thức.</p>
            </div>
          </div>
        </main>

        {/* ── Footer ── */}
        <Footer />
      </body>
    </html>
  );
}
