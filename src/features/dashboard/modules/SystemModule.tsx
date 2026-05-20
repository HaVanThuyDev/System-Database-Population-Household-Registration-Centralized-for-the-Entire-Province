// ============================================================
// SystemModule – Cấu hình & Bảo mật
// ============================================================
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../theme/colors';

const ROLES = [
  { role: 'Quản trị viên tỉnh',    users: 12,  color: Colors.primary },
  { role: 'Cán bộ nhập liệu xã',   users: 450, color: '#16a34a' },
  { role: 'Cán bộ duyệt huyện',    users: 85,  color: '#d97706' },
  { role: 'Chỉ xem (Read-only)',    users: 230, color: Colors.textMuted },
];

const LOGS = [
  { dot: Colors.primary,    text: 'Admin: Nguyễn Văn A đã duyệt yêu cầu tách hộ - Hộ HK-10029',                  time: '14:30 - 24/05/2024', ip: '192.168.1.10' },
  { dot: '#d97706',         text: 'User: canbo_xa_hoa_binh đã thêm mới 05 tạm vắng',                              time: '11:15 - 24/05/2024', ip: '113.161.4.52' },
  { dot: Colors.dangerIcon, text: 'Hệ thống: Tự động sao lưu dữ liệu cơ sở dữ liệu quốc gia thất bại (Retry 1)', time: '03:00 - 24/05/2024', ip: 'SYS-ERR-09' },
  { dot: '#16a34a',         text: 'User: admin_tinh đã cập nhật thông tin đơn vị hành chính TP-002',              time: '09:45 - 23/05/2024', ip: '192.168.1.5' },
];

const SystemModule: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      {/* Roles */}
      <View style={styles.rolesCard}>
        <Text style={styles.cardTitle}>👤 Vai trò người dùng</Text>
        {ROLES.map((r, i) => (
          <View key={i} style={[styles.roleRow, i > 0 && styles.roleBorder]}>
            <View style={[styles.roleDot, { backgroundColor: r.color }]} />
            <Text style={styles.roleText}>{r.role}</Text>
            <View style={[styles.roleBadge, { backgroundColor: r.color + '18' }]}>
              <Text style={[styles.roleBadgeText, { color: r.color }]}>{r.users} user</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.manageBtn}>
          <Text style={styles.manageBtnText}>Quản lý phân quyền</Text>
        </TouchableOpacity>
      </View>

      {/* System status */}
      <View style={styles.statusCard}>
        <Text style={styles.cardTitle}>🖥️ Trạng thái hệ thống</Text>
        {[
          { label: 'CPU',          value: '23%',   color: '#16a34a' },
          { label: 'RAM',          value: '67%',   color: '#d97706' },
          { label: 'Disk',         value: '45%',   color: Colors.primary },
          { label: 'Network',      value: '12 MB/s', color: '#16a34a' },
          { label: 'Uptime',       value: '99.9%', color: '#16a34a' },
          { label: 'DB Connections', value: '142', color: Colors.primary },
        ].map((s, i) => (
          <View key={i} style={styles.statusRow}>
            <Text style={styles.statusLabel}>{s.label}</Text>
            <Text style={[styles.statusValue, { color: s.color }]}>{s.value}</Text>
          </View>
        ))}
      </View>
    </View>

    {/* Logs */}
    <View style={styles.logsCard}>
      <View style={styles.logsHeader}>
        <Text style={styles.cardTitle}>📋 Nhật ký hệ thống gần đây</Text>
        <TouchableOpacity><Text style={styles.viewAll}>Xem tất cả log</Text></TouchableOpacity>
      </View>
      {LOGS.map((log, i) => (
        <View key={i} style={[styles.logRow, i > 0 && styles.logBorder]}>
          <View style={[styles.logDot, { backgroundColor: log.dot }]} />
          <View style={{ flex: 1 }}>
            <Text style={styles.logText}>{log.text}</Text>
            <Text style={styles.logMeta}>{log.time} • IP: {log.ip}</Text>
          </View>
        </View>
      ))}
    </View>

    {/* Security settings */}
    <View style={styles.secCard}>
      <Text style={styles.cardTitle}>🔐 Cài đặt bảo mật</Text>
      <View style={styles.secGrid}>
        {[
          { label: 'Xác thực 2 yếu tố (2FA)',    enabled: true },
          { label: 'Mã hóa dữ liệu AES-256',      enabled: true },
          { label: 'Tự động khóa sau 15 phút',    enabled: true },
          { label: 'Ghi log mọi thao tác',         enabled: true },
          { label: 'Giới hạn IP đăng nhập',        enabled: false },
          { label: 'Sao lưu tự động hàng ngày',   enabled: true },
        ].map((s, i) => (
          <View key={i} style={styles.secItem}>
            <Text style={styles.secLabel}>{s.label}</Text>
            <View style={[styles.toggle, { backgroundColor: s.enabled ? Colors.primary : Colors.border }]}>
              <Text style={styles.toggleText}>{s.enabled ? 'BẬT' : 'TẮT'}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  </View>
);

export default SystemModule;

const styles = StyleSheet.create({
  container  : { gap: 16, paddingBottom: 40 },
  row        : { flexDirection: 'row', gap: 16, flexWrap: 'wrap' },
  rolesCard  : { flex: 1, minWidth: 240, backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border, gap: 4 },
  cardTitle  : { fontSize: 18, fontFamily: 'BeVietnamPro-Bold', color: Colors.primaryDark, marginBottom: 12 },
  roleRow    : { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10 },
  roleBorder : { borderTopWidth: 1, borderTopColor: Colors.border },
  roleDot    : { width: 8, height: 8, borderRadius: 4 },
  roleText   : { flex: 1, fontSize: 15, color: Colors.textPrimary, fontFamily: 'BeVietnamPro-Medium' },
  roleBadge  : { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  roleBadgeText: { fontSize: 13, fontFamily: 'BeVietnamPro-Bold' },
  manageBtn  : { marginTop: 8, padding: 12, borderWidth: 1, borderColor: Colors.primary, borderRadius: 10, alignItems: 'center' },
  manageBtnText: { fontSize: 15, color: Colors.primary, fontFamily: 'BeVietnamPro-SemiBold' },
  statusCard : { flex: 1, minWidth: 200, backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border },
  statusRow  : { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: Colors.border },
  statusLabel: { fontSize: 15, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Regular' },
  statusValue: { fontSize: 15, fontFamily: 'BeVietnamPro-Bold' },
  logsCard   : { backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border },
  logsHeader : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  viewAll    : { fontSize: 15, color: Colors.primary, fontFamily: 'BeVietnamPro-SemiBold' },
  logRow     : { flexDirection: 'row', gap: 12, paddingVertical: 12, alignItems: 'flex-start' },
  logBorder  : { borderTopWidth: 1, borderTopColor: Colors.border },
  logDot     : { width: 8, height: 8, borderRadius: 4, marginTop: 4 },
  logText    : { fontSize: 15, color: Colors.textPrimary, fontFamily: 'BeVietnamPro-Medium' },
  logMeta    : { fontSize: 13, color: Colors.textMuted, marginTop: 2, fontFamily: 'BeVietnamPro-Regular' },
  secCard    : { backgroundColor: Colors.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: Colors.border },
  secGrid    : { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  secItem    : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '48%', minWidth: 200, padding: 12, backgroundColor: Colors.bgInput, borderRadius: 10 },
  secLabel   : { fontSize: 15, color: Colors.textPrimary, flex: 1, fontFamily: 'BeVietnamPro-Medium' },
  toggle     : { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  toggleText : { fontSize: 12, fontFamily: 'BeVietnamPro-Bold', color: Colors.white },
});
