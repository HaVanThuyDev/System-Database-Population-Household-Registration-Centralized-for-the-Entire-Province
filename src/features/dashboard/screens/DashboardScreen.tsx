import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import OverviewModule from '../modules/OverviewModule';

const DashboardScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="overview">
      <OverviewModule />
    </DashboardLayout>
  );
};

export default DashboardScreen;
