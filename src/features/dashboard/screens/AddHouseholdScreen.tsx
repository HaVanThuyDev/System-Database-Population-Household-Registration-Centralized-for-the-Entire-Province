import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedFormModal from '../../../components/common/AnimatedFormModal';
import AddHouseholdForm from '../../../components/forms/AddHouseholdForm';

const AddHouseholdScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <AnimatedFormModal onClose={() => navigation.goBack()}>
      <AddHouseholdForm />
    </AnimatedFormModal>
  );
};

export default AddHouseholdScreen;
