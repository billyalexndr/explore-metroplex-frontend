import React, { useEffect, useRef, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Badge from '../../../components/Dashboard/Badge';
import Pagination from '../../../components/Dashboard/Pagination';
import SearchBar from '../../../components/Dashboard/SearchBar';
import DestAdminCard from './components/DestAdminCard';
import api from '../../../utils/api';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import Loading from '../../../components/Loading';

function AdminPage() {
  const axiosPrivate = useAxiosPrivate();
  const [tours, setTours] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(true);
  const toursPerPage = 4;
  const pagesVisited = pageNumber * toursPerPage;
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);

  const citys = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'];

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTours = async () => {
      try {
        const tours = await api.getAllTour({
          signal: controller.signal,
          name: query,
        });
        if (isMounted) {
          setTours(tours);
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectRun.current) {
      setLoading(true);
      getTours();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectRun.current = true;
    };
  }, [location.search, navigate, location]);

  const handleDeleteTour = async ({ id }) => {
    if (window.confirm('Are you sure you want to delete tour?')) {
      try {
        await api.deleteTour({
          axiosPrivate,
          signal: new AbortController().signal,
          id,
        });
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const filteredTours = selectedCity
    ? tours.filter((tour) => tour.city === selectedCity)
    : tours;

  const displayTours = filteredTours
    .slice(pagesVisited, pagesVisited + toursPerPage)
    .map((tour) => (
      <DestAdminCard
        key={tour.id}
        id={tour.id}
        photo={tour.photo}
        name={tour.name}
        description={tour.description}
        rating={tour.rating}
        onDelete={handleDeleteTour}
      />
    ));

  const pageCount = Math.ceil(filteredTours.length / toursPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mx-10">
        <div className="flex mx-0 mt-7 w-full items-center justify-center gap-[550px]">
          <SearchBar />
          <Link
            to="/add-destination"
            type="button"
            className="w-1/3 flex items-center justify-center text-white mr-10 bg-[#006769] hover:bg-[#053a3b] focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <p className="flex items-center justify-center">
              Add Destination
              <IoAdd size={25} className="ml-1" />
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 mt-7">
          {citys.map((city) => (
            <Badge
              key={city}
              text={city}
              onClick={() => setSelectedCity(city === selectedCity ? '' : city)}
              isSelected={city === selectedCity}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-7">
          {displayTours}
        </div>
        <div className="flex items-center justify-center w-full mt-7">
          <Pagination pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
