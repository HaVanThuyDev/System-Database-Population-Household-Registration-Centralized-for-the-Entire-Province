import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import HouseholdsModule from '../modules/HouseholdsModule';

const HouseholdsScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="households">
      <HouseholdsModule />
    </DashboardLayout>
  );
};

export default HouseholdsScreen;
