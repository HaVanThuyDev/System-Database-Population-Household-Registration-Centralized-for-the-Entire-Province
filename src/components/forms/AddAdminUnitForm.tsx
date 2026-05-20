import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import AppInput from '../common/AppInput';

interface AddAdminUnitFormProps {
  onClose?: () => void;
}

const AddAdminUnitForm: React.FC<AddAdminUnitFormProps> = ({ onClose }) => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [level, setLevel] = useState('Huyện');
  const [communes, setCommunes] = useState('');
  const [pop, setPop] = useState('');
  const [manager, setManager] = useState('');

  const handleSave = () => {
    alert('Đã thêm đơn vị hành chính mới thành công!');
    if (onClose) {
      onClose();
    } else {
      navigation.navigate('AdminUnits');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.formTitle}>Thêm Đơn Vị Hành Chính Mới</Text>
      <Text style={styles.formSubtitle}>Điền đầy đủ thông tin để khởi tạo đơn vị hành chính cấp huyện/xã mới vào hệ thống.</Text>

      <View style={styles.formGrid}>
        <View style={styles.fieldHalf}>
          <AppInput
            label="Tên đơn vị hành chính"
            placeholder="Ví dụ: Huyện Mới, Thành phố Mới..."
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Mã đơn vị hành chính"
            placeholder="Ví dụ: HM-006, TP-007..."
            value={code}
            onChangeText={setCode}
          />
        </View>

        <View style={styles.fieldHalf}>
          <Text style={styles.dropdownLabel}>CẤP ĐƠN VỊ</Text>
          <View style={styles.dropdownContainer}>
            {['Thành phố', 'Thị xã'].map(item => (
              <TouchableOpacity
                key={item}
                style={[styles.dropdownItem, level === item && styles.dropdownItemActive]}
                onPress={() => setLevel(item)}
              >
                <Text style={[styles.dropdownItemText, level === item && styles.dropdownItemTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Số lượng xã/phường trực thuộc"
            placeholder="Ví dụ: 12, 15..."
            keyboardType="numeric"
            value={communes}
            onChangeText={setCommunes}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Dân số dự kiến (người)"
            placeholder="Ví dụ: 250,000..."
            keyboardType="numeric"
            value={pop}
            onChangeText={setPop}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Cán bộ quản lý phụ trách"
            placeholder="Nhập tên người quản lý chính..."
            value={manager}
            onChangeText={setManager}
          />
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={onClose ?? (() => navigation.navigate('AdminUnits'))}>
          <Text style={styles.cancelBtnText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Lưu dữ liệu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAdminUnitForm;

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
