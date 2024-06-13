import React from 'react';
import DetailDestination from './components/DetailDestination';
import FeedbackInput from './components/FeedbackInput';
import FeedbackList from './components/FeedbackList';

function DetailPage() {
  return (
    <section className="p-6">
      <DetailDestination />
      <FeedbackInput />
      <FeedbackList />
    </section>
  );
}

export default DetailPage;
