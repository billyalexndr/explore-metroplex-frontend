import React from 'react';
import CloseButton from '../../components/Auth/CloseButton';
import ImageSection from '../../components/Auth/ImageSection';
import FormSection from './components/FormSection';

function LoginPage() {
  return (
    <div className="flex h-screen bg-white">
      <CloseButton />
      <ImageSection />
      <FormSection />
    </div>
  );
}

export default LoginPage;
