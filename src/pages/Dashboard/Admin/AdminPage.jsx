import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Badge from '../../../components/Dashboard/Badge';
import Footer from '../../../components/Dashboard/Footer';
import Pagination from '../../../components/Dashboard/Pagination';
import SearchBar from '../../../components/Dashboard/SearchBar';
import NavAdmin from './components/NavAdmin';
import DestAdminCard from './components/DestAdminCard';

const AdminPage = () => {
  return (
    <div>
      <NavAdmin />
      <div className="mx-10">
        <div className="flex mx-0 mt-7 w-full items-center justify-center gap-[550px]">
          <SearchBar />
          <Link
            to="/add-destination"
            type="button"
            class="w-1/3 flex items-center justify-center text-white mr-10 bg-[#40A578] hover:bg-[#006769] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <p className="flex items-center justify-center">
              Add Destination
              <IoAdd size={25} className="ml-1" />
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-7">
          <Badge />
        </div>
        <div className="flex gap-4 mt-7">
          <DestAdminCard />
          <DestAdminCard />
          <DestAdminCard />
          <DestAdminCard />
        </div>
        <div className="flex items-center justify-center w-full mt-7">
          <Pagination />
        </div>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
