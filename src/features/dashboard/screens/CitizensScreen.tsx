import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import CitizensModule from '../modules/CitizensModule';

const CitizensScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="citizens">
      <CitizensModule />
    </DashboardLayout>
  );
};

export default CitizensScreen;
