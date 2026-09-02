import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AppLayout from "@/components/app-layout";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG",
  description: "APAG - Academy of Public Administration and Governance",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG",
    description: "APAG - Academy of Public Administration and Governance",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Học viện Hành chính và Quản trị công - APAG",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white">
        <NextIntlClientProvider messages={messages}>
          <AppLayout>{children}</AppLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}