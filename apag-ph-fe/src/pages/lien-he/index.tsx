"use client";

import { useState, useEffect, useCallback } from "react";
import { MapPin, Phone, Mail, Globe, Loader2, Send, KeyRound } from "lucide-react";
import "@/scss/lien-he/lien-he.scss";

// ─── Constants ───────────────────────────────────────────────────────────────
const OTP_COOLDOWN_SECONDS = 60;

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormState {
  hoTen: string;
  dienThoai: string;
  fax: string;
  email: string;
  tenCongTy: string;
  tieuDe: string;
  otpInput: string;
  noiDung: string;
}

const EMPTY_FORM: FormState = {
  hoTen: "",
  dienThoai: "",
  fax: "",
  email: "",
  tenCongTy: "",
  tieuDe: "",
  otpInput: "",
  noiDung: "",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// ─── Component ───────────────────────────────────────────────────────────────
export default function LienHePage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [cooldown, setCooldown] = useState(0); // giây đếm ngược
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Countdown timer cho nút OTP
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrorMessage(null);
    },
    []
  );

  // ── Gửi OTP ─────────────────────────────────────────────────────────────
  const handleRequestOtp = async () => {
    setErrorMessage(null);
    if (!form.email.trim()) {
      setErrorMessage("Vui lòng nhập email trước khi nhận mã OTP.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setErrorMessage("Địa chỉ email không hợp lệ.");
      return;
    }

    setIsLoadingOtp(true);
    try {
      // TODO: POST /api/contact/send-otp với { email: form.email }
      // const res = await fetch("/api/contact/send-otp", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: form.email }),
      // });
      // if (!res.ok) {
      //   const err = await res.json();
      //   throw new Error(err.message ?? "Gửi OTP thất bại.");
      // }

      setOtpSent(true);
      setCooldown(OTP_COOLDOWN_SECONDS);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Không thể gửi mã OTP. Vui lòng thử lại."
      );
    } finally {
      setIsLoadingOtp(false);
    }
  };

  // ── Submit form ──────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validate bắt buộc
    if (!form.hoTen.trim()) return setErrorMessage("Vui lòng nhập Họ và Tên.");
    if (!form.dienThoai.trim()) return setErrorMessage("Vui lòng nhập Điện thoại.");
    if (!form.email.trim() || !isValidEmail(form.email))
      return setErrorMessage("Vui lòng nhập địa chỉ Email hợp lệ.");
    if (!form.otpInput.trim()) return setErrorMessage("Vui lòng nhập mã OTP.");
    if (!form.noiDung.trim()) return setErrorMessage("Vui lòng nhập Nội dung.");

    setIsSubmitting(true);
    try {
      // TODO: POST /api/contact/submit với toàn bộ dữ liệu form + otpInput
      // const res = await fetch("/api/contact/submit", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...form }),
      // });
      // if (!res.ok) {
      //   const err = await res.json();
      //   throw new Error(err.message ?? "Gửi liên hệ thất bại.");
      // }

      setSuccessMessage("Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất có thể.");
      setForm(EMPTY_FORM);
      setOtpSent(false);
      setCooldown(0);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Có lỗi xảy ra. Vui lòng thử lại."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C41E2A]/30 focus:border-[#C41E2A] transition-all disabled:opacity-60";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Grid 2 cột ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Cột trái: Google Maps ────────────────────────────────────────── */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Bản đồ</h2>
          {/*
            Để lấy embed code thật:
            1. Vào https://maps.google.com và tìm địa chỉ
            2. Click "Chia sẻ" → "Nhúng bản đồ"
            3. Copy toàn bộ src="..." trong thẻ <iframe>
            4. Thay đoạn URL dưới đây bằng src đó
          */}
          <iframe
            title="Bản đồ Học viện Hành chính và Quản trị công"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.387!2d105.8304!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9898e1b3d3%3A0x9f085f4d57dde2e!2zSOG7jWMgdmnhu4duIEjDoG5oIGNoaW5oIHbDoCBRdeG6o24gdHLhu4sgY8O0bmcgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s"
            className="lien-he-map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ── Cột phải: Form liên hệ ──────────────────────────────────────── */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Gửi liên hệ</h2>

          {/* Alert messages */}
          {errorMessage && (
            <div className="mb-4 px-4 py-2.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 px-4 py-2.5 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Hàng 1: Họ và Tên | Điện thoại */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="hoTen"
                type="text"
                placeholder="Họ và Tên"
                value={form.hoTen}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                name="dienThoai"
                type="tel"
                placeholder="Điện thoại"
                value={form.dienThoai}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>

            {/* Hàng 2: Fax | Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="fax"
                type="text"
                placeholder="Fax"
                value={form.fax}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>

            {/* Hàng 3: Tên công ty | Tiêu đề */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="tenCongTy"
                type="text"
                placeholder="Tên công ty"
                value={form.tenCongTy}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                name="tieuDe"
                type="text"
                placeholder="Tiêu đề"
                value={form.tieuDe}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>

            {/* Hàng 4: OTP input + nút Nhận mã */}
            <div className="flex gap-2 items-stretch">
              <div className="relative flex-1 min-w-0">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  name="otpInput"
                  type="text"
                  inputMode="numeric"
                  placeholder="Nhập mã OTP nhận được từ email"
                  autoComplete="one-time-code"
                  value={form.otpInput}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputClass} pl-9`}
                />
              </div>
              <button
                type="button"
                onClick={handleRequestOtp}
                disabled={isLoadingOtp || cooldown > 0 || isSubmitting}
                className="otp-btn-countdown flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-[#2E7D32] hover:bg-[#256327] active:bg-[#1b4d20] text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoadingOtp ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : cooldown > 0 ? (
                  `Gửi lại (${cooldown}s)`
                ) : otpSent ? (
                  "Gửi lại OTP"
                ) : (
                  "Nhận mã OTP từ email"
                )}
              </button>
            </div>

            {/* Nội dung */}
            <textarea
              name="noiDung"
              placeholder="Nội dung"
              value={form.noiDung}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={6}
              className={`${inputClass} lien-he-textarea`}
            />

            {/* Nút Gửi đi */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-2.5 rounded-md bg-[#C41E2A] hover:bg-[#a51824] active:bg-[#8b1520] text-white font-bold text-sm uppercase tracking-wide transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C41E2A]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isSubmitting ? "Đang gửi..." : "Gửi đi"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* ── Thông tin liên hệ (full width) ─────────────────────────────────── */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Học viện Hành chính và Quản trị công
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">
              <span className="font-medium">Địa chỉ:</span> 77 Nguyễn Chí Thanh, Đống Đa, Hà Nội
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">
              <span className="font-medium">Điện thoại:</span> (0243) 7956868
              {" "}—{" "}
              <span className="font-medium">Fax:</span> (024) 38358943
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:support@gmail.com"
                className="text-blue-600 hover:underline"
              >
                support@gmail.com
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">
              <span className="font-medium">Website:</span>{" "}
              <a
                href="https://apag.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://apag.edu.vn/
              </a>
            </span>
          </li>
        </ul>
      </div>

    </section>
  );
}
