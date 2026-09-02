"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";

// ─── Search Icon ─────────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ─── Login Icon ──────────────────────────────────────────────────────────────
function LoginIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Banner() {
  const t = useTranslations("Banner");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "vie" ? "en" : "vie";
  const otherLabel = locale === "vie" ? "ENGLISH" : "TIẾNG VIỆT";

  function handleLangSwitch() {
    router.push(pathname, { locale: otherLocale });
  }

  return (
    <div className="relative w-full bg-white overflow-hidden select-none border-b border-gray-100 min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[145px] flex items-center justify-center">
      {/* ── Exact Red & Navy Curved Ribbons Background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {/* Left Side Two-Tier Curved Swoosh */}
        {/* Red Layer */}
        <path
          d="M 0,70 C 130,120 260,175 440,220 L 0,220 Z"
          fill="#DA251C"
        />
        {/* Navy Blue Layer */}
        <path
          d="M 0,135 C 95,165 190,195 300,220 L 0,220 Z"
          fill="#1E2A5E"
        />

        {/* Right Side Two-Tier Curved Swoosh */}
        {/* Red Layer (Sweeps from bottom x=980 up to top x=1420) */}
        <path
          d="M 980,220 C 1140,170 1290,75 1410,0 L 1600,0 L 1600,220 Z"
          fill="#DA251C"
        />
        {/* Navy Blue Layer (Sweeps along red layer up to top x=1520) */}
        <path
          d="M 1110,220 C 1250,175 1390,85 1510,0 L 1600,0 L 1600,220 Z"
          fill="#1E2A5E"
        />
      </svg>

      {/* ── Top-Right Toolbar (Language, Search, Login) ── */}
      <div className="absolute top-1.5 right-2 sm:top-2 sm:right-4 z-20 flex items-center gap-1">
        <button
          onClick={handleLangSwitch}
          aria-label={`Switch language to ${otherLabel}`}
          className="bg-[#DA251C] hover:bg-[#b81e15] text-white text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[2px] transition-colors cursor-pointer shadow-xs leading-none"
        >
          {otherLabel}
        </button>

        <button
          onClick={() => router.push("/?search=open")}
          aria-label={t("searchLabel")}
          className="bg-[#DA251C] hover:bg-[#b81e15] text-white w-6 h-6 sm:w-6.5 sm:h-6.5 flex items-center justify-center rounded-[2px] transition-colors cursor-pointer shadow-xs"
        >
          <SearchIcon />
        </button>

        <button
          onClick={() => router.push("/login")}
          aria-label={t("loginLabel")}
          className="bg-[#1E2A5E] hover:bg-[#161f45] text-white w-6 h-6 sm:w-6.5 sm:h-6.5 flex items-center justify-center rounded-[2px] transition-colors cursor-pointer shadow-xs"
        >
          <LoginIcon />
        </button>
      </div>

      {/* ── Exact APAG Banner Graphic Content (apag_banner.png) ── */}
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
  );
}
