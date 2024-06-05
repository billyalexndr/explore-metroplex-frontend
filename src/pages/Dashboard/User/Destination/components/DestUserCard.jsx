import React from 'react';
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaEdit,
  FaRegTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DestUserCard = () => {
  return (
    <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/images/gedung.jpg" alt="" />
      </a>
      <div class="p-5">
        <Link to="/detail-destination">
          <h5 class="mb-2 text-justify text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p class="mb-3 text-justify text-base font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-between">
          <div>
            <button className="flex items-center justify-center gap-2 text-yellow-400">
              <FaStar size={20} />
              <p className="mt-1 text-base text-black">4.8</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestUserCard;
