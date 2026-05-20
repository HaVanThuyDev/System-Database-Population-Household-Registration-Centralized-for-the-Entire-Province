import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { UserRole, ROLE_LABELS } from '../../../constants/auth.constants';
import { Colors } from '../../../theme/colors';

interface RoleSelectorProps {
  selected : UserRole;
  onChange : (role: UserRole) => void;
}

const ROLE_ICONS: Record<UserRole, keyof typeof Feather.glyphMap> = {
  [UserRole.PROVINCE]: 'shield',
  [UserRole.COMMUNE] : 'home',
};

const ROLES = [UserRole.PROVINCE, UserRole.COMMUNE];

const RoleSelector: React.FC<RoleSelectorProps> = ({ selected, onChange }) => {
  return (
    <View style={styles.container}>
      {ROLES.map(role => {
        const isActive = selected === role;
        return (
          <TouchableOpacity
            key={role}
            style={[styles.roleBtn, isActive && styles.roleBtnActive]}
            onPress={() => onChange(role)}
            activeOpacity={0.75}
          >
            <Feather 
              name={ROLE_ICONS[role]} 
              size={24} 
              color={isActive ? Colors.primary : Colors.roleIconInactive} 
              style={styles.icon}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {ROLE_LABELS[role].toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RoleSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap          : 12,
  },
  roleBtn: {
    flex           : 1,
    alignItems     : 'center',
    justifyContent : 'center',
    paddingVertical: 18,
    borderRadius   : 14,
    borderWidth    : 2,
    borderColor    : Colors.roleInactiveBorder,
    backgroundColor: Colors.bgScreen,
    gap            : 8,
  },
  roleBtnActive: {
    borderColor    : Colors.roleActiveBorder,
    backgroundColor: Colors.roleActiveBg,
  },
  icon: {
    marginBottom: 0,
  },
  label: {
    fontSize    : 14,
    fontFamily  : 'BeVietnamPro-Bold',
    color       : Colors.textSecondary,
    letterSpacing: 0.5,
  },
  labelActive: {
    color: Colors.roleIconActive,
  },
});
