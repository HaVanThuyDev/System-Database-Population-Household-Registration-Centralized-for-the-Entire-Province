import React from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import GisModule from '../modules/GisModule';

const GisScreen: React.FC = () => {
  return (
    <DashboardLayout activeModule="gis">
      <GisModule />
    </DashboardLayout>
  );
};

export default GisScreen;
