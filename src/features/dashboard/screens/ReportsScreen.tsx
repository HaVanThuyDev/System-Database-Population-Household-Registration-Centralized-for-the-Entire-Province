import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import ReportsModule from '../modules/ReportsModule';

const ReportsScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="reports">
      <ReportsModule />
    </DashboardLayout>
  );
};

export default ReportsScreen;
