// ============================================================
// HTTP CLIENT
// Wrapper axios/fetch dùng chung toàn app
// Thêm interceptor token, xử lý lỗi tập trung tại đây
// ============================================================

const BASE_URL = 'http://localhost:8081'; // TODO: chuyển sang biến môi trường (process.env.EXPO_PUBLIC_API_URL)

// ── Generic request helper ─────────────────────────────────

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  token?: string;
}

export async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', body, token } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    // Ném lỗi có cấu trúc để các service bắt được
    throw {
      code: data?.code ?? String(response.status),
      message: data?.message ?? 'Lỗi không xác định từ máy chủ.',
    };
  }

  return data as T;
}
