// ============================================================
// AdminUnitsModule – Đơn vị hành chính (Vector Icon, Bỏ huyện, Chữ đen, Cuộn ngang)
// ============================================================
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../../theme/colors';

const UNITS = [
  { name: 'Thành phố Trung Tâm', code: 'TP-001', level: 'Thành phố', communes: 18, pop: '850,000', status: 'Hoạt động' },
  { name: 'Huyện Hòa Bình',      code: 'HB-002', level: 'Huyện',     communes: 12, pop: '245,600', status: 'Hoạt động' },
  { name: 'Huyện Miền Núi',      code: 'MN-003', level: 'Huyện',     communes: 8,  pop: '120,000', status: 'Hoạt động' },
  { name: 'Thị xã Ven Biển',     code: 'VB-004', level: 'Thị xã',    communes: 10, pop: '180,000', status: 'Hoạt động' },
  { name: 'Huyện Đồng Bằng',     code: 'DB-005', level: 'Huyện',     communes: 15, pop: '310,000', status: 'Hoạt động' },
];

const isWeb = Platform.OS === 'web';
const { width: screenWidth } = Dimensions.get('window');
const isDesktop = isWeb && screenWidth >= 1024;

const AdminUnitsModule: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.title}>Danh sách đơn vị hành chính cấp huyện</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddAdminUnit')}>
          <Text style={styles.addBtnText}>+ Thêm đơn vị</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={!isDesktop} showsHorizontalScrollIndicator={false} style={styles.scrollWrapper}>
        <View style={[styles.tableCard, !isDesktop && { minWidth: 800 }]}>
          <View style={styles.tableHead}>
            {['Tên đơn vị', 'Mã ĐVHC', 'Cấp', 'Số xã/phường', 'Dân số', 'Trạng thái', 'Thao tác'].map((h, i) => (
              <Text key={i} style={[styles.th, i === 0 && { flex: 2 }]}>{h}</Text>
            ))}
          </View>
          {UNITS.map((u, i) => (
            <View key={i} style={[styles.tableRow, i % 2 === 0 && styles.tableRowAlt]}>
              <View style={[styles.td, { flex: 2, flexDirection: 'row', alignItems: 'center', gap: 10 }]}>
                <View style={styles.unitIconContainer}>
                  <FontAwesome5 name="building" size={14} color={Colors.primary} />
                </View>
                <Text style={styles.unitName}>{u.name}</Text>
              </View>
              <Text style={[styles.td, styles.tdMuted]}>{u.code}</Text>
              <View style={styles.td}>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>{u.level}</Text>
                </View>
              </View>
              <Text style={styles.td}>{u.communes} đơn vị</Text>
              <Text style={styles.td}>{u.pop}</Text>
              <View style={styles.td}>
                <View style={styles.activeBadge}>
                  <Text style={styles.activeText}>{u.status}</Text>
                </View>
              </View>
              <View style={[styles.td, { flexDirection: 'row', gap: 8 }]}>
                <TouchableOpacity style={styles.actionBtn}><Text>👁️</Text></TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}><Text>✏️</Text></TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Summary cards (Đã bỏ Huyện, giữ lại Tỉnh/Thành phố và Xã) */}
      <View style={styles.summaryRow}>
        {[
          { icon: 'city', label: 'Thành phố/Thị xã (Cấp Tỉnh)', value: '2' },
          { icon: 'home', label: 'Xã/Phường/Thị trấn',        value: '63' },
        ].map((s, i) => (
          <View key={i} style={styles.summaryCard}>
            <View style={styles.summaryIconBox}>
              <FontAwesome5 name={s.icon} size={22} color={Colors.primary} />
            </View>
            <Text style={styles.summaryValue}>{s.value}</Text>
            <Text style={styles.summaryLabel}>{s.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AdminUnitsModule;

const styles = StyleSheet.create({
  container  : { gap: 16, paddingBottom: 40 },
  toolbar    : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 },
  title      : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.primaryDark },
  addBtn     : { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: Colors.primary, borderRadius: 10 },
  addBtnText : { fontSize: 15, color: Colors.white, fontFamily: 'BeVietnamPro-SemiBold' },

  scrollWrapper: { width: '100%', borderRadius: 16 },
  tableCard  : { backgroundColor: Colors.white, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
  tableHead  : { flexDirection: 'row', backgroundColor: Colors.bgInput, paddingHorizontal: 16, paddingVertical: 14 },
  th         : { flex: 1, fontSize: 13, fontFamily: 'BeVietnamPro-Bold', color: Colors.textMuted, textTransform: 'uppercase' },
  tableRow   : { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center', borderTopWidth: 1, borderTopColor: Colors.border },
  tableRowAlt: { backgroundColor: '#fafafa' },
  td         : { flex: 1, fontSize: 15, color: Colors.textPrimary, fontFamily: 'BeVietnamPro-Regular' },
  tdMuted    : { color: Colors.textMuted },
  unitIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitName   : { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
  levelBadge : { paddingHorizontal: 10, paddingVertical: 4, backgroundColor: Colors.primaryLight, borderRadius: 6, alignSelf: 'flex-start' },
  levelText  : { fontSize: 13, color: Colors.primary, fontFamily: 'BeVietnamPro-SemiBold' },
  activeBadge: { paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#dcfce7', borderRadius: 6, alignSelf: 'flex-start' },
  activeText : { fontSize: 13, color: '#16a34a', fontFamily: 'BeVietnamPro-SemiBold' },
  actionBtn  : { padding: 6 },

  summaryRow : { flexDirection: 'row', gap: 16, flexWrap: 'wrap' },
  summaryCard: { flex: 1, minWidth: 140, backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border, alignItems: 'center', gap: 6 },
  summaryIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  summaryValue: { fontSize: 32, fontFamily: 'BeVietnamPro-ExtraBold', color: Colors.textPrimary },
  summaryLabel: { fontSize: 14, fontFamily: 'BeVietnamPro-Medium', color: Colors.textSecondary, textAlign: 'center' },
});
