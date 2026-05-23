// ============================================================
// AUTH TYPES
// Định nghĩa kiểu dữ liệu cho API xác thực
// ============================================================

import { UserRole } from '../../../constants/auth.constants';

// ── Request ────────────────────────────────────────────────

export interface LoginRequest {
  username: string;
  password: string;
  role    : UserRole;
}

// ── Response (khớp với shape BE trả về) ────────────────────
// BE trả về dạng phẳng, không có nested user object

export interface LoginResponse {
  accessToken  : string;
  refreshToken : string;
  tokenType    : string;      // "Bearer"
  expiresIn    : number;      // seconds
  userId       : number;
  username     : string;
  fullName     : string;
  authorities  : string[];    // ["USER_DELETE", "USER_CREATE", ...]
  roles        : string[];    // ["ADMIN"]
}

// ── AuthUser – shape lưu trong Redux ───────────────────────

export interface AuthUser {
  userId      : number;
  username    : string;
  fullName    : string;
  roles       : string[];
  authorities : string[];
}

// ── Error ──────────────────────────────────────────────────

export interface ApiError {
  code   : string;
  message: string;
}
