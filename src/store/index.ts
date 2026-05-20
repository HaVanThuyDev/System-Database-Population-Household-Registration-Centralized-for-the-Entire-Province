// ============================================================
// REDUX STORE – Root store configuration
// Thêm reducer mới vào đây khi có feature mới
// ============================================================

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // dashboard: dashboardReducer,  ← thêm vào đây khi có
  },
});

// Infer types từ store (dùng trong useSelector / useDispatch)
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
