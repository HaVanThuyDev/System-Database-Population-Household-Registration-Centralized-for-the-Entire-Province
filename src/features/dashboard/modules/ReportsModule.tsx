// ============================================================
// ReportsModule – Thống kê & Báo cáo
// ============================================================
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../theme/colors';

const REPORT_TYPES = [
  'Thống kê dân số theo độ tuổi (Quý)',
  'Biến động nhân khẩu tháng',
  'Báo cáo an sinh xã hội cấp huyện',
  'Thống kê hộ nghèo/cận nghèo',
  'Báo cáo tạm trú/tạm vắng',
];

const RECENT_REPORTS = [
  { name: 'BC_DanSo_Q1_2024.pdf',    date: '01/04/2024', size: '2.4 MB', type: 'PDF',   status: 'Hoàn thành' },
  { name: 'BC_BienDong_T4_2024.xlsx', date: '01/05/2024', size: '1.8 MB', type: 'Excel', status: 'Hoàn thành' },
  { name: 'BC_AnSinh_H1_2024.pdf',   date: '15/04/2024', size: '3.1 MB', type: 'PDF',   status: 'Hoàn thành' },
];

const ReportsModule: React.FC = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<'PDF' | 'Excel'>('PDF');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Export form */}
        <View style={styles.formCard}>
          <Text style={styles.cardTitle}>Xuất báo cáo định kỳ</Text>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>LOẠI BÁO CÁO</Text>
            {REPORT_TYPES.map((t, i) => (
              <TouchableOpacity key={i} style={[styles.radioRow, selectedType === i && styles.radioRowActive]} onPress={() => setSelectedType(i)}>
                <View style={[styles.radio, selectedType === i && styles.radioActive]} />
                <Text style={[styles.radioText, selectedType === i && styles.radioTextActive]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>ĐỊNH DẠNG</Text>
            <View style={styles.formatRow}>
              {(['PDF', 'Excel'] as const).map(f => (
                <TouchableOpacity key={f} style={[styles.formatBtn, selectedFormat === f && styles.formatBtnActive]} onPress={() => setSelectedFormat(f)}>
                  <Text style={styles.formatIcon}>{f === 'PDF' ? '📄' : '📊'}</Text>
                  <Text style={[styles.formatText, selectedFormat === f && styles.formatTextActive]}>{f}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity style={styles.exportBtn}>
            <Text style={styles.exportBtnText}>⬇️ TẢI BÁO CÁO</Text>
          </TouchableOpacity>
        </View>

        {/* Sync status */}
        <View style={styles.syncCard}>
          <Text style={styles.syncIcon}>☁️</Text>
          <Text style={styles.syncTitle}>Tích hợp CSDL Quốc gia</Text>
          <Text style={styles.syncDesc}>Kết nối và đồng bộ hóa dữ liệu thời gian thực với Cơ sở dữ liệu Quốc gia về dân cư.</Text>
          <View style={styles.progressRow}>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: '80%' }]} />
            </View>
            <Text style={styles.progressText}>80%</Text>
          </View>
          <Text style={styles.syncStatus}>🟢 Đang kết nối • Cập nhật lần cuối: 14:30</Text>
        </View>
      </View>

      {/* Recent reports */}
      <View style={styles.tableCard}>
        <Text style={styles.cardTitle}>Báo cáo đã xuất gần đây</Text>
        <View style={styles.tableHead}>
          {['Tên file', 'Ngày xuất', 'Kích thước', 'Định dạng', 'Trạng thái', 'Tải về'].map(h => (
            <Text key={h} style={[styles.th, h === 'Tên file' && { flex: 2 }]}>{h}</Text>
          ))}
        </View>
        {RECENT_REPORTS.map((r, i) => (
          <View key={i} style={[styles.tableRow, i % 2 === 0 && styles.tableRowAlt]}>
            <Text style={[styles.td, styles.bold, { flex: 2 }]}>{r.name}</Text>
            <Text style={styles.td}>{r.date}</Text>
            <Text style={styles.td}>{r.size}</Text>
            <View style={styles.td}><View style={[styles.typeBadge, { backgroundColor: r.type === 'PDF' ? '#ffe4e6' : '#dcfce7' }]}><Text style={[styles.typeText, { color: r.type === 'PDF' ? Colors.dangerIcon : '#16a34a' }]}>{r.type}</Text></View></View>
            <View style={styles.td}><View style={styles.doneBadge}><Text style={styles.doneText}>{r.status}</Text></View></View>
            <TouchableOpacity style={styles.td}><Text style={styles.downloadLink}>⬇️ Tải</Text></TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReportsModule;

const styles = StyleSheet.create({
  container  : { gap: 16, paddingBottom: 40 },
  row        : { flexDirection: 'row', gap: 16, flexWrap: 'wrap' },
  formCard   : { flex: 1, minWidth: 280, backgroundColor: Colors.white, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: Colors.border, gap: 16 },
  cardTitle  : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.primaryDark, marginBottom: 8 },
  field      : { gap: 8 },
  fieldLabel : { fontSize: 12, fontFamily: 'BeVietnamPro-Bold', color: Colors.textMuted, letterSpacing: 1, textTransform: 'uppercase' },
  radioRow   : { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: Colors.border },
  radioRowActive: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight },
  radio      : { width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: Colors.border },
  radioActive: { borderColor: Colors.primary, backgroundColor: Colors.primary },
  radioText  : { fontSize: 15, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Regular' },
  radioTextActive: { color: Colors.primary, fontFamily: 'BeVietnamPro-SemiBold' },
  formatRow  : { flexDirection: 'row', gap: 10 },
  formatBtn  : { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 12, borderRadius: 10, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white },
  formatBtnActive: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight },
  formatIcon : { fontSize: 18 },
  formatText : { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textSecondary },
  formatTextActive: { color: Colors.primary },
  exportBtn  : { backgroundColor: Colors.primary, borderRadius: 12, padding: 14, alignItems: 'center' },
  exportBtnText: { color: Colors.white, fontSize: 15, fontFamily: 'BeVietnamPro-Bold' },
  syncCard   : { flex: 1, minWidth: 240, backgroundColor: Colors.white, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: Colors.border, alignItems: 'center', gap: 12 },
  syncIcon   : { fontSize: 48 },
  syncTitle  : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary, textAlign: 'center' },
  syncDesc   : { fontSize: 15, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22, fontFamily: 'BeVietnamPro-Regular' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%' },
  progressBg : { flex: 1, height: 8, backgroundColor: Colors.bgInput, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: Colors.primary, borderRadius: 4 },
  progressText: { fontSize: 14, fontFamily: 'BeVietnamPro-Bold', color: Colors.primary },
  syncStatus : { fontSize: 13, color: Colors.textMuted, fontFamily: 'BeVietnamPro-Medium' },
  tableCard  : { backgroundColor: Colors.white, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden', padding: 20 },
  tableHead  : { flexDirection: 'row', backgroundColor: Colors.bgInput, paddingHorizontal: 12, paddingVertical: 12, borderRadius: 8, marginBottom: 8 },
  th         : { flex: 1, fontSize: 13, fontFamily: 'BeVietnamPro-Bold', color: Colors.textMuted, textTransform: 'uppercase' },
  tableRow   : { flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 16, alignItems: 'center', borderTopWidth: 1, borderTopColor: Colors.border },
  tableRowAlt: { backgroundColor: '#fafafa' },
  td         : { flex: 1, fontSize: 15, color: Colors.textPrimary, fontFamily: 'BeVietnamPro-Regular' },
  bold       : { fontFamily: 'BeVietnamPro-SemiBold' },
  typeBadge  : { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start' },
  typeText   : { fontSize: 13, fontFamily: 'BeVietnamPro-Bold' },
  doneBadge  : { paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#dcfce7', borderRadius: 6, alignSelf: 'flex-start' },
  doneText   : { fontSize: 13, fontFamily: 'BeVietnamPro-Bold', color: '#16a34a' },
  downloadLink: { fontSize: 15, color: Colors.primary, fontFamily: 'BeVietnamPro-SemiBold' },
});
