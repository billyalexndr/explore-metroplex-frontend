import React from 'react';
import PropTypes from 'prop-types';
import FeedbackCard from './FeedbackCard';

function FeedbackList({ feedbacks }) {
  return (
    <div className="mt-5 review-list">
      <h2 className="mb-4 text-2xl font-bold">Review ({feedbacks.length})</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            photo={feedback.user.profilePicture}
            name={feedback.user.name}
            createdAt={feedback.createdAt}
            rate={feedback.rate}
            text={feedback.text}
          />
        ))
      )}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default FeedbackList;
