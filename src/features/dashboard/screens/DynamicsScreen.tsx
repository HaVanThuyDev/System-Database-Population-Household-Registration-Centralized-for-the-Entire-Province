import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import DynamicsModule from '../modules/DynamicsModule';

const DynamicsScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="dynamics">
      <DynamicsModule />
    </DashboardLayout>
  );
};

export default DynamicsScreen;
