import React from 'react';

function ImageSection() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center overflow-y-hidden">
      <div className="w-full">
        <img
          src="/images/image-user-login.jpg"
          className="object-cover w-full"
          alt="User Login"
        />
      </div>
    </div>
  );
}

export default ImageSection;
