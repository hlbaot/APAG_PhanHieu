import "@/scss/home/home.scss";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
      <Image
        src="/apag-logo.png"
        alt="Học viện Hành chính và Quản trị công - APAG"
        width={360}
        height={104}
        priority
      />
    </main>
  );
}
