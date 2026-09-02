import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { notFound } from "next/navigation";

import enMessages from "../messages/en.json";
import vieMessages from "../messages/vie.json";

const messageMap: Record<string, unknown> = {
  en: enMessages,
  vie: vieMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validate locale
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  return {
    locale,
    messages: messageMap[locale] as Record<string, unknown>,
  };
});
