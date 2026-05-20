// ============================================================
// SecurityModal – Modal cảnh báo bảo mật
// Hiển thị khi phát hiện đăng nhập từ IP lạ
// ============================================================

import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../../theme/colors';

interface SecurityModalProps {
  visible : boolean;
  onClose : () => void;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Icon */}
          <View style={styles.iconWrapper}>
            <Text style={styles.iconText}>🛡️</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Cảnh báo bảo mật</Text>

          {/* Body */}
          <Text style={styles.body}>
            Hệ thống ghi nhận bạn đang đăng nhập từ một địa chỉ IP lạ. Vui
            lòng xác nhận qua ứng dụng quản lý.
          </Text>

          {/* CTA */}
          <TouchableOpacity style={styles.btn} onPress={onClose} activeOpacity={0.85}>
            <Text style={styles.btnLabel}>Tôi đã hiểu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SecurityModal;

// ── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  overlay: {
    flex           : 1,
    backgroundColor: Colors.overlay,
    alignItems     : 'center',
    justifyContent : 'center',
    padding        : 24,
  },
  card: {
    width          : '100%',
    maxWidth       : 360,
    backgroundColor: Colors.bgCard,
    borderRadius   : 28,
    padding        : 32,
    alignItems     : 'center',
    shadowColor    : '#000',
    shadowOffset   : { width: 0, height: 20 },
    shadowOpacity  : 0.25,
    shadowRadius   : 40,
    elevation      : 20,
  },
  iconWrapper: {
    width          : 80,
    height         : 80,
    borderRadius   : 40,
    backgroundColor: Colors.dangerBg,
    alignItems     : 'center',
    justifyContent : 'center',
    marginBottom   : 20,
  },
  iconText: {
    fontSize: 36,
  },
  title: {
    fontSize    : 20,
    fontWeight  : '700',
    color       : Colors.textPrimary,
    marginBottom: 10,
    textAlign   : 'center',
  },
  body: {
    fontSize  : 14,
    color     : Colors.textSecondary,
    textAlign : 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  btn: {
    width          : '100%',
    height         : 52,
    backgroundColor: Colors.textPrimary,
    borderRadius   : 14,
    alignItems     : 'center',
    justifyContent : 'center',
  },
  btnLabel: {
    color     : Colors.white,
    fontSize  : 15,
    fontWeight: '700',
  },
});
