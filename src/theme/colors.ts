// ============================================================
// COLORS THEME
// Bảng màu toàn cục của ứng dụng (Đã thiết lập theo màu cờ đỏ sao vàng)
// ============================================================

const palette = {
  // Red scale (Màu cờ đỏ sao vàng Việt Nam)
  red50 : '#fff5f5',
  red100: '#ffe3e3',
  red200: '#ffc9c9',
  red500: '#da251d', // Màu đỏ cờ chuẩn Việt Nam
  red600: '#b31010', // Đỏ đậm sang trọng
  red700: '#800808', // Đỏ tối sâu
  red800: '#5e0303',
  red900: '#400101',

  // Gold scale (Màu vàng sao cờ)
  gold50 : '#fffbeb',
  gold100: '#fef3c7',
  gold500: '#ffcd00', // Màu vàng cờ chuẩn Việt Nam
  gold600: '#d97706', // Vàng đậm/Vàng đất
  gold700: '#b45309',

  // Slate scale
  slate50 : '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',

  // Rose scale
  rose100: '#ffe4e6',
  rose600: '#e11d48',

  // Neutral
  white      : '#ffffff',
  transparent: 'transparent' as const,
} as const;

export const Colors = {
  // ── Brand (Tông đỏ - vàng cờ Việt Nam) ─────────────────
  primary        : palette.red500, // Đỏ cờ Việt Nam
  primaryDark    : palette.red600, // Đỏ đậm sâu
  primaryLight   : palette.red50,  // Tông đỏ siêu nhạt làm nền active
  accent         : palette.gold500, // Vàng sao cờ Việt Nam
  primaryBg      : palette.red500,
  primaryBgDeep  : palette.red700, // Đỏ tối đậm cho dải tiêu đề thương hiệu

  // ── Text ───────────────────────────────────────────────
  textPrimary    : palette.slate800,
  textSecondary  : palette.slate500,
  textMuted      : palette.slate400,
  textOnPrimary  : palette.white,
  textLink       : palette.red600,

  // ── Background ─────────────────────────────────────────
  bgScreen       : palette.white,
  bgInput        : palette.slate50,
  bgCard         : palette.white,

  // ── Border ─────────────────────────────────────────────
  border         : palette.slate200,
  borderFocus    : palette.red500,

  // ── Role Selector ──────────────────────────────────────
  roleActiveBg   : palette.red50,
  roleActiveBorder: palette.red500,
  roleInactiveBorder: palette.slate200,
  roleIconActive : palette.red500,
  roleIconInactive: palette.slate400,

  // ── Danger / Warning ───────────────────────────────────
  dangerBg       : palette.rose100,
  dangerIcon     : palette.rose600,

  // ── Shadow ─────────────────────────────────────────────
  shadowPrimary  : palette.slate300,

  // ── Overlay ────────────────────────────────────────────
  overlay        : 'rgba(15, 23, 42, 0.8)',
  glassBg        : 'rgba(255,255,255,0.9)',
  leftPanelBg    : palette.red600,
  leftPanelOverlay: 'rgba(179, 16, 16, 0.4)',

  // ── Misc ───────────────────────────────────────────────
  transparent    : palette.transparent,
  white          : palette.white,
} as const;

export type ColorKey = keyof typeof Colors;
