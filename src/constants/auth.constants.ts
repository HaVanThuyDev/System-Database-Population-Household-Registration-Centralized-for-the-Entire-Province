
export enum UserRole {
  PROVINCE = 'province',
  COMMUNE  = 'commune', 
}

export const ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.PROVINCE]: 'Cấp Tỉnh',
  [UserRole.COMMUNE]:  'Cấp Xã',
};

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS : 'Tên đăng nhập hoặc mật khẩu không đúng.',
  ACCOUNT_LOCKED      : 'Tài khoản đã bị khóa. Vui lòng liên hệ quản trị viên.',
  NETWORK_ERROR       : 'Không thể kết nối đến máy chủ. Vui lòng thử lại.',
  UNKNOWN             : 'Đã xảy ra lỗi không xác định.',
} as const;

export const SUPPORT_PHONE = '1900 8888';
export const SUPPORT_EMAIL = 'hotro@chinhphu.vn';
