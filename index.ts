// ============================================================
// index.ts – Universal Entry Point for Expo (Web & Mobile)
// ============================================================
import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent sẽ tự động đăng ký ứng dụng là "main" cho Expo Go (Mobile)
// và tự động gắn (mount) vào DOM cho Expo Web.
registerRootComponent(App);
