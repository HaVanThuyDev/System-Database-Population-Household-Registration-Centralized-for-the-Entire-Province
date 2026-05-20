import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import AppInput from '../common/AppInput';

interface AddResidencyFormProps {
  onClose?: () => void;
}

const AddResidencyForm: React.FC<AddResidencyFormProps> = ({ onClose }) => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [type, setType] = useState('Tạm trú');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');

  const handleSave = () => {
    alert('Đăng ký tạm trú / tạm vắng thành công!');
    if (onClose) {
      onClose();
    } else {
      navigation.navigate('Residency');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.formTitle}>Khai Báo Cư Trú (Tạm Trú / Tạm Vắng)</Text>
      <Text style={styles.formSubtitle}>Đăng ký thông tin thay đổi nơi cư trú ngắn hạn hoặc vắng mặt trên địa bàn hành chính.</Text>

      <View style={styles.formGrid}>
        <View style={styles.fieldHalf}>
          <AppInput
            label="Họ và tên người khai báo"
            placeholder="Nhập họ và tên..."
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.fieldHalf}>
          <Text style={styles.dropdownLabel}>LOẠI KHAI BÁO CƯ TRÚ</Text>
          <View style={styles.dropdownContainer}>
            {['Tạm trú', 'Tạm vắng'].map(item => (
              <TouchableOpacity
                key={item}
                style={[styles.dropdownItem, type === item && styles.dropdownItemActive]}
                onPress={() => setType(item)}
              >
                <Text style={[styles.dropdownItemText, type === item && styles.dropdownItemTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Thời hạn từ ngày"
            placeholder="Ví dụ: 01/06/2024..."
            value={fromDate}
            onChangeText={setFromDate}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Thời hạn đến ngày"
            placeholder="Ví dụ: 01/12/2024..."
            value={toDate}
            onChangeText={setToDate}
          />
        </View>

        <View style={styles.fieldFull}>
          <AppInput
            label="Nơi đăng ký tạm trú / tạm vắng"
            placeholder="Địa chỉ nơi đi / nơi đến tạm trú..."
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.fieldFull}>
          <AppInput
            label="Lý do thay đổi cư trú"
            placeholder="Ví dụ: Đi làm ăn xa, Đi du học, Thay đổi chỗ ở..."
            value={reason}
            onChangeText={setReason}
          />
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={onClose ?? (() => navigation.navigate('Residency'))}>
          <Text style={styles.cancelBtnText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Đăng ký cư trú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddResidencyForm;

const { width: screenWidth } = Dimensions.get('window');
const isDesktop = Platform.OS === 'web' && screenWidth >= 1024;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: isDesktop ? 32 : 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.shadowPrimary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 4,
    width: '100%',
    maxWidth: '100%',
    alignSelf: 'center',
  },
  formTitle: {
    fontSize: isDesktop ? 22 : 18,
    fontFamily: 'BeVietnamPro-Bold',
    color: Colors.primaryDark,
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: isDesktop ? 15 : 13,
    fontFamily: 'BeVietnamPro-Regular',
    color: Colors.textMuted,
    marginBottom: isDesktop ? 32 : 16,
    lineHeight: isDesktop ? 22 : 18,
  },
  formGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: isDesktop ? 20 : 12,
    marginBottom: isDesktop ? 32 : 20,
  },
  fieldHalf: {
    width: '48%',
    minWidth: 260,
    flexGrow: 1,
    gap: 8,
  },
  fieldFull: {
    width: '100%',
    gap: 8,
  },
  dropdownLabel: {
    fontSize: 10,
    fontFamily: 'BeVietnamPro-Bold',
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 0,
  },
  dropdownContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.bgInput,
    borderRadius: 16,
    padding: 4,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 56,
    alignItems: 'center',
  },
  dropdownItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  dropdownItemActive: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  dropdownItemText: {
    fontSize: 14,
    fontFamily: 'BeVietnamPro-Medium',
    color: Colors.textSecondary,
  },
  dropdownItemTextActive: {
    color: Colors.primary,
    fontFamily: 'BeVietnamPro-Bold',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 24,
  },
  cancelBtn: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  cancelBtnText: {
    fontSize: 15,
    fontFamily: 'BeVietnamPro-SemiBold',
    color: Colors.textSecondary,
  },
  saveBtn: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  saveBtnText: {
    fontSize: 15,
    fontFamily: 'BeVietnamPro-Bold',
    color: Colors.white,
  },
});
