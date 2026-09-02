"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Eye, EyeOff, RotateCw, Loader2, ArrowLeft } from "lucide-react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaImageUrl, setCaptchaImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Gọi API thật để lấy ảnh captcha mới
  const fetchCaptcha = async () => {
    setCaptchaInput("");
    try {
      // TODO: gọi API GET /api/auth/captcha để lấy ảnh + token captcha
      // const res = await fetch("/api/auth/captcha");
      // const data = await res.json();
      // setCaptchaImageUrl(data.imageUrl);

      // Tạm giữ chỗ — sẽ thay bằng URL từ API khi backend sẵn sàng
      setCaptchaImageUrl(null);
    } catch {
      setErrorMessage("Không thể tải mã xác nhận. Vui lòng thử lại.");
    }
  };

  // Gọi API đăng nhập thật
  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      // TODO: POST /api/auth/login với { username, password, captcha: captchaInput }
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ username, password, captcha: captchaInput }),
      // });
      // if (!res.ok) {
      //   const err = await res.json();
      //   throw new Error(err.message || "Đăng nhập thất bại");
      // }
      // const data = await res.json();
      // // xử lý token, redirect sau login thành công
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Đã có lỗi xảy ra. Vui lòng thử lại.";
      setErrorMessage(message);
      await fetchCaptcha(); // refresh captcha khi login thất bại
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate cơ bản phía client
    if (!username.trim()) {
      setErrorMessage("Vui lòng nhập tài khoản.");
      return;
    }
    if (!password) {
      setErrorMessage("Vui lòng nhập mật khẩu.");
      return;
    }
    if (!captchaInput.trim()) {
      setErrorMessage("Vui lòng nhập mã xác nhận.");
      return;
    }

    handleLogin();
  };

  return (
    /*
     * Trang trắng toàn màn hình, có hoạ tiết trống đồng làm background trang trí
     * ở giữa/phải màn hình với opacity thấp (~10-12%)
     */
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white px-4 py-8 overflow-hidden">

      {/* ── Hoạ tiết trống đồng làm nền trang (mờ nhẹ) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0"
      >
        <Image
          src="/trong-dong-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
          style={{ opacity: 0.15 }}
          priority
        />
      </div>

      {/* ── Login Card ── */}
      <div className="relative z-10 w-full max-w-[620px] rounded-xl shadow-2xl overflow-hidden border border-gray-100">

        {/* ── Card Header (nền đỏ + vân trống đồng chìm) ── */}
        <div className="relative bg-[#C41E2A] px-8 py-7 flex flex-col items-center gap-4 overflow-hidden">

          {/* Nút Quay lại — góc trên trái */}
          <Link
            href="/"
            className="absolute top-3 left-4 z-20 inline-flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            <span>Quay lại</span>
          </Link>
          {/* Vân trống đồng chìm trên nền đỏ */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center mix-blend-multiply opacity-35"
          >
            <Image
              src="/trong-dong-bg.jpg"
              alt=""
              width={700}
              height={700}
              className="w-full h-full object-cover scale-125"
              priority
            />
          </div>

          {/* Logo box */}
          <div className="relative z-10 bg-white rounded-xl shadow-md px-8 py-3.5 flex items-center justify-center min-w-[160px] max-w-[200px] h-20">
            <Image
              src="/apag-login.png"
              alt="APAG Logo"
              width={160}
              height={60}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* School name */}
          <p className="relative z-10 text-white font-extrabold text-sm sm:text-base uppercase tracking-wide text-center leading-snug drop-shadow-sm">
            HỌC VIỆN HÀNH CHÍNH VÀ QUẢN TRỊ CÔNG
          </p>
        </div>

        {/* ── Card Body (white) ── */}
        <div className="bg-white px-8 py-7">

          {/* Title */}
          <h1 className="text-center font-bold text-xl text-gray-900 uppercase tracking-widest mb-1">
            Đăng nhập
          </h1>

          {/* User icon */}
          <div className="flex justify-center mb-5">
            <User className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="mb-4 px-4 py-2.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">

            {/* Username */}
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Tài khoản (*)"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-md bg-gray-100 text-sm text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C41E2A]/50 focus:border-[#C41E2A] transition-all disabled:opacity-60"
            />

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu (*)"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-2.5 pr-11 rounded-md bg-gray-100 text-sm text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C41E2A]/50 focus:border-[#C41E2A] transition-all disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                className="absolute right-3 inset-y-0 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-4.5 h-4.5" strokeWidth={1.8} />
                ) : (
                  <Eye className="w-4.5 h-4.5" strokeWidth={1.8} />
                )}
              </button>
            </div>

            {/* Captcha row */}
            <div className="flex gap-2 items-center">
              {/* Captcha image + reload */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div
                  className="w-[110px] h-[38px] rounded border border-dashed border-blue-300 bg-blue-50/60 flex items-center justify-center overflow-hidden text-blue-600 font-mono text-base italic font-bold tracking-widest select-none"
                  aria-label="Ảnh mã xác nhận"
                >
                  {captchaImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={captchaImageUrl}
                      alt="Captcha"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    // Placeholder khi chưa có captcha từ API
                    <span className="opacity-60 text-sm">&nbsp;&nbsp;captcha&nbsp;&nbsp;</span>
                  )}
                </div>

                {/* Reload captcha button */}
                <button
                  type="button"
                  onClick={fetchCaptcha}
                  disabled={isLoading}
                  aria-label="Làm mới mã xác nhận"
                  className="p-1.5 text-gray-500 hover:text-[#C41E2A] transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RotateCw className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>

              {/* Captcha input */}
              <input
                id="captchaInput"
                name="captchaInput"
                type="text"
                placeholder="Nhập mã xác nhận"
                autoComplete="off"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 min-w-0 px-3 py-2.5 rounded-md bg-gray-100 text-sm text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C41E2A]/50 focus:border-[#C41E2A] transition-all disabled:opacity-60"
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#C41E2A] hover:bg-[#a51824] active:bg-[#8b1520] text-white font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C41E2A]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang xử lý...</span>
                  </>
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
