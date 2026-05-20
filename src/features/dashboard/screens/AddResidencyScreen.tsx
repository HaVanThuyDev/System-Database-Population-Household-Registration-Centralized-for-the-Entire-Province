import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedFormModal from '../../../components/common/AnimatedFormModal';
import AddResidencyForm from '../../../components/forms/AddResidencyForm';

const AddResidencyScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <AnimatedFormModal onClose={() => navigation.goBack()}>
      <AddResidencyForm />
    </AnimatedFormModal>
  );
};

export default AddResidencyScreen;
