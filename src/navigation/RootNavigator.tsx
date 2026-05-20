// ============================================================
// ROOT NAVIGATOR
// Điều hướng gốc: Auth stack / Dashboard với cấu hình web URL linking
// ============================================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../store/auth/authSlice';
import LoginScreen         from '../features/auth/screens/LoginScreen';
import DashboardScreen     from '../features/dashboard/screens/DashboardScreen';
import AdminUnitsScreen    from '../features/dashboard/screens/AdminUnitsScreen';
import AddAdminUnitScreen  from '../features/dashboard/screens/AddAdminUnitScreen';
import CitizensScreen      from '../features/dashboard/screens/CitizensScreen';
import AddCitizenScreen    from '../features/dashboard/screens/AddCitizenScreen';
import CitizenDetailsScreen from '../features/dashboard/screens/CitizenDetailsScreen';
import HouseholdsScreen    from '../features/dashboard/screens/HouseholdsScreen';
import AddHouseholdScreen  from '../features/dashboard/screens/AddHouseholdScreen';
import ResidencyScreen     from '../features/dashboard/screens/ResidencyScreen';
import AddResidencyScreen  from '../features/dashboard/screens/AddResidencyScreen';
import DynamicsScreen      from '../features/dashboard/screens/DynamicsScreen';
import SpecialGroupsScreen from '../features/dashboard/screens/SpecialGroupsScreen';
import ReportsScreen       from '../features/dashboard/screens/ReportsScreen';
import GisScreen           from '../features/dashboard/screens/GisScreen';
import SystemScreen        from '../features/dashboard/screens/SystemScreen';

export type RootStackParamList = {
  Login         : undefined;
  Dashboard     : undefined;
  AdminUnits    : undefined;
  AddAdminUnit  : undefined;
  Citizens      : undefined;
  AddCitizen    : undefined;
  CitizenDetails: { citizenCode: string; defaultName?: string };
  Households    : undefined;
  AddHousehold  : undefined;
  Residency     : undefined;
  AddResidency  : undefined;
  Dynamics      : undefined;
  SpecialGroups : undefined;
  Reports       : undefined;
  Gis           : undefined;
  System        : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['http://localhost:8083', 'cudan://'],
  config: {
    screens: {
      Login: 'login',
      Dashboard: 'dasbroast',
      AdminUnits: 'administrative unit',
      AddAdminUnit: 'administrative/add',
      Citizens: 'citizens',
      AddCitizen: 'citizens/add',
      CitizenDetails: 'citizens/details/:citizenCode',
      Households: 'households',
      AddHousehold: 'households/add',
      Residency: 'residency',
      AddResidency: 'residency/add',
      Dynamics: 'dynamics',
      SpecialGroups: 'special-groups',
      Reports: 'reports',
      Gis: 'gis',
      System: 'system',
    },
  },
};

const RootNavigator: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="AdminUnits" component={AdminUnitsScreen} />
            <Stack.Screen 
              name="AddAdminUnit" 
              component={AddAdminUnitScreen} 
              options={{ presentation: 'transparentModal', animation: 'none' }}
            />
            <Stack.Screen name="Citizens" component={CitizensScreen} />
            <Stack.Screen name="CitizenDetails" component={CitizenDetailsScreen} />
            <Stack.Screen 
              name="AddCitizen" 
              component={AddCitizenScreen} 
              options={{ presentation: 'transparentModal', animation: 'none' }}
            />
            <Stack.Screen name="Households" component={HouseholdsScreen} />
            <Stack.Screen 
              name="AddHousehold" 
              component={AddHouseholdScreen} 
              options={{ presentation: 'transparentModal', animation: 'none' }}
            />
            <Stack.Screen name="Residency" component={ResidencyScreen} />
            <Stack.Screen 
              name="AddResidency" 
              component={AddResidencyScreen} 
              options={{ presentation: 'transparentModal', animation: 'none' }}
            />
            <Stack.Screen name="Dynamics" component={DynamicsScreen} />
            <Stack.Screen name="SpecialGroups" component={SpecialGroupsScreen} />
            <Stack.Screen name="Reports" component={ReportsScreen} />
            <Stack.Screen name="Gis" component={GisScreen} />
            <Stack.Screen name="System" component={SystemScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
