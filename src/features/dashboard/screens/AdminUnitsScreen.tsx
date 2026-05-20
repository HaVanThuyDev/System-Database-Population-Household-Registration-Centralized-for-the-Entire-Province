import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import AdminUnitsModule from '../modules/AdminUnitsModule';

const AdminUnitsScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="admin-units">
      <AdminUnitsModule />
    </DashboardLayout>
  );
};

export default AdminUnitsScreen;
