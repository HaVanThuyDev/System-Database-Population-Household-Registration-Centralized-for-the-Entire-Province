import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '../../../theme/colors';

const { width: SCREEN_W } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && SCREEN_W >= 768;

export const loginStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // Thay Colors.primaryBg thành 'transparent' để nhìn xuyên qua ảnh nền
    backgroundColor: 'transparent', 
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: isDesktop ? 40 : 20,
    // Đảm bảo minHeight chiếm toàn bộ chiều cao trình duyệt trên Web
    minHeight: isWeb ? ('100vh' as any) : '100%', 
    backgroundColor: 'transparent', // Đảm bảo lớp này cũng trong suốt
  },
  card: {
    width: isDesktop ? 900 : '100%',
    maxWidth: isDesktop ? 960 : 440,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.96)', // Premium glassy look
    borderRadius: isDesktop ? 24 : 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.3,
    shadowRadius: 32,
    elevation: 20,
    flexDirection: isDesktop ? 'row' : 'column',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  leftPanel: {
    display: isDesktop ? 'flex' : 'none',
    flex: 1,
    backgroundColor: Colors.leftPanelBg,
    paddingHorizontal: 40,
    paddingVertical: 48,
    justifyContent: 'space-between',
  },
  leftPanelTop: { gap: 24 },
  leftPanelBottom: { gap: 16 },
  leftFeatureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leftFeatureIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftFeatureIconText: { fontSize: 16 },
  leftFeatureText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  leftStatRow: { flexDirection: 'row', gap: 20 },
  leftStatItem: { alignItems: 'center', gap: 4 },
  leftStatNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.white,
  },
  leftStatLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
  },
  headerBanner: {
    display: isDesktop ? 'none' : 'flex',
    backgroundColor: Colors.leftPanelBg,
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 28,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  brandIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandIcon: { fontSize: 20 },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'BeVietnamPro-Bold',
    color: Colors.white,
    lineHeight: 32,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 15,
    fontFamily: 'BeVietnamPro-Regular',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 22,
  },
  brandName: {
    fontSize: 24,
    fontFamily: 'BeVietnamPro-ExtraBold',
    color: Colors.white,
    letterSpacing: 1,
  },
  formArea: {
    flex: isDesktop ? 1 : undefined,
    padding: isDesktop ? 48 : 28,
    gap: 24,
    justifyContent: isDesktop ? 'center' : undefined,
  },
  webBrandRow: {
    display: isDesktop ? 'flex' : 'none',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  webBrandIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webBrandIcon: { fontSize: 18 },
  webBrandName: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: 1,
  },
  formTitle: {
    fontSize: isDesktop ? 26 : 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  formSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  globalError: {
    backgroundColor: Colors.dangerBg,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  globalErrorText: {
    flex: 1,
    fontSize: 13,
    color: Colors.dangerIcon,
    fontWeight: '500',
  },
  submitBtn: { marginTop: 4 },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
    width: '100%',
  },
  faceIdBtn: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: Colors.bgInput,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportSection: {
    alignItems: 'center',
    gap: 12,
    paddingBottom: 4,
  },
  supportTitle: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  supportRow: { flexDirection: 'row', gap: 24 },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  supportIcon: {
     fontSize: 12,
    fontWeight: '700',
    fontFamily: 'BeVietnamPro-Regular',
    color: Colors.textSecondary,
     },
  supportText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'BeVietnamPro-Regular',
    color: Colors.textSecondary,
  },
  brandImage: {
    width: 40,
    height: 40,
  },

  webBrandImage: {
    width: 60,
    height: 60,
  },
 
});