// ============================================================
// DynamicsModule – Biến động dân cư (Vector Icon, Chữ đen, Cuộn ngang)
// ============================================================
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../../theme/colors';

const EVENTS = [
  { type: 'Khai sinh', icon: 'baby',         count: '1,234', month: 'Tháng 5/2024', color: '#10b981', bg: '#ecfdf5' },
  { type: 'Khai tử',   icon: 'dove',         count: '456',   month: 'Tháng 5/2024', color: '#f43f5e', bg: '#fff1f2' },
  { type: 'Nhập cư',   icon: 'truck',        count: '892',   month: 'Tháng 5/2024', color: Colors.primary, bg: Colors.primaryLight },
  { type: 'Xuất cư',   icon: 'plane',        count: '321',   month: 'Tháng 5/2024', color: '#f59e0b', bg: '#fffbeb' },
];

const RECENT = [
  { name: 'Nguyễn Văn Tân',  event: 'Khai sinh',  date: '24/05/2024', district: 'TP. Trung Tâm', officer: 'cb_nguyen' },
  { name: 'Lê Thị Mỹ',       event: 'Khai tử',    date: '23/05/2024', district: 'H. Hòa Bình',   officer: 'cb_le' },
  { name: 'Trần Văn Phúc',   event: 'Nhập cư',    date: '22/05/2024', district: 'H. Miền Núi',   officer: 'cb_tran' },
  { name: 'Phạm Thị Ngọc',   event: 'Xuất cư',    date: '21/05/2024', district: 'TP. Trung Tâm', officer: 'cb_pham' },
];

const isWeb = Platform.OS === 'web';
const { width: screenWidth } = Dimensions.get('window');
const isDesktop = isWeb && screenWidth >= 1024;

const DynamicsModule: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Biến động dân cư tháng 5/2024</Text>
    <View style={styles.statsRow}>
      {EVENTS.map((e, i) => (
        <View key={i} style={[styles.statCard]}>
          <View style={[styles.statIconBox, { backgroundColor: e.bg }]}>
            <FontAwesome5 name={e.icon} size={22} color={e.color} />
          </View>
          <View>
            <Text style={styles.statValue}>{e.count}</Text>
            <Text style={styles.statType}>{e.type}</Text>
            <Text style={styles.statMonth}>{e.month}</Text>
          </View>
        </View>
      ))}
    </View>

    {/* Bar chart visual */}
    <View style={styles.chartCard}>
      <Text style={styles.cardTitle}>Biểu đồ biến động 6 tháng gần nhất</Text>
      <View style={styles.barChart}>
        {['T12', 'T1', 'T2', 'T3', 'T4', 'T5'].map((month, i) => {
          const births = [80, 90, 70, 100, 85, 95][i];
          const deaths = [25, 30, 20, 35, 28, 32][i];
          return (
            <View key={i} style={styles.barGroup}>
              <View style={styles.bars}>
                <View style={[styles.bar, { height: births, backgroundColor: '#10b981' }]} />
                <View style={[styles.bar, { height: deaths, backgroundColor: '#f43f5e' }]} />
              </View>
              <Text style={styles.barLabel}>{month}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.legend}>
        <View style={styles.legendItem}><View style={[styles.dot, { backgroundColor: '#10b981' }]} /><Text style={styles.legendText}>Khai sinh</Text></View>
        <View style={styles.legendItem}><View style={[styles.dot, { backgroundColor: '#f43f5e' }]} /><Text style={styles.legendText}>Khai tử</Text></View>
      </View>
    </View>

    <View style={styles.tableCard}>
      <Text style={styles.cardTitle}>Sự kiện gần đây</Text>
      <ScrollView horizontal={!isDesktop} showsHorizontalScrollIndicator={false} style={styles.scrollWrapper}>
        <View style={[styles.tableInner, !isDesktop && { minWidth: 600 }]}>
          <View style={styles.tableHead}>
            {['Họ tên', 'Sự kiện', 'Ngày', 'Đơn vị', 'Cán bộ xử lý'].map((h) => (
              <Text key={h} style={styles.th}>{h}</Text>
            ))}
          </View>
          {RECENT.map((r, i) => (
            <View key={i} style={[styles.row, i % 2 === 0 && styles.rowAlt]}>
              <Text style={[styles.td, styles.bold]}>{r.name}</Text>
              <Text style={styles.td}>{r.event}</Text>
              <Text style={styles.td}>{r.date}</Text>
              <Text style={styles.td}>{r.district}</Text>
              <Text style={styles.td}>{r.officer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  </View>
);

export default DynamicsModule;

const styles = StyleSheet.create({
  container: { gap: 20, paddingBottom: 40 },
  title    : { fontSize: 20, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary },
  statsRow : { flexDirection: 'row', gap: 16, flexWrap: 'wrap' },
  statCard : { 
    flex: 1, 
    minWidth: 140, 
    backgroundColor: Colors.white, 
    borderRadius: 16, 
    padding: 20, 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: Colors.shadowPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1, 
    borderColor: 'rgba(0,0,0,0.02)',
  },
  statIconBox: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center' },
  statValue: { fontSize: 32, fontFamily: 'BeVietnamPro-ExtraBold', color: Colors.textPrimary, marginBottom: 2 },
  statType : { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
  statMonth: { fontSize: 13, color: Colors.textMuted, marginTop: 2, fontFamily: 'BeVietnamPro-Regular' },
  chartCard: { backgroundColor: Colors.white, borderRadius: 20, padding: 24, shadowColor: Colors.shadowPrimary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2, borderWidth: 1, borderColor: 'rgba(0,0,0,0.02)' },
  cardTitle: { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary, marginBottom: 20 },
  barChart : { flexDirection: 'row', alignItems: 'flex-end', gap: 8, height: 160 },
  barGroup : { flex: 1, alignItems: 'center', gap: 8 },
  bars     : { flexDirection: 'row', alignItems: 'flex-end', gap: 4, flex: 1 },
  bar      : { flex: 1, borderRadius: 4, opacity: 0.9 },
  barLabel : { fontSize: 12, color: Colors.textMuted, fontFamily: 'BeVietnamPro-SemiBold' },
  legend   : { flexDirection: 'row', gap: 20, marginTop: 20 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot      : { width: 10, height: 10, borderRadius: 5 },
  legendText: { fontSize: 14, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Medium' },

  tableCard: { backgroundColor: Colors.white, borderRadius: 20, shadowColor: Colors.shadowPrimary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2, borderWidth: 1, borderColor: 'rgba(0,0,0,0.02)', overflow: 'hidden', padding: 20 },
  scrollWrapper: { width: '100%', borderRadius: 10 },
  tableInner: { width: '100%' },
  tableHead: { flexDirection: 'row', backgroundColor: Colors.bgInput, paddingHorizontal: 16, paddingVertical: 14, borderRadius: 10, marginBottom: 8 },
  th       : { flex: 1, fontSize: 13, fontFamily: 'BeVietnamPro-Bold', color: Colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5 },
  row      : { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.border },
  rowAlt   : { backgroundColor: 'transparent' },
  td       : { flex: 1, fontSize: 15, color: Colors.textPrimary, fontFamily: 'BeVietnamPro-Regular' },
  bold     : { fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
});
