import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import AppInput from '../common/AppInput';

interface AddCitizenFormProps {
  onClose?: () => void;
}

const AddCitizenForm: React.FC<AddCitizenFormProps> = ({ onClose }) => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [cccd, setCccd] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('Nam');
  const [job, setJob] = useState('');
  const [address, setAddress] = useState('');
  const [group, setGroup] = useState('Lao động');

  const handleSave = () => {
    alert('Đã thêm công dân mới vào cơ sở dữ liệu!');
    if (onClose) {
      onClose();
    } else {
      navigation.navigate('Citizens');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.formTitle}>Đăng Ký Khai Sinh / Thêm Công Dân Mới</Text>
      <Text style={styles.formSubtitle}>Điền thông tin định danh cá nhân của công dân để lưu trữ vào Hệ thống dữ liệu dân cư quốc gia.</Text>

      <View style={styles.formGrid}>
        <View style={styles.fieldHalf}>
          <AppInput
            label="Họ và tên công dân"
            placeholder="Ví dụ: Nguyễn Văn A..."
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Số CCCD / Mã số định danh cá nhân"
            placeholder="Nhập 12 số (hoặc bỏ trống nếu chưa có)..."
            keyboardType="numeric"
            value={cccd}
            onChangeText={setCccd}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Năm sinh"
            placeholder="Ví dụ: 1995, 2012..."
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
          />
        </View>

        <View style={styles.fieldHalf}>
          <Text style={styles.dropdownLabel}>GIỚI TÍNH</Text>
          <View style={styles.dropdownContainer}>
            {['Nam', 'Nữ', 'Khác'].map(item => (
              <TouchableOpacity
                key={item}
                style={[styles.dropdownItem, gender === item && styles.dropdownItemActive]}
                onPress={() => setGender(item)}
              >
                <Text style={[styles.dropdownItemText, gender === item && styles.dropdownItemTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.fieldFull}>
          <AppInput
            label="Địa chỉ thường trú hiện tại"
            placeholder="Số nhà, Tên đường, Xã/Huyện, Tỉnh..."
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.fieldHalf}>
          <AppInput
            label="Nghề nghiệp / Học vấn"
            placeholder="Ví dụ: Kỹ sư, Học sinh, Tự do..."
            value={job}
            onChangeText={setJob}
          />
        </View>

        <View style={styles.fieldHalf}>
          <Text style={styles.dropdownLabel}>NHÓM ĐỐI TƯỢNG</Text>
          <View style={styles.dropdownContainer}>
            {['Lao động', 'Trẻ em', 'Người cao tuổi'].map(item => (
              <TouchableOpacity
                key={item}
                style={[styles.dropdownItem, group === item && styles.dropdownItemActive]}
                onPress={() => setGroup(item)}
              >
                <Text style={[styles.dropdownItemText, group === item && styles.dropdownItemTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={onClose ?? (() => navigation.navigate('Citizens'))}>
          <Text style={styles.cancelBtnText}>Hủy bỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Đăng ký thông tin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCitizenForm;

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
