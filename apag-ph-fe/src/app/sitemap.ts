import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://your-domain.com";

/** Các locale được hỗ trợ — phải khớp với src/i18n/routing.ts */
const locales = ["vie", "en"] as const;
type Locale = (typeof locales)[number];

/**
 * Danh sách tất cả các path tĩnh (không bao gồm route auth/login).
 * Key: đường dẫn relative (không có locale prefix).
 * Value: độ ưu tiên SEO (priority).
 */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  // Trang chủ
  { path: "",               priority: 1.0, changeFrequency: "daily" },
  { path: "trang-chu",      priority: 1.0, changeFrequency: "daily" },

  // Giới thiệu
  { path: "gioi-thieu",                                              priority: 0.9, changeFrequency: "monthly" },
  { path: "gioi-thieu/gioi-thieu-chung",                            priority: 0.8, changeFrequency: "monthly" },
  { path: "gioi-thieu/ban-giam-doc-hoc-vien",                       priority: 0.8, changeFrequency: "monthly" },
  { path: "gioi-thieu/don-vi-truc-thuoc",                           priority: 0.8, changeFrequency: "monthly" },
  { path: "gioi-thieu/lanh-dao-hoc-vien-qua-cac-thoi-ky",          priority: 0.7, changeFrequency: "monthly" },
  { path: "gioi-thieu/logo-chinh-thuc",                             priority: 0.6, changeFrequency: "yearly" },
  { path: "gioi-thieu/nhung-chang-duong-phat-trien",                priority: 0.7, changeFrequency: "monthly" },
  { path: "gioi-thieu/nhung-phan-thuong-va-danh-hieu-cao-quy",      priority: 0.7, changeFrequency: "monthly" },
  { path: "gioi-thieu/phat-bieu-cua-lanh-dao-dang-va-nha-nuoc-voi-hoc-vien", priority: 0.7, changeFrequency: "monthly" },
  { path: "gioi-thieu/phong-truyen-thong-so",                       priority: 0.7, changeFrequency: "monthly" },

  // Tin tức
  { path: "tin-tuc",                                priority: 0.9, changeFrequency: "daily" },
  { path: "tin-tuc/tin-hoat-dong",                  priority: 0.8, changeFrequency: "daily" },
  { path: "tin-tuc/thong-bao",                      priority: 0.8, changeFrequency: "weekly" },
  { path: "tin-tuc/lich-cong-tac",                  priority: 0.7, changeFrequency: "weekly" },
  { path: "tin-tuc/thong-tin-hanh-chinh",           priority: 0.7, changeFrequency: "weekly" },
  { path: "tin-tuc/cong-khai-tai-chinh",            priority: 0.7, changeFrequency: "monthly" },
  { path: "tin-tuc/tuyen-truyen-pho-bien-phap-luat", priority: 0.6, changeFrequency: "monthly" },
  { path: "tin-tuc/gop-y-du-thao-cac-van-kien-dh-xiv-cua-dang",  priority: 0.6, changeFrequency: "monthly" },
  { path: "tin-tuc/bau-cu-dai-bieu-quoc-hoi-khoa-xvi-va-dai-bieu-hdnd-cac-cap-nhiem-ky-2026-2031", priority: 0.6, changeFrequency: "monthly" },

  // Đào tạo & bồi dưỡng
  { path: "dao-tao&boi-duong",                priority: 0.9, changeFrequency: "monthly" },
  { path: "dao-tao&boi-duong/dao-tao-dai-hoc", priority: 0.8, changeFrequency: "monthly" },
  { path: "dao-tao&boi-duong/dao-tao-thac-si", priority: 0.8, changeFrequency: "monthly" },
  { path: "dao-tao&boi-duong/dao-tao-tien-si", priority: 0.8, changeFrequency: "monthly" },
  { path: "dao-tao&boi-duong/ba-cong-khai",    priority: 0.7, changeFrequency: "monthly" },

  // Nghiên cứu khoa học
  { path: "nghien-cuu-khoa-hoc", priority: 0.8, changeFrequency: "weekly" },

  // Đảm bảo chất lượng
  { path: "dam-bao-chat-luong",                    priority: 0.8, changeFrequency: "monthly" },
  { path: "dam-bao-chat-luong/dbcl-co-so-giao-duc", priority: 0.7, changeFrequency: "monthly" },
  { path: "dam-bao-chat-luong/dbcl-chuong-trinh-dt", priority: 0.7, changeFrequency: "monthly" },
  { path: "dam-bao-chat-luong/van-ban-phap-luat",    priority: 0.7, changeFrequency: "monthly" },

  // Hợp tác quốc tế
  { path: "hop-tac-quoc-te",                          priority: 0.8, changeFrequency: "monthly" },
  { path: "hop-tac-quoc-te/su-menh-tam-nhin-chien-luoc", priority: 0.7, changeFrequency: "monthly" },
  { path: "hop-tac-quoc-te/chuong-trinh-erasmus-plus",   priority: 0.7, changeFrequency: "monthly" },
  { path: "hop-tac-quoc-te/tin-tuc-htqt",               priority: 0.7, changeFrequency: "weekly" },
  { path: "hop-tac-quoc-te/hop-tac-khac",               priority: 0.6, changeFrequency: "monthly" },
  { path: "hop-tac-quoc-te/lien-he",                    priority: 0.6, changeFrequency: "monthly" },

  // Học liệu
  { path: "hoc-lieu",                    priority: 0.8, changeFrequency: "weekly" },
  { path: "hoc-lieu/thu-vien",           priority: 0.7, changeFrequency: "weekly" },
  { path: "hoc-lieu/thong-tin-tu-lieu",  priority: 0.7, changeFrequency: "weekly" },

  // Liên hệ
  { path: "lien-he", priority: 0.7, changeFrequency: "monthly" },
];

/**
 * Tạo URL đầy đủ có locale prefix.
 * Nếu path rỗng → root của locale (ví dụ: /vie, /en)
 */
function buildUrl(locale: Locale, path: string): string {
  const suffix = path ? `/${path}` : "";
  return `${BASE_URL}/${locale}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map(({ path, priority, changeFrequency }) => {
    const urls = locales.reduce<Record<string, string>>(
      (acc, locale) => {
        acc[locale] = buildUrl(locale, path);
        return acc;
      },
      {}
    );

    // Dùng locale mặc định "vie" làm canonical URL
    return {
      url: urls["vie"],
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: urls,
      },
    };
  });
}
