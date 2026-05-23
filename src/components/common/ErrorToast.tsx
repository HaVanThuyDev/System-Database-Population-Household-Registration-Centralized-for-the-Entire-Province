// ============================================================
// ERROR TOAST
// Toast thông báo lỗi animated, cross-platform (web + mobile)
// Tự đóng sau 4 giây, có nút X đóng thủ công
// ============================================================

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ErrorToastProps {
  message   : string;
  onDismiss : () => void;
  /** Thời gian tự đóng (ms), mặc định 4000 */
  duration ?: number;
}

const ErrorToast: React.FC<ErrorToastProps> = ({
  message,
  onDismiss,
  duration = 4000,
}) => {
  const translateY = useRef(new Animated.Value(-120)).current;
  const opacity    = useRef(new Animated.Value(0)).current;
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue        : -120,
        duration       : 280,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue        : 0,
        duration       : 280,
        useNativeDriver: true,
      }),
    ]).start(() => onDismiss());
  };

  useEffect(() => {
    if (!message) return;

    // Slide in
    Animated.parallel([
      Animated.spring(translateY, {
        toValue        : 0,
        damping        : 18,
        stiffness      : 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue        : 1,
        duration       : 250,
        useNativeDriver: true,
      }),
    ]).start();

    // Tự động đóng
    timerRef.current = setTimeout(dismiss, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  if (!message) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }], opacity },
      ]}
    >
      {/* Icon */}
      <View style={styles.iconBox}>
        <Feather name="alert-circle" size={18} color="#fff" />
      </View>

      {/* Text */}
      <View style={styles.textBox}>
        <Text style={styles.title}>Đăng nhập thất bại</Text>
        <Text style={styles.message} numberOfLines={2}>{message}</Text>
      </View>

      {/* Close */}
      <TouchableOpacity onPress={dismiss} style={styles.closeBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
        <Feather name="x" size={16} color="rgba(255,255,255,0.8)" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ErrorToast;

const styles = StyleSheet.create({
  container: {
    position         : 'absolute',
    top              : Platform.OS === 'web' ? 16 : 40,
    alignSelf        : 'center',
    maxWidth         : 420,
    width            : '90%',
    zIndex           : 9999,
    flexDirection    : 'row',
    alignItems       : 'center',
    backgroundColor  : '#C0392B',
    borderRadius     : 10,
    paddingVertical  : 10,
    paddingHorizontal: 12,
    gap              : 10,
    shadowColor      : '#000',
    shadowOffset     : { width: 0, height: 4 },
    shadowOpacity    : 0.25,
    shadowRadius     : 10,
    elevation        : 8,
  },
  iconBox: {
    width          : 28,
    height         : 28,
    borderRadius   : 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems     : 'center',
    justifyContent : 'center',
    flexShrink     : 0,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize    : 13,
    fontFamily  : 'BeVietnamPro-Bold',
    color       : '#fff',
    marginBottom: 1,
  },
  message: {
    fontSize  : 12,
    fontFamily: 'BeVietnamPro-Regular',
    color     : 'rgba(255,255,255,0.9)',
    lineHeight: 16,
  },
  closeBtn: {
    padding  : 4,
    flexShrink: 0,
  },
});
