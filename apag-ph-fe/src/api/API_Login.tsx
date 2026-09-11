const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export interface LoginPayload {
  username: string;
  password: string;
  captcha?: string;
}

export interface UserResponse {
  id: number;
  username: string;
  fullName: string;
  role: string;
}

export interface AuthResponseData {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: UserResponse;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export async function loginApi(payload: LoginPayload): Promise<ApiResponse<AuthResponseData>> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Đăng nhập thất bại");
  }

  return result;
}

export async function getProfileApi(token: string): Promise<ApiResponse<UserResponse>> {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Không thể lấy thông tin tài khoản");
  }

  return result;
}

