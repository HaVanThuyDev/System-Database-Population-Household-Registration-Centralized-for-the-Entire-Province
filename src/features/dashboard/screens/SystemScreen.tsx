import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import SystemModule from '../modules/SystemModule';

const SystemScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="system">
      <SystemModule />
    </DashboardLayout>
  );
};

export default SystemScreen;
