import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedFormModal from '../../../components/common/AnimatedFormModal';
import AddCitizenForm from '../../../components/forms/AddCitizenForm';

const AddCitizenScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <AnimatedFormModal onClose={() => navigation.goBack()}>
      <AddCitizenForm />
    </AnimatedFormModal>
  );
};

export default AddCitizenScreen;
