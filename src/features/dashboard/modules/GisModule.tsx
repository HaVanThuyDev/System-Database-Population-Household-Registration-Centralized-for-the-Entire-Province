// ============================================================
// GisModule – Bản đồ số (GIS)
// ============================================================
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';

const GisModule: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bản đồ số Dân cư (GIS)</Text>
    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapIcon}>🗺️</Text>
      <Text style={styles.mapTitle}>Bản đồ nhiệt phân bổ dân cư toàn tỉnh</Text>
      <Text style={styles.mapDesc}>Tính năng bản đồ GIS đang được tích hợp với hệ thống dữ liệu địa lý quốc gia.</Text>
      <View style={styles.legendRow}>
        {[
          { color: '#1e3a8a', label: 'Mật độ rất cao (>2000/km²)' },
          { color: Colors.primary, label: 'Mật độ cao (500-2000/km²)' },
          { color: '#93c5fd', label: 'Mật độ trung bình (100-500/km²)' },
          { color: '#dbeafe', label: 'Mật độ thấp (<100/km²)' },
        ].map((l, i) => (
          <View key={i} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: l.color }]} />
            <Text style={styles.legendText}>{l.label}</Text>
          </View>
        ))}
      </View>
    </View>
    <View style={styles.statsRow}>
      {[
        { label: 'Mật độ TB toàn tỉnh', value: '280 người/km²' },
        { label: 'Khu vực đông nhất',   value: 'TP. Trung Tâm' },
        { label: 'Khu vực thưa nhất',   value: 'H. Miền Núi' },
        { label: 'Diện tích toàn tỉnh', value: '6,621 km²' },
      ].map((s, i) => (
        <View key={i} style={styles.statCard}>
          <Text style={styles.statValue}>{s.value}</Text>
          <Text style={styles.statLabel}>{s.label}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default GisModule;

const styles = StyleSheet.create({
  container     : { gap: 16, paddingBottom: 40 },
  title         : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.primaryDark },
  mapPlaceholder: { backgroundColor: Colors.white, borderRadius: 16, padding: 40, borderWidth: 1, borderColor: Colors.border, alignItems: 'center', gap: 12, minHeight: 300, justifyContent: 'center' },
  mapIcon       : { fontSize: 64 },
  mapTitle      : { fontSize: 20, fontFamily: 'BeVietnamPro-Bold', color: Colors.textPrimary, textAlign: 'center' },
  mapDesc       : { fontSize: 15, color: Colors.textSecondary, textAlign: 'center', maxWidth: 400, lineHeight: 22, fontFamily: 'BeVietnamPro-Regular' },
  legendRow     : { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 8 },
  legendItem    : { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendColor   : { width: 16, height: 16, borderRadius: 4 },
  legendText    : { fontSize: 13, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Medium' },
  statsRow      : { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  statCard      : { flex: 1, minWidth: 140, backgroundColor: Colors.white, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: Colors.border, gap: 4 },
  statValue     : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.primary },
  statLabel     : { fontSize: 14, color: Colors.textMuted, fontFamily: 'BeVietnamPro-Regular' },
});
