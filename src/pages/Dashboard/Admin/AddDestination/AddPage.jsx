import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import CardInputDestination from '../components/CardInputDestination';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import api from '../../../../utils/api';

function AddPage() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const onSubmitHandler = async ({
    name, city, price, capacity, description, address, map, file,
  }) => {
    try {
      await api.createTour({
        axiosPrivate,
        signal: null,
        name,
        city,
        price,
        capacity,
        description,
        address,
        map,
        image: file,
      });
    } catch (error) {
      alert(error.response.data.message);
    }
    navigate('/admin');
  };

  return (
    <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="sticky top-0 flex flex-wrap items-center justify-between w-full p-2 mx-auto bg-white border-b">
        <Link
          to="/admin"
          className="flex items-center p-2 space-x-3 rtl:space-x-reverse"
        >
          <IoIosArrowBack size={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Back to Home
          </span>
        </Link>
      </div>
      <CardInputDestination onSubmit={onSubmitHandler} />
    </div>
  );
}

export default AddPage;
