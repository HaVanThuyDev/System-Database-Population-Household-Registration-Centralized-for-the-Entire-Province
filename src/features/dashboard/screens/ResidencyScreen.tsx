import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import ResidencyModule from '../modules/ResidencyModule';

const ResidencyScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="residency">
      <ResidencyModule />
    </DashboardLayout>
  );
};

export default ResidencyScreen;
