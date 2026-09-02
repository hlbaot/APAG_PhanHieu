"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const quickLinks = [
    {
      title: t("navHome"),
      href: "/",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      desc: "Trang thông tin chính",
    },
    {
      title: t("navAbout"),
      href: "/gioi-thieu",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      desc: "Cơ cấu & Sứ mệnh",
    },
    {
      title: t("navTraining"),
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
      title: t("navResearch"),
      href: "/nghien-cuu-khoa-hoc",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      desc: "Đề tài & Tạp chí khoa học",
    },
    {
      title: t("navNews"),
      href: "/tin-tuc",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      desc: "Thông báo & Sự kiện mới",
    },
    {
      title: t("navContact"),
      href: "/lien-he",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      desc: "Hỗ trợ & Thông tin liên hệ",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 mix-blend-multiply" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#1E2A5E 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-4xl w-full mx-auto text-center z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/70 text-[#DA251C] text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#DA251C] animate-pulse" />
          <span>{t("badge")}</span>
        </div>

        {/* 404 Hero Visual */}
        <div className="relative my-2 select-none">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E2A5E] via-[#2D3E82] to-[#DA251C] drop-shadow-sm">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span className="text-[12rem] sm:text-[15rem] font-black text-gray-400 blur-sm">
              404
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2A5E] tracking-tight mb-4">
          {t("title")}
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
          {t("description")}
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative flex items-center shadow-sm rounded-xl overflow-hidden border border-gray-200 focus-within:border-[#DA251C] focus-within:ring-2 focus-within:ring-red-100 transition-all bg-white">
            <div className="pl-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full py-3 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
            />
            <button
              type="submit"
              className="m-1 px-4 py-2 bg-[#1E2A5E] hover:bg-[#DA251C] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {t("searchBtn")}
            </button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#DA251C] hover:bg-[#b81d15] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{t("backHome")}</span>
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-[#1E2A5E] font-semibold text-sm shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{t("goBack")}</span>
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="pt-8 border-t border-gray-200/80">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
            {t("quickLinksTitle")}
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
          <p>{t("supportText")}</p>
        </div>
      </div>
    </div>
  );
}
