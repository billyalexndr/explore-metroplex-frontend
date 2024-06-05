import React from 'react';
import NavAdmin from '../components/NavAdmin';
import TableUser from '../components/TableUser';
import Footer from '../../../../components/Dashboard/Footer';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import Pagination from '../../../../components/Dashboard/Pagination';

const DataUserPage = () => {
  return (
    <div>
      <NavAdmin />
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <div className="flex flex-col mt-7 font-bold text-[#006769] justify-center items-center">
            <h1>TABLE DATA USER</h1>
            <h1>EXPLORE METROPLEX</h1>
          </div>
          {/* <SearchBar /> */}
          <div className="mt-7">
            <TableUser />
          </div>
          <div className="flex items-center justify-center w-full mt-7">
            <Pagination />
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
};

export default DataUserPage;
