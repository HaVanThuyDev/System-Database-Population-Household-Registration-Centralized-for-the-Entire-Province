// ============================================================
// AUTH SLICE – Redux Toolkit
// Lưu trữ trạng thái xác thực toàn cục (token, user info)
// ============================================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser, LoginResponse } from '../../features/auth/services/auth.types';

// ── State ──────────────────────────────────────────────────

interface AuthState {
  accessToken : string | null;
  refreshToken: string | null;
  user        : AuthUser | null;
  isLoggedIn  : boolean;
}

const initialState: AuthState = {
  accessToken : null,
  refreshToken: null,
  user        : null,
  isLoggedIn  : false,
};

// ── Slice ──────────────────────────────────────────────────

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Gọi sau khi login thành công – map BE response phẳng sang AuthUser
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      const { accessToken, refreshToken, userId, username, fullName, roles, authorities } = action.payload;
      state.accessToken  = accessToken;
      state.refreshToken = refreshToken;
      state.user = { userId, username, fullName, roles, authorities };
      state.isLoggedIn   = true;
    },

    // Gọi khi logout hoặc token hết hạn
    logout(state) {
      state.accessToken  = null;
      state.refreshToken = null;
      state.user         = null;
      state.isLoggedIn   = false;
    },

    // Cập nhật access token mới sau khi refresh
    tokenRefreshed(
      state,
      action: PayloadAction<{ accessToken: string; expiresIn: number }>,
    ) {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { loginSuccess, logout, tokenRefreshed } = authSlice.actions;
export default authSlice.reducer;

// ── Selectors ──────────────────────────────────────────────

export const selectIsLoggedIn  = (state: { auth: AuthState }) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectAccessToken = (state: { auth: AuthState }) => state.auth.accessToken;
export const selectFullName    = (state: { auth: AuthState }) => state.auth.user?.fullName ?? '';
