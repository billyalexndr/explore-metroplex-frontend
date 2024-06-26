import React from 'react';
import ImageSection from '../../components/Auth/ImageSection';
import FormSection from './components/FormSection';

function RegisterPage() {
  return (
    <div className="flex h-screen bg-white">
      <ImageSection />
      <FormSection />
    </div>
  );
}

export default RegisterPage;
