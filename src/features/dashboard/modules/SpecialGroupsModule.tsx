// ============================================================
// SpecialGroupsModule – Đối tượng đặc thù (Vector Icon, Chữ đen, Responsive)
// ============================================================
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../../theme/colors';

const GROUPS = [
  { icon: 'user-clock', label: 'Người cao tuổi (≥60)',  count: '185,423', color: '#7c3aed', pct: '10%' },
  { icon: 'wheelchair', label: 'Người khuyết tật',       count: '42,100',  color: '#d97706', pct: '2.3%' },
  { icon: 'award',      label: 'Gia đình chính sách',   count: '28,500',  color: Colors.primary, pct: '1.5%' },
  { icon: 'baby',       label: 'Trẻ em dưới 6 tuổi',    count: '112,000', color: '#16a34a', pct: '6%' },
  { icon: 'heartbeat',  label: 'Hộ nghèo/Cận nghèo',    count: '35,200',  color: Colors.dangerIcon, pct: '1.9%' },
  { icon: 'leaf',       label: 'Dân tộc thiểu số',       count: '67,800',  color: '#0891b2', pct: '3.7%' },
];

const SpecialGroupsModule: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Quản lý đối tượng đặc thù & chính sách</Text>
    <View style={styles.grid}>
      {GROUPS.map((g, i) => (
        <View key={i} style={[styles.card, { borderTopColor: g.color, borderTopWidth: 3 }]}>
          <View style={[styles.iconContainer, { backgroundColor: g.color + '15' }]}>
            <FontAwesome5 name={g.icon} size={22} color={g.color} />
          </View>
          <Text style={styles.cardCount}>{g.count}</Text>
          <Text style={styles.cardLabel}>{g.label}</Text>
          <View style={styles.pctRow}>
            <View style={[styles.pctBar, { backgroundColor: g.color + '20' }]}>
              <View style={[styles.pctFill, { width: g.pct as any, backgroundColor: g.color }]} />
            </View>
            <Text style={[styles.pctText, { color: g.color }]}>{g.pct}</Text>
          </View>
        </View>
      ))}
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>📋 Chính sách hỗ trợ đang áp dụng</Text>
      {[
        { policy: 'Trợ cấp xã hội hàng tháng',     beneficiaries: '28,500 người', budget: '14.25 tỷ/tháng' },
        { policy: 'Bảo hiểm y tế miễn phí',         beneficiaries: '185,423 người', budget: '92.7 tỷ/năm' },
        { policy: 'Hỗ trợ giáo dục trẻ em nghèo',  beneficiaries: '12,400 em',    budget: '6.2 tỷ/năm' },
      ].map((p, i) => (
        <View key={i} style={[styles.policyRow, i > 0 && styles.policyBorder]}>
          <View style={{ flex: 2 }}>
            <Text style={styles.policyName}>{p.policy}</Text>
            <Text style={styles.policyBenef}>{p.beneficiaries}</Text>
          </View>
          <Text style={styles.policyBudget}>{p.budget}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default SpecialGroupsModule;

const styles = StyleSheet.create({
  container : { gap: 16, paddingBottom: 40 },
  title     : { fontSize: 20, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary },
  grid      : { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card      : { 
    width: '30%', 
    minWidth: 140, 
    flex: 1, 
    backgroundColor: Colors.white, 
    borderRadius: 16, 
    padding: 18, 
    borderWidth: 1, 
    borderColor: Colors.border, 
    gap: 6 
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  cardCount : { fontSize: 26, fontFamily: 'BeVietnamPro-ExtraBold', color: Colors.textPrimary },
  cardLabel : { fontSize: 14, fontFamily: 'BeVietnamPro-Medium', color: Colors.textSecondary },
  pctRow    : { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  pctBar    : { flex: 1, height: 6, borderRadius: 3, overflow: 'hidden' },
  pctFill   : { height: '100%', borderRadius: 3 },
  pctText   : { fontSize: 13, fontFamily: 'BeVietnamPro-Bold' },
  infoCard  : { backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border },
  infoTitle : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary, marginBottom: 16 },
  policyRow : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  policyBorder: { borderTopWidth: 1, borderTopColor: Colors.border },
  policyName: { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
  policyBenef: { fontSize: 13, fontFamily: 'BeVietnamPro-Regular', color: Colors.textMuted, marginTop: 2 },
  policyBudget: { fontSize: 15, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary },
});
