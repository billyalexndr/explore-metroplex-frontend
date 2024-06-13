import React from 'react';

function NotFoundPage() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-lg text-gray-600">Page Not Found</p>
        <button
          type="button"
          onClick={goBack}
          className="inline-block px-6 py-3 text-white bg-green-700 rounded-lg hover:bg-green-800"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
