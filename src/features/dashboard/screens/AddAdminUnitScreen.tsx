import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedFormModal from '../../../components/common/AnimatedFormModal';
import AddAdminUnitForm from '../../../components/forms/AddAdminUnitForm';

const AddAdminUnitScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <AnimatedFormModal onClose={() => navigation.goBack()}>
      <AddAdminUnitForm />
    </AnimatedFormModal>
  );
};

export default AddAdminUnitScreen;
