"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Star, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import "@/scss/trang-chu/trang-chu.scss";

// ─── Dữ liệu tin tức tĩnh cho thanh Ticker ──────────────────────────────────
const tickerNews = [
  {
    title: "Lễ ký kết Biên bản ghi nhớ về phối hợp tổ chức 'Ngày hội Việc làm Thanh niên Thủ đô' năm 2026",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    title: "Hội nghị Giao ban công tác tháng 8 và triển khai nhiệm vụ công tác tháng 9 năm 2026",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    title: "Định hình mô hình 'Chính phủ linh hoạt' ở Việt Nam: Khung lý luận, tiêu chí đánh giá và hàm ý chính sách",
    href: "/nghien-cuu-khoa-hoc",
  },
  {
    title: "Học viện Hành chính và Quản trị công tổ chức lớp bồi dưỡng kiến thức chuyển đổi số trong giáo dục đại học",
    href: "/tin-tuc/tin-hoat-dong",
  },
];

// ─── Dữ liệu Slideshow chính (Cột trái) ─────────────────────────────────────
const bannerSlides = [
  {
    id: 1,
    image: "/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
    alt: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
    title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
  },
  {
    id: 2,
    image: "/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
    alt: "Hơn 3.000 tân sinh viên năm 2026 nô nức nhập học tại Học viện Hành chính và Quản trị công",
    title: "Hơn 3.000 tân sinh viên năm 2026 nô nức nhập học tại Học viện Hành chính và Quản trị công",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 3,
    image: "/slide/a0-f97775f053.png",
    alt: "Học viện Hành chính và Quản trị công tổ chức Lễ Khai giảng và Bế giảng, trao bằng tốt nghiệp trình độ tiến sĩ, thạc sĩ đợt 1 năm 2026",
    title: "Học viện Hành chính và Quản trị công tổ chức Lễ Khai giảng và Bế giảng, trao bằng tốt nghiệp trình độ tiến sĩ, thạc sĩ đợt 1 năm 2026",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 4,
    image: "/slide/a9-f769102539.png",
    alt: "Đa Phúc: Từ không gian quản trị mới đến khát vọng trở thành điểm đến xanh của Thủ đô",
    title: "Đa Phúc: Từ không gian quản trị mới đến khát vọng trở thành điểm đến xanh của Thủ đô",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 5,
    image: "/slide/luu-niem-2-899d44225a.png",
    alt: "Hội thảo khoa học: “Ứng dụng AI trong xây dựng chính phủ số của các quốc gia - Bài học kinh nghiệm cho Việt Nam”",
    title: "Hội thảo khoa học: “Ứng dụng AI trong xây dựng chính phủ số của các quốc gia - Bài học kinh nghiệm cho Việt Nam”",
    href: "/nghien-cuu-khoa-hoc",
  },
  {
    id: 6,
    image: "/slide/noimage.png",
    alt: "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2026",
    title: "Học viện Hành chính và Quản trị công thông báo điểm trúng tuyển đại học hình thức chính quy và thủ tục, thời gian xác nhận nhập học đợt 1 năm 2026",
    href: "/dao-tao&boi-duong/dao-tao-dai-hoc",
  },
  {
    id: 7,
    image: "/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
    alt: "Gửi K26 - Một hành trình mới bắt đầu, những khát vọng mới được viết nên",
    title: "Gửi K26 - Một hành trình mới bắt đầu, những khát vọng mới được viết nên",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 8,
    image: "/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
    alt: "Từ hành trình tri thức đến khát vọng kiến tạo",
    title: "Từ hành trình tri thức đến khát vọng kiến tạo",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 9,
    image: "/slide/a8-141322fba9.png",
    alt: "Học viện Hành chính và Quản trị công trao đổi về chuyển đổi số trong đào tạo, bồi dưỡng và phát triển năng lực số cho cán bộ, công chức tại tỉnh Lào Cai",
    title: "Học viện Hành chính và Quản trị công trao đổi về chuyển đổi số trong đào tạo, bồi dưỡng và phát triển năng lực số cho cán bộ, công chức tại tỉnh Lào Cai",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 10,
    image: "/slide/20260828105210-897744165165165165165-03a85ffb4d.png",
    alt: "Định hình mô hình “Chính phủ linh hoạt” ở Việt Nam: Khung lý luận, tiêu chí đánh giá và hàm ý chính sách",
    title: "Định hình mô hình “Chính phủ linh hoạt” ở Việt Nam: Khung lý luận, tiêu chí đánh giá và hàm ý chính sách",
    href: "/nghien-cuu-khoa-hoc",
  },
];

// ─── Dữ liệu Tin Hoạt Động (Cột phải) ──────────────────────────────────────
const activityNews = [
  {
    id: 1,
    title: "Lễ ký kết Biên bản ghi nhớ về phối hợp tổ chức “Ngày hội Việc làm Thanh niên Thủ đô” năm 2026",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 2,
    title: "Hội nghị Giao ban công tác tháng 8 và triển khai nhiệm vụ công tác tháng 9 năm 2026",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 3,
    title: "Định hình mô hình “Chính phủ linh hoạt” ở Việt Nam: Khung lý luận, tiêu chí đánh giá và hàm ý chính sách",
    href: "/nghien-cuu-khoa-hoc",
  },
  {
    id: 4,
    title: "Học viện Hành chính và Quản trị công tổ chức lớp bồi dưỡng kiến thức chuyển đổi số trong giáo dục đại học",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 5,
    title: "Hội thảo khoa học: “Ứng dụng AI trong xây dựng chính phủ số của các quốc gia - Bài học kinh nghiệm cho Việt Nam”",
    href: "/nghien-cuu-khoa-hoc",
  },
  {
    id: 6,
    title: "Con bắt đầu một hành trình mới, cha mẹ học cách đứng phía sau",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 7,
    title: "Chạm ngõ giảng đường, bắt đầu hành trình mới",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 8,
    title: "Tọa đàm khoa học: Quản trị tích hợp phát triển cấp xã trong bối cảnh đổi mới quản trị địa phương",
    href: "/nghien-cuu-khoa-hoc",
  },
  {
    id: 9,
    title: "Hơn 3.000 tân sinh viên năm 2026 nô nức nhập học tại Học viện Hành chính và Quản trị công",
    href: "/tin-tuc/tin-hoat-dong",
  },
  {
    id: 10,
    title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
    href: "/tin-tuc/tin-hoat-dong",
  },
];

// ─── Dữ liệu Nghiên Cứu Khoa Học ──────────────────────────────────────────
const scienceResearchFeatured = {
  title: "Quyết định số 3474-QĐ/HVHCQTC ngày 28/8/2026 của Giám đốc Học viện Hành chính và Quản trị công phê duyệt danh mục đề tài nghiên cứu khoa học của sinh viên Học viện Hành chính và Quản trị công năm học 2026-2027",
  href: "/nghien-cuu-khoa-hoc",
  image: "/slide/noimage.png",
  time: "16:40 28/08/2026",
};

const scienceResearchList = [
  {
    id: 1,
    title: "Hội thảo khoa học: “Ứng dụng AI trong xây dựng chính phủ số của các quốc gia - Bài học kinh nghiệm cho Việt Nam”",
    href: "/nghien-cuu-khoa-hoc",
    image: "/slide/luu-niem-2-899d44225a.png",
  },
  {
    id: 2,
    title: "Tọa đàm khoa học: Quản trị tích hợp phát triển cấp xã trong bối cảnh đổi mới quản trị địa phương",
    href: "/nghien-cuu-khoa-hoc",
    image: "/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
  },
  {
    id: 3,
    title: "Hướng tới Net Zero 2050: Đổi mới tư duy quản trị môi trường và giải pháp phát triển bền vững tại Việt Nam",
    href: "/nghien-cuu-khoa-hoc",
    image: "/slide/20260828105210-897744165165165165165-03a85ffb4d.png",
  },
];

// ─── Dữ liệu Hợp Tác Quốc Tế ──────────────────────────────────────────────
const internationalCoopFeatured = {
  title: "Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines",
  href: "/hop-tac-quoc-te/tin-tuc-htqt",
  image: "/slide/1787659802736_3144853144170939315_3144853144170939315_2174899365c0830e50d3a24b7b349e6f-38c53f6418.png",
  time: "16:00 24/08/2026",
  excerpt: "(apag.edu.vn) - Sáng ngày 24/8/2026, tại Học viện Hành chính và Quản trị công, PGS.TS. Nguyễn Bá Chiến, Giám đốc Học viện chủ trì buổi làm việc trực tuyến với Trường Hành chính và Quản trị công Quốc gia (National College of Public Administration and Governance - UP-NCPAG), Đại học Philippines nhằm trao đổi, thống nhất các hoạt động ưu tiên triển khai Biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công và Đại học Philippines.",
};

const internationalCoopList = [
  {
    id: 1,
    title: "Học từ thực tiễn doanh nghiệp: Những bài học quản trị từ Vietjet Air dành cho học viên Hàn Quốc, Chương trình Nhà quản lý kinh doanh trẻ toàn cầu tại Học viện Hành chính và Quản trị công",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
    image: "/slide/a9-f769102539.png",
  },
  {
    id: 2,
    title: "Triển khai biên bản ghi nhớ hợp tác giữa Học viện Hành chính và Quản trị công và Đại học Khon Kaen: Phân hiệu Học viện Hành chính và Quản trị công tại Thành phố Hồ Chí Minh làm việc với Trường Công vụ và Chính sách công (COPA), Thái Lan",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
    image: "/slide/a0-f97775f053.png",
  },
  {
    id: 3,
    title: "Học viện Hành chính và Quản trị công trao đổi hợp tác với Trường Đại học Thành phố Hồng Kông (Trung Quốc)",
    href: "/hop-tac-quoc-te/tin-tuc-htqt",
    image: "/slide/a8-141322fba9.png",
  },
];

// ─── Dữ liệu Công Tác Đảng - Đoàn Thể ──────────────────────────────────────
const partyWorkFeatured = {
  title: "Học viện Hành chính và Quản trị công tham dự Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện các Nghị quyết, Chỉ thị mới của Bộ Chính trị",
  href: "/tin-tuc/tin-hoat-dong",
  image: "/002-ea821eb053.png",
  time: "19:41 03/09/2026",
  excerpt: "(apag.edu.vn) - Sáng ngày 03/9/2026, Bộ Chính trị, Ban Bí thư đã tổ chức Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện các Nghị quyết, Chỉ thị mới của Bộ Chính trị bằng hình thức trực tiếp kết hợp trực tuyến. Đồng chí Tô Lâm, Tổng Bí thư, Chủ tịch nước tham dự và phát biểu chỉ đạo Hội nghị.",
};

const partyWorkListCol1 = [
  {
    id: 1,
    title: "Chi bộ Ban Quản lý đào tạo tổ chức Lễ kết nạp đảng viên",
    href: "/tin-tuc/tin-hoat-dong",
    image: "/slide/a0-f97775f053.png",
  },
  {
    id: 2,
    title: "Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết Hội nghị Trung ương 3, khóa XIV",
    href: "/tin-tuc/tin-hoat-dong",
    image: "/slide/1786503582371_1938366611672494013_7520450069731288325_417e329d44b7ba788a545ab358cbe04e-1351645f7e.png",
  },
];

const partyWorkListCol2 = [
  {
    id: 1,
    title: "Hội nghị triển khai Quyết định giám sát của Đảng ủy Học viện Chính trị quốc gia Hồ Chí Minh đối với Đảng ủy Học viện Hành chính và Quản trị công",
    href: "/tin-tuc/tin-hoat-dong",
    image: "/slide/Screenshot-2026-08-25-100905-6a7ea12284.png",
  },
  {
    id: 2,
    title: "Lan toả đạo lý “uống nước nhớ nguồn” từ hành trình tri ân của tuổi trẻ Học viện Hành chính và Quản trị công tại xã Tứ Mỹ, tỉnh Hà Tĩnh",
    href: "/tin-tuc/tin-hoat-dong",
    image: "/slide/1786758379184_8069044026522142624_8069044026522142624_ee48212aef07b67ed71d4c3fb797472d-78ee258f9e.png",
  },
];

export default function TrangChuPage() {
  const tickerList = [...tickerNews, ...tickerNews];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  };

  // Tự động chuyển slide sau mỗi 6 giây
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="w-full">
      {/* ─── News Ticker (Thanh tin tức chạy ngang) ───────────────────────── */}
      <div className="w-full bg-white border-y border-gray-200 select-none">
        <div className="w-full max-w-[1360px] mx-auto px-4 overflow-hidden relative flex py-1.5 md:py-2">
          <div className="news-ticker-track flex w-max shrink-0 will-change-transform">
            {tickerList.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                <Link
                  href={item.href}
                  className="text-xs md:text-sm font-semibold text-[#DA251C] hover:text-[#9B0A11] hover:underline transition-colors duration-150 whitespace-nowrap px-2.5 py-0.5"
                >
                  {item.title}
                </Link>
                <span
                  className="inline-flex items-center justify-center px-1.5 text-amber-500 select-none flex-shrink-0"
                  aria-hidden="true"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Nội dung chính trang chủ ────────────────────────────────────── */}
      <main className="w-full max-w-[1360px] mx-auto px-4 py-4 md:py-6">
        {/* Banner Quốc Khánh */}
        <div className="w-full overflow-hidden rounded shadow-sm">
          <Image
            src="/quockhanh.png"
            alt="Chào mừng 81 năm Quốc khánh Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam"
            width={1360}
            height={212}
            priority
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* ─── Khung Bố Cục 2 Cột: Luôn giữ 2 cột trên mọi thiết bị ────────────── */}
        <div className="mt-4 sm:mt-5 md:mt-7 grid grid-cols-12 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Cột Trái (~65%): Slideshow / Banner Ảnh */}
          <div className="col-span-8 flex flex-col">
            {/* Khung Ảnh Slideshow */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded sm:rounded-md bg-[#0e1e38] shadow-sm select-none group">
              {bannerSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <Link href={slide.href} className="block w-full h-full relative">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      className={`w-full h-full ${slide.image.includes("noimage") ? "object-contain bg-white p-2 sm:p-4 md:p-6" : "object-cover"
                        }`}
                    />
                  </Link>
                </div>
              ))}

              {/* Nút Điều Hướng Trái */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Slide trước"
                className="absolute left-1.5 sm:left-2.5 md:left-3.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 sm:w-7 sm:h-7 md:w-11 md:h-11 rounded-full bg-[#8B181B]/85 hover:bg-[#8B181B] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 stroke-[2.5]" />
              </button>

              {/* Nút Điều Hướng Phải */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Slide tiếp theo"
                className="absolute right-1.5 sm:right-2.5 md:right-3.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 sm:w-7 sm:h-7 md:w-11 md:h-11 rounded-full bg-[#8B181B]/85 hover:bg-[#8B181B] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
              </button>

              {/* Dấu chấm chỉ số slide (Dots indicator) */}
              <div className="absolute bottom-1.5 sm:bottom-2.5 md:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-2.5 md:py-1 rounded-full bg-black/40 backdrop-blur-sm">
                {bannerSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Chuyển đến slide ${idx + 1}`}
                    className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                        ? "w-3 sm:w-4 md:w-6 bg-white"
                        : "w-1 sm:w-1.5 md:w-2 bg-white/50 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Tiêu đề / Caption dưới ảnh - Cố định chính xác chiều cao để không bị giật layout khi text dài/ngắn */}
            <div className="mt-2 sm:mt-2.5 md:mt-3.5 h-[34px] sm:h-[46px] md:h-[58px] lg:h-[68px] flex items-start overflow-hidden">
              <Link
                href={bannerSlides[currentSlide]?.href || "#"}
                className="block group w-full"
              >
                <h2 className="text-[11px] sm:text-sm md:text-lg lg:text-[22px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors duration-200 leading-[1.25] sm:leading-[1.3] md:leading-[1.4] line-clamp-2">
                  {bannerSlides[currentSlide]?.title}
                </h2>
              </Link>
            </div>
          </div>

          {/* Cột Phải (~35%): Khối TIN HOẠT ĐỘNG (Có Scroll) */}
          <div className="col-span-4 bg-white border border-gray-200 rounded sm:rounded-md shadow-sm overflow-hidden flex flex-col h-full max-h-[175px] sm:max-h-[285px] md:max-h-[420px] lg:max-h-[515px]">
            {/* Thanh Tiêu Đề Khối */}
            <div className="bg-[#242A68] text-white px-2 py-1.5 sm:px-3 sm:py-2.5 md:px-4 md:py-3 flex items-center justify-center gap-1 sm:gap-2 md:gap-2.5 shadow-sm select-none shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3050 1450"
                className="w-3.5 sm:w-4 md:w-6 h-auto shrink-0 fill-white"
                aria-hidden="true"
              >
                <g fill="currentColor">
                  <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
                  <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
                  <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
                </g>
              </svg>
              <h3 className="text-[10px] sm:text-xs md:text-[16px] lg:text-[18px] font-bold uppercase tracking-wider text-white">
                TIN HOẠT ĐỘNG
              </h3>
            </div>

            {/* Danh Sách Tin Hoạt Động (Scrollable với thanh cuộn đỏ) */}
            <div className="overflow-y-auto custom-scrollbar-red p-2 sm:p-3 md:p-4 lg:p-5 flex-1 flex flex-col divide-y divide-gray-200">
              {activityNews.map((news) => (
                <Link
                  key={news.id}
                  href={news.href}
                  className="py-1.5 sm:py-2.5 md:py-3.5 first:pt-0 last:pb-0 group block"
                >
                  <p className="text-[9px] sm:text-xs md:text-[14px] lg:text-[16px] font-semibold text-gray-900 group-hover:text-[#DA251C] transition-colors duration-150 leading-[1.25] sm:leading-[1.3] md:leading-snug line-clamp-2">
                    {news.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Khối 2 Banner: Cuộc thi chính luận & Thông tin tuyển sinh ──────── */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="overflow-hidden rounded shadow-sm hover:opacity-95 transition-opacity">
            <Link href="/tin-tuc/thong-bao" className="block w-full">
              <Image
                src="/baovenentang-8fe67785db.png"
                alt="Cuộc thi chính luận bảo vệ nền tảng tư tưởng của Đảng"
                width={668}
                height={120}
                className="w-full h-auto object-cover block"
              />
            </Link>
          </div>
          <div className="overflow-hidden rounded shadow-sm hover:opacity-95 transition-opacity">
            <Link href="/dao-tao&boi-duong/dao-tao-dai-hoc" className="block w-full">
              <Image
                src="/ThongTinTuyenSinh-599f70999b.png"
                alt="Thông tin tuyển sinh đào tạo, bồi dưỡng"
                width={668}
                height={120}
                className="w-full h-auto object-cover block"
              />
            </Link>
          </div>
        </div>

        {/* ─── Khối ĐÀO TẠO ────────────────────────────────────────────── */}
        <section className="mt-6 md:mt-8 border-t-[5px] border-[#DA251C] pt-4 md:pt-5">
          {/* Tiêu đề mục ĐÀO TẠO */}
          <div className="flex items-center gap-2.5 text-gray-900 mb-5 md:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3050 1450"
              className="w-5 md:w-6 h-auto shrink-0 fill-gray-400"
              aria-hidden="true"
            >
              <g fill="currentColor">
                <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
                <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
                <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
              </g>
            </svg>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900">
              ĐÀO TẠO
            </h2>
          </div>

          {/* Lưới 4 Khối Đào tạo: Đào tạo Đại học, Đào tạo Thạc sĩ, Đào tạo Tiến sĩ, Ba công khai */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Cột 1: ĐÀO TẠO ĐẠI HỌC */}
            <div className="flex flex-col">
              {/* Tiêu đề cột */}
              <div className="flex items-center gap-3 mb-3.5">
                <h3 className="text-[18px] md:text-[20px] font-bold uppercase text-gray-900 whitespace-nowrap">
                  ĐÀO TẠO ĐẠI HỌC
                </h3>
                <span className="h-[2px] bg-[#DA251C] flex-1"></span>
              </div>

              {/* Hộp nội dung Đào tạo đại học (Chiều cao cố định chuẩn, ẩn thanh scroll) */}
              <div className="bg-[#f8f9fa] border border-gray-100 rounded-sm p-4 md:p-5 flex flex-col h-[380px] md:h-[400px]">
                {/* Tin nổi bật với logo APAG */}
                <Link
                  href="/dao-tao&boi-duong/dao-tao-dai-hoc"
                  className="grid grid-cols-12 gap-3.5 sm:gap-4 items-center group shrink-0 pb-3.5 border-b border-gray-200/80"
                >
                  <div className="col-span-5 relative aspect-[16/10] bg-white border border-[#234A85] rounded-sm overflow-hidden flex items-center justify-center p-2 shadow-2xs">
                    <Image
                      src="/slide/noimage.png"
                      alt="APAG Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="col-span-7">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                      Thông báo tổ chức đăng ký các lớp học phần đợt 1 học kỳ III năm học 2026 - 2027 các lớp đại học hình thức chính quy, tại trụ sở Hà Nội
                    </h4>
                  </div>
                </Link>

                {/* Danh sách tin dạng bullet (Ẩn scrollbar nhưng vẫn cuộn được) */}
                <div className="overflow-y-auto trang-chu-scroll-hide flex-1 flex flex-col gap-3.5 pt-3.5">
                  <Link
                    href="/dao-tao&boi-duong/dao-tao-dai-hoc"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-[#1E2A6E] group-hover:text-[#DA251C] transition-colors leading-snug">
                      Thông báo danh sách dự kiến công nhận tốt nghiệp trình độ đại học đợt 3 năm 2026 cho sinh viên hình thức chính quy và song bằng trúng tuyển năm 2020, 2021 học tại trụ sở Hà Nội
                    </p>
                  </Link>

                  <Link
                    href="/nghien-cuu-khoa-hoc"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Quyết định số 3474-QĐ/HVHCQTC ngày 28/8/2026 của Giám đốc Học viện Hành chính và Quản trị công phê duyệt danh mục đề tài nghiên cứu khoa học của sinh viên Học viện Hành chính và Quản trị công năm học 2026-2027
                    </p>
                  </Link>

                  <Link
                    href="/dao-tao&boi-duong/dao-tao-dai-hoc"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Kế hoạch Tổ chức thi, chấm thi kết thúc học phần học kỳ II năm học 2025-2026 các lớp đại học liên thông hình thức đào tạo chính quy và các lớp đại học, đại học liên thông hình thức đào tạo vừa làm vừa học
                    </p>
                  </Link>

                  <Link
                    href="/tin-tuc/tin-hoat-dong"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Hơn 3.000 tân sinh viên năm 2026 nô nức nhập học tại Học viện Hành chính và Quản trị công
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cột 2: ĐÀO TẠO THẠC SĨ */}
            <div className="flex flex-col">
              {/* Tiêu đề cột */}
              <div className="flex items-center gap-3 mb-3.5">
                <h3 className="text-[18px] md:text-[20px] font-bold uppercase text-gray-900 whitespace-nowrap">
                  ĐÀO TẠO THẠC SĨ
                </h3>
                <span className="h-[2px] bg-[#DA251C] flex-1"></span>
              </div>

              {/* Hộp nội dung Đào tạo thạc sĩ (Chiều cao cố định chuẩn, ẩn thanh scroll) */}
              <div className="bg-[#f8f9fa] border border-gray-100 rounded-sm p-4 md:p-5 flex flex-col h-[380px] md:h-[400px]">
                {/* Tin nổi bật với logo APAG */}
                <Link
                  href="/dao-tao&boi-duong/dao-tao-thac-si"
                  className="grid grid-cols-12 gap-3.5 sm:gap-4 items-center group shrink-0 pb-3.5 border-b border-gray-200/80"
                >
                  <div className="col-span-5 relative aspect-[16/10] bg-white border border-[#234A85] rounded-sm overflow-hidden flex items-center justify-center p-2 shadow-2xs">
                    <Image
                      src="/slide/noimage.png"
                      alt="APAG Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="col-span-7">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                      Kế hoạch Tổ chức thi, chấm thi kết thúc học phần học kỳ II các lớp trúng tuyển đào tạo trình độ thạc sĩ định hướng ứng dụng đợt 2 năm 2025 tại Hà Nội
                    </h4>
                  </div>
                </Link>

                {/* Danh sách tin dạng bullet (Ẩn scrollbar nhưng vẫn cuộn được) */}
                <div className="overflow-y-auto trang-chu-scroll-hide flex-1 flex flex-col gap-3.5 pt-3.5">
                  <Link
                    href="/dao-tao&boi-duong/dao-tao-thac-si"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-[#1E2A6E] group-hover:text-[#DA251C] transition-colors leading-snug">
                      Danh mục ngành và Chương trình bổ sung kiến thức dự tuyển các ngành trình độ thạc sĩ của Học viện Hành chính và Quản trị công
                    </p>
                  </Link>

                  <Link
                    href="/dao-tao&boi-duong/dao-tao-thac-si"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Chuẩn đầu ra và chương trình đào tạo các ngành trình độ thạc sĩ định hướng ứng dụng (cập nhật tháng 6/2026)
                    </p>
                  </Link>

                  <Link
                    href="/tin-tuc/cong-khai-tai-chinh"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Thông báo Điều chỉnh mức thu học phí đối với khóa trúng tuyển năm 2025
                    </p>
                  </Link>

                  <Link
                    href="/dao-tao&boi-duong/dao-tao-thac-si"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1E2A6E] shrink-0 mt-2"></span>
                    <p className="text-[15px] md:text-[16.5px] font-medium text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                      Học viện Hành chính và Quản trị công thúc đẩy triển khai hợp tác với Đại học Philippines
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            KHỐI CHÍNH 2 CỘT: 
            - CỘT TRÁI: NGHIÊN CỨU KHOA HỌC & HỢP TÁC QUỐC TẾ
            - CỘT PHẢI: VIDEO & BANNER HÌNH ẢNH (SIDEBAR)
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="mt-10 sm:mt-12 md:mt-16 border-t-[5px] border-[#DA251C] pt-6 md:pt-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ── CỘT TRÁI (Chiếm 8/12 cột trên màn hình lớn) ── */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* 1. MỤC: NGHIÊN CỨU KHOA HỌC */}
              <div>
                {/* Tiêu đề mục */}
                <div className="flex items-center gap-2.5 text-gray-900 mb-5 md:mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3050 1450"
                    className="w-5 md:w-6 h-auto shrink-0 fill-gray-400"
                    aria-hidden="true"
                  >
                    <g fill="currentColor">
                      <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
                      <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
                      <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
                    </g>
                  </svg>
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900">
                    NGHIÊN CỨU KHOA HỌC
                  </h2>
                </div>

                {/* Nội dung 2 cột nhỏ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Cột con 1: Bài nổi bật lớn */}
                  <div className="flex flex-col">
                    <Link
                      href={scienceResearchFeatured.href}
                      className="block group"
                    >
                      <div className="relative aspect-[16/11] bg-white border border-[#234A85] rounded-sm overflow-hidden flex items-center justify-center p-3 shadow-2xs mb-3">
                        <Image
                          src={scienceResearchFeatured.image}
                          alt={scienceResearchFeatured.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug">
                        {scienceResearchFeatured.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[14px] md:text-[15px] mt-2.5">
                      <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{scienceResearchFeatured.time}</span>
                    </div>
                  </div>

                  {/* Cột con 2: Danh sách 3 bài nhỏ + Xem thêm */}
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4">
                      {scienceResearchList.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="grid grid-cols-12 gap-3.5 items-start group"
                        >
                          <div className="col-span-4 relative aspect-[4/3] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="col-span-8">
                            <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                              {item.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="flex justify-end pt-3">
                      <Link
                        href="/nghien-cuu-khoa-hoc"
                        className="text-[#DA251C] text-[15px] md:text-[16px] font-normal italic hover:underline flex items-center gap-0.5"
                      >
                        Xem thêm &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. MỤC: HỢP TÁC QUỐC TẾ */}
              <div className="border-t-[5px] border-[#DA251C] pt-6 md:pt-7">
                {/* Tiêu đề mục */}
                <div className="flex items-center gap-2.5 text-gray-900 mb-5 md:mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3050 1450"
                    className="w-5 md:w-6 h-auto shrink-0 fill-gray-400"
                    aria-hidden="true"
                  >
                    <g fill="currentColor">
                      <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
                      <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
                      <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
                    </g>
                  </svg>
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900">
                    HỢP TÁC QUỐC TẾ
                  </h2>
                </div>

                {/* Nội dung 2 cột nhỏ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Cột con 1: Bài nổi bật có tóm tắt chi tiết */}
                  <div className="flex flex-col">
                    <Link
                      href={internationalCoopFeatured.href}
                      className="block group"
                    >
                      <div className="relative aspect-[16/10] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 mb-3 shadow-2xs">
                        <Image
                          src={internationalCoopFeatured.image}
                          alt={internationalCoopFeatured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1E2A6E] group-hover:text-[#DA251C] transition-colors leading-snug">
                        {internationalCoopFeatured.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[14px] md:text-[15px] mt-2.5 mb-2.5">
                      <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{internationalCoopFeatured.time}</span>
                    </div>
                    <p className="text-[15px] md:text-[17px] text-gray-700 text-justify leading-relaxed">
                      {internationalCoopFeatured.excerpt}
                    </p>
                  </div>

                  {/* Cột con 2: Danh sách 3 bài nhỏ + Xem thêm */}
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4">
                      {internationalCoopList.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="grid grid-cols-12 gap-3.5 items-start group"
                        >
                          <div className="col-span-4 relative aspect-[4/3] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="col-span-8">
                            <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                              {item.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="flex justify-end pt-3">
                      <Link
                        href="/hop-tac-quoc-te"
                        className="text-[#DA251C] text-[15px] md:text-[16px] font-normal italic hover:underline flex items-center gap-0.5"
                      >
                        Xem thêm &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── CỘT PHẢI (SIDEBAR: Chiếm 4/12 cột trên màn hình lớn) ── */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* 1. Video Player */}
              <div className="relative aspect-video w-full rounded-xs overflow-hidden bg-black shadow-2xs">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/pVjV3WbsUD0"
                  title="Học viện Hành chính và Quản trị công"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* 2. Banner: Thư viện */}
              <Link
                href="/hoc-lieu/thu-vien"
                className="block w-full hover:opacity-95 transition-opacity"
              >
                <Image
                  src="/nc&ht/bot04_0e730e44ad--1-d5e15cc0b7.png"
                  alt="Thư viện"
                  width={597}
                  height={258}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </Link>

              {/* 3. Banner: Tạp chí Quản lý nhà nước */}
              <Link
                href="/tin-tuc/thong-tin-hanh-chinh"
                className="block w-full hover:opacity-95 transition-opacity"
              >
                <Image
                  src="/nc&ht/bot03_8abd6ad603--1-1c8704e114.png"
                  alt="Tạp chí Quản lý nhà nước"
                  width={594}
                  height={216}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </Link>

              {/* 4. Banner: Hỗ trợ học trực tuyến */}
              <div className="w-full">
                <Image
                  src="/nc&ht/hotro-b439c3ce9c.png"
                  alt="Hỗ trợ học trực tuyến"
                  width={595}
                  height={249}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </div>

              {/* 5. Banner: Tuyển sinh năm 2026 */}
              <Link
                href="/dao-tao&boi-duong/dao-tao-dai-hoc"
                className="block w-full hover:opacity-95 transition-opacity"
              >
                <Image
                  src="/nc&ht/tuyensinh-2026-cfd7a24819.png"
                  alt="APAG Tuyển sinh năm 2026"
                  width={2560}
                  height={1705}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </Link>

              {/* 6. Banner: STRIVE */}
              <div className="w-full">
                <Image
                  src="/nc&ht/Logo-STRIVE-scaled-404-fbeb211ecf.png"
                  alt="STRIVE Project"
                  width={404}
                  height={110}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </div>

              {/* 7. Banner: Internationalization Virtual Centre - Hanoi University (Blue) */}
              <div className="w-full">
                <Image
                  src="/nc&ht/logo-ivc-scaled404-2f609c3ec2.png"
                  alt="Internationalization Virtual Centre"
                  width={404}
                  height={71}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </div>

              {/* 8. Banner: Internationalization Virtual Centre - Hanoi University (Map) */}
              <div className="w-full">
                <Image
                  src="/nc&ht/logo-ivc2-scaled404-e6ac56b85b.png"
                  alt="Internationalization Virtual Centre Global"
                  width={404}
                  height={71}
                  className="w-full h-auto block rounded-xs shadow-2xs"
                />
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            KHỐI: CÔNG TÁC ĐẢNG - ĐOÀN THỂ
            ═══════════════════════════════════════════════════════════════════════ */}
        <section className="mt-10 sm:mt-12 md:mt-16 border-t-[5px] border-[#DA251C] pt-6 md:pt-8 mb-12 sm:mb-16">
          {/* Tiêu đề mục */}
          <div className="flex items-center gap-2.5 text-gray-900 mb-6 md:mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3050 1450"
              className="w-5 md:w-6 h-auto shrink-0 fill-gray-400"
              aria-hidden="true"
            >
              <g fill="currentColor">
                <path d="M1441 1383 c-96 -106 -250 -221 -361 -268 -19 -9 -46 -22 -60 -29 -14 -8 -52 -21 -85 -31 -33 -10 -76 -22 -95 -28 -21 -7 -199 -13 -435 -16 l-400 -6 -3 -79 c-2 -57 1 -82 10 -87 7 -5 152 -9 323 -9 308 0 541 16 587 41 11 6 44 17 75 25 127 33 332 151 447 256 28 26 57 48 63 48 7 0 37 -21 67 -47 77 -68 99 -83 203 -145 146 -86 311 -144 473 -164 138 -17 738 -19 775 -2 23 10 25 16 25 79 0 43 -5 71 -12 76 -7 4 -197 11 -423 14 l-410 6 -95 30 c-120 38 -256 104 -335 164 -22 16 -51 37 -65 47 -13 9 -60 52 -102 95 -52 51 -86 77 -101 77 -14 0 -38 -17 -66 -47z" />
                <path d="M1431 960 c-68 -78 -231 -199 -336 -250 -44 -22 -123 -54 -175 -71 l-95 -32 -390 -4 c-214 -2 -400 -6 -412 -8 -21 -5 -23 -11 -23 -80 0 -48 4 -77 13 -82 6 -4 179 -6 382 -5 377 3 509 13 572 45 15 8 43 18 61 22 84 18 322 158 427 252 31 27 53 39 64 36 9 -4 41 -28 71 -54 53 -45 151 -113 221 -153 87 -50 259 -113 344 -127 33 -5 66 -11 72 -14 7 -2 189 -5 403 -5 292 -1 395 1 405 10 10 9 15 32 15 75 0 54 -3 63 -22 73 -16 8 -154 13 -428 15 l-405 4 -95 32 c-136 46 -283 124 -378 198 -36 29 -151 143 -160 159 -4 8 -24 17 -43 20 -32 4 -38 0 -88 -56z" />
                <path d="M1397 519 c-49 -49 -107 -102 -129 -117 -103 -69 -124 -82 -138 -88 -8 -3 -37 -17 -65 -30 -187 -88 -260 -99 -695 -99 -190 0 -351 -4 -357 -8 -9 -5 -13 -33 -13 -78 l0 -69 418 0 c444 0 467 2 613 52 36 13 72 28 80 34 8 6 29 16 47 22 18 6 46 20 61 32 16 11 32 20 36 20 10 0 92 59 171 122 39 32 77 58 85 58 8 0 42 -23 74 -51 154 -132 378 -244 557 -280 54 -11 866 -13 894 -2 10 4 14 22 14 62 0 87 14 84 -395 86 -375 2 -463 10 -580 51 -121 43 -289 134 -362 197 -39 34 -138 132 -155 155 -34 42 -65 29 -161 -69z" />
              </g>
            </svg>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900">
              CÔNG TÁC ĐẢNG - ĐOÀN THỂ
            </h2>
          </div>

          {/* Phần 1: Bài nổi bật lớn (2 cột: Ảnh lớn + Tiêu đề & Tóm tắt) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start mb-6 md:mb-8">
            <Link
              href={partyWorkFeatured.href}
              className="block group overflow-hidden"
            >
              <div className="relative aspect-[16/10] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shadow-2xs">
                <Image
                  src={partyWorkFeatured.image}
                  alt={partyWorkFeatured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            <div className="flex flex-col">
              <Link
                href={partyWorkFeatured.href}
                className="group block"
              >
                <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1E2A6E] group-hover:text-[#DA251C] transition-colors leading-snug">
                  {partyWorkFeatured.title}
                </h3>
              </Link>
              <div className="flex items-center gap-1.5 text-gray-500 text-[14px] md:text-[15px] mt-2.5 mb-3">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{partyWorkFeatured.time}</span>
              </div>
              <p className="text-[16px] md:text-[18px] text-gray-700 text-justify leading-relaxed">
                {partyWorkFeatured.excerpt}
              </p>
            </div>
          </div>

          {/* Phần 2: Lưới 4 bài viết nhỏ (2 cột x 2 hàng) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-5 md:gap-y-6 items-start">
            {/* Cột con 1: 2 bài */}
            <div className="flex flex-col gap-5 md:gap-6">
              {partyWorkListCol1.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="grid grid-cols-12 gap-3.5 items-start group"
                >
                  <div className="col-span-4 relative aspect-[4/3] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="col-span-8">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Cột con 2: 2 bài */}
            <div className="flex flex-col gap-5 md:gap-6">
              {partyWorkListCol2.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="grid grid-cols-12 gap-3.5 items-start group"
                >
                  <div className="col-span-4 relative aspect-[4/3] rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="col-span-8">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-gray-900 group-hover:text-[#DA251C] transition-colors leading-snug line-clamp-3">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Nút Xem thêm */}
          <div className="flex justify-end pt-3">
            <Link
              href="/tin-tuc/tin-hoat-dong"
              className="text-[#DA251C] text-[15px] md:text-[16px] font-normal italic hover:underline flex items-center gap-0.5"
            >
              Xem thêm &gt;&gt;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

