import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vie", "en"],
  defaultLocale: "vie",
  localeDetection: false,
});