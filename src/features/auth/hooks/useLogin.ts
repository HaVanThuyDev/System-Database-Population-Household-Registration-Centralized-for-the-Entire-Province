import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UserRole } from '../../../constants/auth.constants';
import { loginApi } from '../services/auth.service';
import { LoginRequest } from '../services/auth.types';
import { loginSuccess } from '../../../store/auth/authSlice';

interface LoginState {
  username      : string;
  password      : string;
  role          : UserRole;
  agreedToTerms : boolean;
  isLoading     : boolean;
  showModal     : boolean;
  usernameError : string;
  passwordError : string;
  globalError   : string;
}

const INITIAL_STATE: LoginState = {
  username      : '',
  password      : '',
  role          : UserRole.PROVINCE,
  agreedToTerms : false,
  isLoading     : false,
  showModal     : false,
  usernameError : '',
  passwordError : '',
  globalError   : '',
};

export function useLogin(onSuccess?: () => void) {
  const [state, setState] = useState<LoginState>(INITIAL_STATE);

  const dispatch = useDispatch();

  // Helper để cập nhật một field
  const set = useCallback(
    <K extends keyof LoginState>(key: K, value: LoginState[K]) =>
      setState(prev => ({ ...prev, [key]: value })),
    [],
  );


  const validate = (): boolean => {
    let valid = true;

    if (!state.username.trim()) {
      set('usernameError', 'Vui lòng nhập tên đăng nhập.');
      valid = false;
    } else {
      set('usernameError', '');
    }

    if (!state.password) {
      set('passwordError', 'Vui lòng nhập mật khẩu.');
      valid = false;
    } else if (state.password.length < 6) {
      set('passwordError', 'Mật khẩu phải có ít nhất 6 ký tự.');
      valid = false;
    } else {
      set('passwordError', '');
    }

    return valid;
  };

  // ── Submit ───────────────────────────────────────────────

  const handleSubmit = useCallback(async () => {
    set('isLoading', true);
    set('globalError', '');

    // Giả lập thời gian load 1.5 giây
    setTimeout(() => {
      set('isLoading', false);
      // Dispatch trạng thái login để vào thẳng Dashboard mà không cần validate API
      dispatch(loginSuccess({
        accessToken: 'mock-token',
        refreshToken: 'mock-refresh',
        expiresIn: 3600,
        user: {
          id: '1',
          username: state.username || 'admin',
          fullName: 'Nguyễn Văn Quản Trị',
          role: state.role,
          unit: 'Tỉnh',
        }
      }));
    }, 1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, dispatch]);

  const handleFaceIdLogin = useCallback(async () => {
    set('isLoading', true);
    set('globalError', '');

    setTimeout(() => {
      set('isLoading', false);
      dispatch(loginSuccess({
        accessToken: 'mock-token-faceid',
        refreshToken: 'mock-refresh-faceid',
        expiresIn: 3600,
        user: {
          id: '1',
          username: 'faceid_user',
          fullName: 'Người dùng Face ID',
          role: state.role,
          unit: 'Tỉnh',
        }
      }));
    }, 1000);
  }, [state.role, dispatch]);

  // ── Modal close → navigate ───────────────────────────────

  const handleModalClose = useCallback(() => {
    set('showModal', false);
    onSuccess?.();
  }, [onSuccess, set]);

  return {
    // State
    username      : state.username,
    password      : state.password,
    role          : state.role,
    agreedToTerms : state.agreedToTerms,
    isLoading     : state.isLoading,
    showModal     : state.showModal,
    usernameError : state.usernameError,
    passwordError : state.passwordError,
    globalError   : state.globalError,

    // Actions
    setUsername    : (v: string)  => set('username', v),
    setPassword    : (v: string)  => set('password', v),
    setRole        : (v: UserRole) => set('role', v),
    setAgreedToTerms: (v: boolean) => set('agreedToTerms', v),
    handleSubmit,
    handleFaceIdLogin,
    handleModalClose,
  };
}
