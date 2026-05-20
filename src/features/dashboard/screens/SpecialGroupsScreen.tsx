import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import SpecialGroupsModule from '../modules/SpecialGroupsModule';

const SpecialGroupsScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="special-groups">
      <SpecialGroupsModule />
    </DashboardLayout>
  );
};

export default SpecialGroupsScreen;
