import React from 'react';
import DetailDestination from './components/DetailDestination';
import FeedbackInput from './components/FeedbackInput';
import FeedbackList from './components/FeedbackList';
import NavUser from '../components/NavUser';
import Footer from '../../../../components/Dashboard/Footer';

function DetailPage() {
  return (
    <div className="w-full">
      <NavUser />
      <section className="p-6">
        <DetailDestination />
        <FeedbackInput />
        <FeedbackList />
      </section>
      <Footer />
    </div>
  );
}

export default DetailPage;
