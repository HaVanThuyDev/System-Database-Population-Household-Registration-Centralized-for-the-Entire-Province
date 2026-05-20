// ============================================================
// CitizensModule – Quản lý Công dân (Hỗ trợ cuộn ngang trên Di động)
// ============================================================

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../theme/colors';

const CITIZENS = [
  { name: 'Trần Văn Hoàng',   gender: 'Nam', year: 1990, cccd: '038090012345', code: 'CD-123984', address: 'Số 12, Đường 3/2, P.1, TP. Trung Tâm',    job: 'Kỹ sư xây dựng', tag: 'Lao động',  tagColor: Colors.primary },
  { name: 'Lê Thị Mai Liên',  gender: 'Nữ',  year: 2012, cccd: '038312009876', code: 'CD-998273', address: 'Hẻm 45, Xã Hòa Xuân, H. Hòa Bình',        job: 'Học sinh',       tag: 'Trẻ em',    tagColor: '#16a34a' },
  { name: 'Nguyễn Văn Bình',  gender: 'Nam', year: 1955, cccd: '038055007654', code: 'CD-445512', address: 'Số 88, Đường Lê Lợi, P.3, TP. Trung Tâm', job: 'Hưu trí',        tag: 'Người cao tuổi', tagColor: '#7c3aed' },
  { name: 'Phạm Thị Hoa',     gender: 'Nữ',  year: 1985, cccd: '038085003421', code: 'CD-771234', address: 'Thôn 2, Xã Bình Minh, H. Miền Núi',        job: 'Nông dân',       tag: 'Lao động',  tagColor: Colors.primary },
];

const isWeb = Platform.OS === 'web';
const { width: screenWidth } = Dimensions.get('window');
const isDesktop = isWeb && screenWidth >= 1024;

const CitizensModule: React.FC = () => {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');

  const filtered = CITIZENS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.cccd.includes(search)
  );

  return (
    <View style={styles.container}>
      {/* Toolbar */}
      <View style={styles.toolbar}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm theo tên, CCCD, mã định danh..."
            placeholderTextColor={Colors.textMuted}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.toolbarRight}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>🔽 Lọc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddCitizen')}>
            <Text style={styles.addBtnText}>+ Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Table với tính năng cuộn ngang trên mobile */}
      <ScrollView horizontal={!isDesktop} showsHorizontalScrollIndicator={false} style={styles.scrollWrapper}>
        <View style={[styles.tableCard, !isDesktop && { minWidth: 900 }]}>
          <View style={styles.tableHead}>
            {['Công dân', 'Thông tin định danh', 'Địa chỉ thường trú', 'Nghề nghiệp', 'Đối tượng', 'Thao tác'].map((h, i) => (
              <Text key={i} style={[
                styles.th,
                i === 0 && { flex: 1.8 },
                i === 1 && { flex: 1.8 },
                i === 2 && { flex: 2.2 },
                i === 3 && { flex: 1.2 },
                i === 4 && { flex: 1.2 },
                i === 5 && { flex: 0.8 }
              ]}>{h}</Text>
            ))}
          </View>

          {filtered.map((c, i) => (
            <View key={i} style={[styles.tableRow, i % 2 === 0 && styles.tableRowAlt]}>
              {/* Citizen */}
              <View style={[styles.td, { flex: 1.8, flexDirection: 'row', alignItems: 'center', gap: 10 }]}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{c.name.split(' ').slice(-2).map(w => w[0]).join('')}</Text>
                </View>
                <View>
                  <Text style={styles.citizenName}>{c.name}</Text>
                  <Text style={styles.citizenSub}>{c.gender}, {c.year}</Text>
                </View>
              </View>
              {/* CCCD */}
              <View style={[styles.td, { flex: 1.8 }]}>
                <Text style={styles.cccdText}>{c.cccd}</Text>
                <Text style={styles.codeText}>Mã: {c.code}</Text>
              </View>
              {/* Address */}
              <Text style={[styles.td, styles.tdText, { flex: 2.2 }]} numberOfLines={2}>{c.address}</Text>
              {/* Job */}
              <Text style={[styles.td, styles.tdText, { flex: 1.2 }]}>{c.job}</Text>
              {/* Tag */}
              <View style={[styles.td, { flex: 1.2 }]}>
                <View style={[styles.tag, { backgroundColor: c.tagColor + '18' }]}>
                  <Text style={[styles.tagText, { color: c.tagColor }]}>{c.tag}</Text>
                </View>
              </View>
              {/* Actions */}
              <View style={[styles.td, { flex: 0.8, flexDirection: 'row', gap: 8 }]}>
                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() => navigation.navigate('CitizenDetails', { citizenCode: c.code, defaultName: c.name })}
                >
                  <Text>👁️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}><Text>✏️</Text></TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Phân trang đặt độc lập ngoài ScrollView */}
      <View style={styles.paginationCard}>
        <Text style={styles.paginationInfo}>Hiển thị {filtered.length} trong tổng số 1,854,230 bản ghi</Text>
        <View style={styles.paginationBtns}>
          {['Trước', '1', '2', 'Sau'].map((p, i) => (
            <TouchableOpacity key={i} style={[styles.pageBtn, p === '1' && styles.pageBtnActive]}>
              <Text style={[styles.pageBtnText, p === '1' && styles.pageBtnTextActive]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CitizensModule;

const styles = StyleSheet.create({
  container  : { gap: 16, paddingBottom: 40 },
  toolbar    : { flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' },
  searchBox  : { flex: 1, minWidth: 200, flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: 10, paddingHorizontal: 12, height: 44 },
  searchIcon : { fontSize: 16, marginRight: 8 },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: Colors.textPrimary,
    fontFamily: 'BeVietnamPro-Regular',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      } as any,
    }),
  },
  toolbarRight: { flexDirection: 'row', gap: 10 },
  filterBtn  : { paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderColor: Colors.border, borderRadius: 10, backgroundColor: Colors.white },
  filterBtnText: { fontSize: 15, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Medium' },
  addBtn     : { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: Colors.primary, borderRadius: 10 },
  addBtnText : { fontSize: 15, color: Colors.white, fontFamily: 'BeVietnamPro-SemiBold' },

  scrollWrapper: { width: '100%', borderRadius: 16 },
  tableCard  : { backgroundColor: Colors.white, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
  tableHead  : { flexDirection: 'row', backgroundColor: Colors.bgInput, paddingHorizontal: 16, paddingVertical: 14 },
  th         : { flex: 1, fontSize: 13, fontFamily: 'BeVietnamPro-Bold', color: Colors.textMuted, textTransform: 'uppercase' },
  tableRow   : { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center', borderTopWidth: 1, borderTopColor: Colors.border },
  tableRowAlt: { backgroundColor: '#fafafa' },
  td         : { flex: 1 },
  tdText     : { fontSize: 15, color: Colors.textSecondary, fontFamily: 'BeVietnamPro-Regular' },

  avatar     : { width: 38, height: 38, borderRadius: 19, backgroundColor: Colors.bgInput, alignItems: 'center', justifyContent: 'center' },
  avatarText : { fontSize: 14, fontFamily: 'BeVietnamPro-Bold', color: Colors.textSecondary },
  citizenName: { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
  citizenSub : { fontSize: 13, fontFamily: 'BeVietnamPro-Regular', color: Colors.textMuted, marginTop: 2 },
  cccdText   : { fontSize: 15, fontFamily: 'BeVietnamPro-SemiBold', color: Colors.textPrimary },
  codeText   : { fontSize: 13, fontFamily: 'BeVietnamPro-Regular', color: Colors.textMuted, marginTop: 2 },
  tag        : { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start' },
  tagText    : { fontSize: 13, fontFamily: 'BeVietnamPro-SemiBold' },
  actionBtn  : { padding: 6 },

  paginationCard : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18, backgroundColor: Colors.white, borderRadius: 16, borderWidth: 1, borderColor: Colors.border },
  paginationInfo : { fontSize: 14, fontFamily: 'BeVietnamPro-Regular', color: Colors.textMuted },
  paginationBtns : { flexDirection: 'row', gap: 6 },
  pageBtn        : { paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: Colors.border, borderRadius: 6 },
  pageBtnActive  : { backgroundColor: Colors.primary, borderColor: Colors.primary },
  pageBtnText    : { fontSize: 14, fontFamily: 'BeVietnamPro-Medium', color: Colors.textSecondary },
  pageBtnTextActive: { color: Colors.white, fontFamily: 'BeVietnamPro-Bold' },
});
