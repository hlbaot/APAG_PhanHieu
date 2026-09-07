"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Home,
  Printer,
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  Mail,
  Link2,
  ArrowLeft,
  ChevronRight,
  Clock,
  MessageSquare,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import "@/scss/gioi-thieu/ban-giam-doc-phan-hieu/ban-giam-doc-phan-hieu.scss";

// ─── Danh mục sidebar Giới thiệu ───────────────────────────────────────────
const introCategories = [
  { title: "CÁC KHOA CHUYÊN MÔN", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { title: "GIỚI THIỆU CHUNG", href: "/gioi-thieu/gioi-thieu-chung" },
  { title: "CÁC TỔ CHỨC ĐOÀN THỂ", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
  { title: "CÁC ĐƠN VỊ CHỨC NĂNG", href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc" },
];

// ─── Danh sách Tin đọc nhiều ──────────────────────────────────────────────
const popularNews = [
  {
    id: 1,
    title: "Thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2026 của Học viện Hành chính và Quản trị công",
    href: "/dao-tao&boi-duong/dao-tao-dai-hoc",
  },
  {
    id: 2,
    title: "Các đơn vị trực thuộc",
    href: "/gioi-thieu/don-vi-thuoc-va-truc-thuoc",
  },
  {
    id: 3,
    title: "Những chặng đường phát triển",
    href: "/gioi-thieu/nhung-chang-duong-phat-trien",
  },
  {
    id: 4,
    title: "Lãnh đạo Học viện qua các thời kỳ",
    href: "/gioi-thieu/gioi-thieu-chung",
  },
  {
    id: 5,
    title: "Tóm tắt những nội dung chính trong Nghị quyết 59-NQ/TW năm 2025 của Bộ Chính trị về hội nhập quốc tế trong tình hình mới",
    href: "/tin-tuc/tin-tuc",
  },
  {
    id: 6,
    title: "Ban Giám đốc Học viện Hành chính và Quản trị công",
    href: "/gioi-thieu/ban-giam-doc-phan-hieu",
  },
  {
    id: 7,
    title: "Thông báo về thông tin tuyển sinh trình độ đại học hình thức chính quy năm 2025",
    href: "/dao-tao&boi-duong/dao-tao-dai-hoc",
  },
  {
    id: 8,
    title: "Những phần thưởng và danh hiệu cao quý",
    href: "/gioi-thieu/nhung-chang-duong-phat-trien",
  },
  {
    id: 9,
    title: "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2025",
    href: "/dao-tao&boi-duong/dao-tao-dai-hoc",
  },
  {
    id: 10,
    title: "Phân hiệu Học viện Hành chính và Quản trị công tại tỉnh Đắk Lắk tổ chức Lễ bảo vệ đề án thạc sĩ cho học viên các lớp cao học Quản lý công",
    href: "/dao-tao&boi-duong/dao-tao-thac-si",
  },
];

// ─── Tin liên quan (Xem thêm) ─────────────────────────────────────────────
const relatedNews = [
  {
    id: 1,
    title: "Chi bộ Khoa Quản lý phát triển xã hội tổ chức sinh hoạt chuyên đề tại Khu Di tích K9 Đá Chông",
    time: "07/09/2026 08:33",
    image: "/trangChu/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    excerpt: "(apag.edu.vn) - Ngày 06/9/2026, Chi bộ Khoa Quản lý phát triển xã hội tổ chức sinh hoạt chuyên đề tại Khu Di tích K9 Đá Chông. Đây là hoạt động thiết thực nhằm đổi mới nội dung, hình thức sinh hoạt chi bộ, gắn giáo dục truyền thống với học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
    href: "/tin-tuc/tin-tuc",
  },
  {
    id: 2,
    title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
    time: "24/08/2026 16:00",
    image: "/trangChu/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
    excerpt: "(apag.edu.vn) - Sáng ngày 24/8/2026, tại Học viện Hành chính và Quản trị công, PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện chủ trì buổi làm việc trực tuyến với Trường Hành chính và Quản trị công Quốc gia (UP-NCPAG), Đại học Philippines.",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
];

export default function BanGiamDocPhanHieuPage() {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Xử lý in trang
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Xử lý copy link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Xử lý gửi ý kiến
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setIsSubmittingComment(true);
    setTimeout(() => {
      setCommentList((prev) => [comment.trim(), ...prev]);
      setComment("");
      setIsSubmittingComment(false);
    }, 400);
  };

  return (
    <div className="w-full bg-[#fdfdfd] py-6 sm:py-8">
      <div className="w-full max-w-[1360px] mx-auto px-4">
        
        {/* ── BỐ CỤC CHÍNH 2 CỘT ── */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════════
              CỘT TRÁI (SIDEBAR): Chiếm 4/12 trên Desktop, Full trên Mobile
              ═══════════════════════════════════════════════════════════════════ */}
          <aside className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
            
            {/* Box 1: Khối Menu "GIỚI THIỆU" */}
            <div className="bg-white border border-gray-200 rounded-xs shadow-2xs overflow-hidden">
              {/* Tiêu đề Box Đỏ */}
              <div className="bg-[#DA251C] text-white px-4 py-3">
                <h3 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider">
                  GIỚI THIỆU
                </h3>
              </div>
              {/* Danh sách mục */}
              <div className="divide-y divide-gray-100 p-1">
                {introCategories.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3.5 py-3 text-[13.5px] sm:text-[14px] font-bold text-[#1E2A5E] hover:text-[#DA251C] hover:bg-red-50/50 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#DA251C] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Box 2: Khối "TIN ĐỌC NHIỀU" */}
            <div className="bg-white border border-gray-200 rounded-xs shadow-2xs overflow-hidden">
              {/* Tiêu đề Box Xanh Navy */}
              <div className="bg-[#1E2A5E] text-white px-4 py-3">
                <h3 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider">
                  TIN ĐỌC NHIỀU
                </h3>
              </div>
              {/* Danh sách tin tức */}
              <div className="divide-y divide-gray-100 p-2 sm:p-3">
                {popularNews.map((news) => (
                  <Link
                    key={news.id}
                    href={news.href}
                    className="flex items-start gap-2.5 py-2.5 px-2 rounded-xs hover:bg-gray-50 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A5E] group-hover:bg-[#DA251C] shrink-0 mt-2 transition-colors" />
                    <p className="text-[13px] sm:text-[14px] font-semibold text-gray-800 group-hover:text-[#DA251C] transition-colors leading-snug">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

          {/* ═══════════════════════════════════════════════════════════════════
              CỘT PHẢI (MAIN CONTENT): Chiếm 8/12 trên Desktop
              ═══════════════════════════════════════════════════════════════════ */}
          <main className="col-span-12 lg:col-span-8 xl:col-span-9 bg-white border border-gray-200 rounded-xs shadow-2xs p-4 sm:p-6 md:p-8">
            
            {/* 1. Thanh Breadcrumb */}
            <div className="bg-[#f0f2f5] px-3 py-2 rounded-xs flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-5">
              <Link
                href="/"
                className="bg-[#1E2A5E] text-white p-1 rounded-xs hover:bg-[#DA251C] transition-colors inline-flex items-center justify-center"
                aria-label="Trang chủ"
              >
                <Home className="w-3.5 h-3.5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/gioi-thieu/gioi-thieu-chung"
                className="font-bold text-[#DA251C] hover:underline uppercase"
              >
                GIỚI THIỆU
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium truncate">
                Ban Giám đốc Học viện Hành chính và Quản trị công
              </span>
            </div>

            {/* 2. Tiêu đề bài viết */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2A5E] leading-snug mb-4">
              Ban Giám đốc Học viện Hành chính và Quản trị công
            </h1>

            {/* 3. Thanh công cụ (Thời gian, Đọc báo, Cỡ chữ, In, Bookmark) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
              {/* Thời gian */}
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>06:00 21/06/2026</span>
              </div>

              {/* Nhóm công cụ tương tác */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 select-none">
                {/* Đọc tự động */}
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isPlayingAudio
                      ? "bg-red-100 text-[#DA251C]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  title="Nghe đọc bài viết"
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Đang đọc...</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe đọc</span>
                    </>
                  )}
                </button>

                {/* Chọn cỡ chữ */}
                <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5">
                  <span className="text-[11px] text-gray-500 font-medium">Chọn cỡ chữ:</span>
                  <button
                    type="button"
                    onClick={() => setFontSize("normal")}
                    className={`px-1.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                      fontSize === "normal" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"
                    }`}
                    title="Cỡ chữ chuẩn"
                  >
                    A
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize("large")}
                    className={`px-1.5 py-0.5 rounded text-sm font-bold transition-colors cursor-pointer ${
                      fontSize === "large" ? "bg-[#1E2A5E] text-white" : "text-gray-700 hover:bg-gray-200"
                    }`}
                    title="Cỡ chữ lớn"
                  >
                    A+
                  </button>
                </div>

                {/* Nút In bài viết */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-gray-100 rounded transition-colors cursor-pointer"
                  title="In trang này"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {/* Nút Bookmark */}
                <button
                  type="button"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    isBookmarked
                      ? "text-[#DA251C] bg-red-50"
                      : "text-gray-600 hover:text-[#DA251C] hover:bg-gray-100"
                  }`}
                  title={isBookmarked ? "Đã lưu bài viết" : "Lưu bài viết"}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* 4. Nội dung bài viết & Ảnh Ban Giám đốc */}
            <div className={`transition-all duration-200 ${fontSize === "large" ? "text-lg" : "text-base"}`}>
              {/* Khung ảnh Ban Giám đốc */}
              <div className="w-full relative aspect-[16/11] bg-white border border-gray-200 rounded overflow-hidden shadow-xs mb-4">
                <Image
                  src="/gioiThieu/BGD-HV-32c28079b9.png"
                  alt="Ban Giám đốc Học viện Hành chính và Quản trị công"
                  fill
                  priority
                  className="object-contain p-2 md:p-3"
                />
              </div>

              {/* Tên tác giả / Người đăng bài (căn phải) */}
              <div className="text-right text-sm font-bold text-gray-800 italic mb-8">
                Như Ngọc
              </div>
            </div>

            {/* 5. Thanh Điều Hướng & Chia sẻ cuối bài */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-4 bg-gray-50 border border-gray-200 rounded-xs mb-8">
              {/* Nút quay lại */}
              <Link
                href="/gioi-thieu/gioi-thieu-chung"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E2A5E] hover:text-[#DA251C] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </Link>

              {/* Nút chia sẻ */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Chia sẻ:</span>
                
                {/* Email share */}
                <a
                  href="mailto:?subject=Ban%20Giám%20đốc%20Học%20viện%20Hành%20chính%20và%20Quản%20trị%20công&body=Xem%20thêm%20tại%20đây"
                  className="p-1.5 text-gray-600 hover:text-[#DA251C] hover:bg-white rounded transition-colors border border-transparent hover:border-gray-200 shadow-2xs"
                  title="Gửi qua Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Copy link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-[#DA251C] bg-white border border-gray-200 rounded shadow-2xs hover:border-[#DA251C] transition-all cursor-pointer"
                  title="Sao chép đường dẫn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] font-semibold text-emerald-600">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 6. Phần Ý KIẾN (Bình luận / Phản hồi) */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-[#1E2A5E]" />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[#1E2A5E]">
                  Ý KIẾN
                </h3>
              </div>

              {/* Form nhập ý kiến */}
              <form onSubmit={handleSubmitComment} className="flex flex-col gap-2.5">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Chia sẻ ý kiến của bạn về bài viết này..."
                  rows={3}
                  className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-[#DA251C] focus:ring-1 focus:ring-[#DA251C] transition-all outline-none resize-y placeholder-gray-400"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!comment.trim() || isSubmittingComment}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E2A5E] hover:bg-[#DA251C] disabled:bg-gray-300 text-white text-xs sm:text-sm font-bold rounded transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmittingComment ? "Đang gửi..." : "Gửi ý kiến"}</span>
                  </button>
                </div>
              </form>

              {/* Danh sách ý kiến đã gửi */}
              {commentList.length > 0 && (
                <div className="mt-4 flex flex-col gap-2.5">
                  {commentList.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-800">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span className="font-bold text-gray-700">Bạn đọc</span>
                        <span>Vừa xong</span>
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 7. Phần XEM THÊM (Tin liên quan) */}
            <section className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4 border-l-4 border-[#DA251C] pl-2.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 uppercase">
                  Xem thêm
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {relatedNews.map((news) => (
                  <Link
                    key={news.id}
                    href={news.href}
                    className="grid grid-cols-12 gap-3.5 sm:gap-4 items-start group pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    {/* Thumbnail */}
                    <div className="col-span-4 sm:col-span-3 relative aspect-[16/10] bg-gray-100 border border-gray-200 rounded overflow-hidden shrink-0">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Nội dung tin */}
                    <div className="col-span-8 sm:col-span-9 flex flex-col">
                      <h4 className="text-[14.5px] sm:text-[16px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug mb-1">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{news.time}</span>
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-gray-600 line-clamp-2 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
