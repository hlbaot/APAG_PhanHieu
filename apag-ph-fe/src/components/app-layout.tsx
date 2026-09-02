"use client";

import { usePathname } from "@/i18n/navigation";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname.startsWith("/login/");

  if (isLoginPage) {
    return <main className="w-full min-h-screen flex flex-col bg-slate-50">{children}</main>;
  }

  return (
    <>
      <Banner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
