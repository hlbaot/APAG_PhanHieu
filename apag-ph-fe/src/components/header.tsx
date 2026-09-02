"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubNavItem {
  title: string;
  href: string;
}

interface NavItem {
  key: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SubNavItem[];
}

// ─── Home icon ────────────────────────────────────────────────────────────────

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 inline-block mr-1 mb-0.5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

// ─── Close/Hamburger icons ─────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      key: "home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      key: "about",
      children: [
        { title: "BAN GIÁM ĐỐC HỌC VIỆN", href: "/gioi-thieu/ban-giam-doc-hoc-vien" },
        { title: "GIỚI THIỆU CHUNG", href: "/gioi-thieu/gioi-thieu-chung" },
        { title: "ĐƠN VỊ TRỰC THUỘC", href: "/gioi-thieu/don-vi-truc-thuoc" },
        { title: "LÃNH ĐẠO HỌC VIỆN QUA CÁC THỜI KỲ", href: "/gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky" },
        { title: "NHỮNG CHẶNG ĐƯỜNG PHÁT TRIỂN", href: "/gioi-thieu/nhung-chang-duong-phat-trien" },
        { title: "NHỮNG PHẦN THƯỞNG VÀ DANH HIỆU CAO QUÝ", href: "/gioi-thieu/nhung-phan-thuong-va-danh-hieu-cao-quy" },
        { title: "PHÁT BIỂU CỦA LÃNH ĐẠO ĐẢNG VÀ NHÀ NƯỚC VỚI HỌC VIỆN", href: "/gioi-thieu/phat-bieu-cua-lanh-dao-dang-va-nha-nuoc-voi-hoc-vien" },
        { title: "PHÒNG TRUYỀN THỐNG SỐ", href: "/gioi-thieu/phong-truyen-thong-so" },
        { title: "LOGO CHÍNH THỨC", href: "/gioi-thieu/logo-chinh-thuc" },
      ],
    },
    {
      key: "training",
      children: [
        { title: "ĐÀO TẠO ĐẠI HỌC", href: "/dao-tao&boi-duong/dao-tao-dai-hoc" },
        { title: "ĐÀO TẠO THẠC SĨ", href: "/dao-tao&boi-duong/dao-tao-thac-si" },
        { title: "ĐÀO TẠO TIẾN SĨ", href: "/dao-tao&boi-duong/dao-tao-tien-si" },
        { title: "BA CÔNG KHAI", href: "/dao-tao&boi-duong/ba-cong-khai" },
      ],
    },
    {
      key: "research",
      href: "/nghien-cuu-khoa-hoc",
    },
    {
      key: "international",
      children: [
        { title: "SỨ MỆNH-TẦM NHÌN-CHIẾN LƯỢC", href: "/hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc" },
        { title: "TIN TỨC HTQT", href: "/hop-tac-quoc-te/tin-tuc-htqt" },
        { title: "CHƯƠNG TRÌNH ERASMUS+", href: "/hop-tac-quoc-te/chuong-trinh-erasmus-plus" },
        { title: "HỢP TÁC KHÁC", href: "/hop-tac-quoc-te/hop-tac-khac" },
        { title: "LIÊN HỆ", href: "/hop-tac-quoc-te/lien-he" },
      ],
    },
    {
      key: "quality",
      children: [
        { title: "ĐBCL CHƯƠNG TRÌNH ĐT", href: "/dam-bao-chat-luong/dbcl-chuong-trinh-dt" },
        { title: "ĐBCL CƠ SỞ GIÁO DỤC", href: "/dam-bao-chat-luong/dbcl-co-so-giao-duc" },
        { title: "VĂN BẢN PHÁP LUẬT", href: "/dam-bao-chat-luong/van-ban-phap-luat" },
      ],
    },
    {
      key: "library",
      children: [
        { title: "THÔNG TIN TƯ LIỆU", href: "/hoc-lieu/thong-tin-tu-lieu" },
        { title: "THƯ VIỆN", href: "/hoc-lieu/thu-vien" },
      ],
    },
    {
      key: "news",
      children: [
        { title: "LỊCH CÔNG TÁC", href: "/tin-tuc/lich-cong-tac" },
        { title: "THÔNG BÁO", href: "/tin-tuc/thong-bao" },
        { title: "TUYÊN TRUYỀN PHỔ BIẾN PHÁP LUẬT", href: "/tin-tuc/tuyen-truyen-pho-bien-phap-luat" },
        { title: "TIN HOẠT ĐỘNG", href: "/tin-tuc/tin-hoat-dong" },
        { title: "THÔNG TIN HÀNH CHÍNH", href: "/tin-tuc/thong-tin-hanh-chinh" },
        { title: "GÓP Ý DỰ THẢO CÁC VĂN KIỆN ĐH XIV CỦA ĐẢNG", href: "/tin-tuc/gop-y-du-thao-cac-van-kien-dh-xiv-cua-dang" },
        { title: "CÔNG KHAI TÀI CHÍNH", href: "/tin-tuc/cong-khai-tai-chinh" },
        { title: "BẦU CỬ ĐẠI BIỂU QUỐC HỘI KHÓA XVI VÀ ĐẠI BIỂU HĐND CÁC CẤP NHIỆM KỲ 2026-2031", href: "/tin-tuc/bau-cu-dai-bieu-quoc-hoi-khoa-xvi-va-dai-bieu-hdnd-cac-cap-nhiem-ky-2026-2031" },
      ],
    },
    {
      key: "contact",
      href: "/lien-he",
    },
  ];

  function isItemActive(item: NavItem) {
    if (item.children && item.children.length > 0) {
      return item.children.some((sub) => pathname === sub.href || pathname.startsWith(sub.href + "/"));
    }
    if (!item.href) return false;
    if (item.href === "/") return pathname === "/" || pathname === "";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  }

  const toggleMobileSub = (key: string) => {
    setActiveMobileSub(activeMobileSub === key ? null : key);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-30">
      {/* ── Desktop nav ── */}
      <nav
        className="hidden lg:flex items-stretch justify-center relative"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const active = isItemActive(item);
          const hasChildren = Boolean(item.children && item.children.length > 0);

          return (
            <div key={item.key} className="relative group flex items-stretch">
              {hasChildren ? (
                // Parent item with dropdown: NOT clickable, cursor-default
                <div
                  className={[
                    "flex items-center justify-center text-center px-3.5 xl:px-4 py-3.5",
                    "text-xs xl:text-sm font-extrabold uppercase tracking-wider leading-tight",
                    "transition-colors duration-150 border-b-2 cursor-default select-none",
                    "min-h-[54px] whitespace-pre-line",
                    active
                      ? "text-[#DA251C] border-[#DA251C]"
                      : "text-[#1E2A5E] border-transparent group-hover:text-[#DA251C] group-hover:border-[#DA251C]",
                  ].join(" ")}
                  aria-haspopup="true"
                >
                  {item.icon && (
                    <span className={active ? "text-[#DA251C]" : ""}>
                      {item.icon}
                    </span>
                  )}
                  {t(item.key as Parameters<typeof t>[0])}
                </div>
              ) : (
                // Direct link: clickable with cursor-pointer
                <Link
                  href={item.href!}
                  className={[
                    "flex items-center justify-center text-center px-3.5 xl:px-4 py-3.5",
                    "text-xs xl:text-sm font-extrabold uppercase tracking-wider leading-tight",
                    "transition-colors duration-150 border-b-2 cursor-pointer",
                    "min-h-[54px] whitespace-pre-line",
                    active
                      ? "text-[#DA251C] border-[#DA251C]"
                      : "text-[#1E2A5E] border-transparent hover:text-[#DA251C] hover:border-[#DA251C]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.icon && (
                    <span className={active ? "text-[#DA251C]" : ""}>
                      {item.icon}
                    </span>
                  )}
                  {t(item.key as Parameters<typeof t>[0])}
                </Link>
              )}

              {/* Desktop Dropdown Menu (only clickable items) */}
              {hasChildren && (
                <div className="absolute left-0 top-full hidden group-hover:block w-72 xl:w-80 bg-white shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="flex flex-col">
                    {item.children!.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={[
                            "px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-left transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer",
                            isSubActive
                              ? "text-[#DA251C] bg-red-50"
                              : "text-[#1E2A5E] hover:text-[#DA251C] hover:bg-gray-50",
                          ].join(" ")}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Tablet nav (horizontal scroll) ── */}
      <nav
        className="hidden md:flex lg:hidden items-stretch overflow-x-auto scrollbar-hide"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const active = isItemActive(item);
          const hasChildren = Boolean(item.children && item.children.length > 0);

          return (
            <div key={item.key} className="relative group flex items-stretch">
              {hasChildren ? (
                <div
                  className={[
                    "flex-shrink-0 flex items-center justify-center text-center px-4 py-3.5",
                    "text-xs font-extrabold uppercase tracking-wide leading-tight",
                    "transition-colors duration-150 border-b-2 whitespace-nowrap cursor-default select-none",
                    "min-h-[50px]",
                    active
                      ? "text-[#DA251C] border-[#DA251C]"
                      : "text-[#1E2A5E] border-transparent group-hover:text-[#DA251C] group-hover:border-[#DA251C]",
                  ].join(" ")}
                >
                  {item.icon && (
                    <span className={active ? "text-[#DA251C]" : ""}>
                      {item.icon}
                    </span>
                  )}
                  {t(item.key as Parameters<typeof t>[0])}
                </div>
              ) : (
                <Link
                  href={item.href!}
                  className={[
                    "flex-shrink-0 flex items-center justify-center text-center px-4 py-3.5",
                    "text-xs font-extrabold uppercase tracking-wide leading-tight",
                    "transition-colors duration-150 border-b-2 whitespace-nowrap cursor-pointer",
                    "min-h-[50px]",
                    active
                      ? "text-[#DA251C] border-[#DA251C]"
                      : "text-[#1E2A5E] border-transparent hover:text-[#DA251C] hover:border-[#DA251C]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.icon && (
                    <span className={active ? "text-[#DA251C]" : ""}>
                      {item.icon}
                    </span>
                  )}
                  {t(item.key as Parameters<typeof t>[0])}
                </Link>
              )}

              {/* Tablet dropdown on hover */}
              {hasChildren && (
                <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white shadow-xl border border-gray-200 py-2 z-50">
                  <div className="flex flex-col">
                    {item.children!.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={[
                            "px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-left transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer whitespace-normal",
                            isSubActive
                              ? "text-[#DA251C] bg-red-50"
                              : "text-[#1E2A5E] hover:text-[#DA251C] hover:bg-gray-50",
                          ].join(" ")}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* ── Mobile: hamburger bar ── */}
      <div className="md:hidden flex items-center justify-between px-4 py-2.5 h-14">
        {/* Active page label */}
        <span className="text-[#DA251C] text-sm font-extrabold uppercase tracking-wide">
          {navItems.find((i) => isItemActive(i))
            ? t(navItems.find((i) => isItemActive(i))!.key as Parameters<typeof t>[0])
            : t("home")}
        </span>

        {/* Hamburger toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="min-w-[44px] min-h-[44px] flex items-center justify-center
                     text-[#1E2A5E] hover:text-[#DA251C] transition-colors cursor-pointer"
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={[
          "md:hidden overflow-y-auto max-h-[calc(100vh-180px)] transition-all duration-300 ease-in-out",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="flex flex-col border-t border-gray-100 bg-white">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isSubOpen = activeMobileSub === item.key;

            return (
              <div key={item.key} className="border-b border-gray-100">
                {hasChildren ? (
                  // Mobile accordion header: clicking anywhere toggles the submenu
                  <button
                    type="button"
                    onClick={() => toggleMobileSub(item.key)}
                    className={[
                      "w-full flex items-center justify-between px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-left cursor-pointer",
                      active ? "text-[#DA251C]" : "text-[#1E2A5E]",
                    ].join(" ")}
                  >
                    <span className="flex items-center">
                      {item.icon && (
                        <span className={active ? "text-[#DA251C]" : ""}>{item.icon}</span>
                      )}
                      {t(item.key as Parameters<typeof t>[0])}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSubOpen ? "rotate-180 text-[#DA251C]" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  // Direct link for items without children
                  <Link
                    href={item.href!}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide cursor-pointer",
                      active ? "text-[#DA251C]" : "text-[#1E2A5E]",
                    ].join(" ")}
                  >
                    {item.icon && (
                      <span className={active ? "text-[#DA251C]" : ""}>{item.icon}</span>
                    )}
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                )}

                {/* Mobile Submenu Accordion */}
                {hasChildren && isSubOpen && (
                  <div className="bg-gray-50 py-1 pl-6 pr-4 border-t border-gray-100">
                    {item.children!.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "block py-2.5 px-3 text-xs font-bold uppercase tracking-tight transition-colors border-b border-gray-200/50 last:border-b-0 cursor-pointer",
                          pathname === sub.href
                            ? "text-[#DA251C]"
                            : "text-[#1E2A5E] hover:text-[#DA251C]",
                        ].join(" ")}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
