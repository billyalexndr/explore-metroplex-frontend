import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NavUser from '../components/NavUser';
import Footer from '../../../../components/Dashboard/Footer';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import DestUserCard from './components/DestUserCard';
import Pagination from '../../../../components/Dashboard/Pagination';
import api from '../../../../utils/api';

function DestinationPage() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const toursPerPage = 4;
  const pagesVisited = pageNumber * toursPerPage;

  const options = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'];

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTours = async () => {
      try {
        const tours = await api.getAllTour({ signal: controller.signal });
        if (isMounted) {
          setTours(tours);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      getTours();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, []);

  const displayTours = tours
    .slice(pagesVisited, pagesVisited + toursPerPage)
    .map((tour) => (
      <DestUserCard
        key={tour.id}
        id={tour.id}
        photo={tour.photo}
        name={tour.name}
        description={tour.description}
        rating={tour.rating}
      />
    ));

  const pageCount = Math.ceil(tours.length / toursPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <NavUser />
      <div className="mx-10">
        <div className="flex mx-0 mt-7 w-full items-center justify-center gap-[550px]">
          <SearchBar />
          {/* <Dropdown
            options={options}
            onChange={(option) => setCity(option.value)}
            value={city}
            placeholder="-- choose city --"
            controlClassName="w-full text-center"
            menuClassName="w-full text-center"
          /> */}
          {/* <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            -- Select city --
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button> */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          {/* <Link
            to="/add-destination"
            type="button"
            className="w-1/3 flex items-center justify-center text-white mr-10 bg-[#40A578] hover:bg-[#006769] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <p className="flex items-center justify-center">
              Add Destination
              <IoAdd size={25} className="ml-1" />
            </p>
          </Link> */}
        </div>
        <div className="flex flex-col items-center justify-center text-3xl font-bold mt-7">
          <h1 className="text-[#006769]">Where Do You Want to Explore?</h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            {displayTours}
          </div>
          <div className="flex items-center justify-center w-full mt-7">
            <Pagination pageCount={pageCount} changePage={changePage} />
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
}

export default DestinationPage;
