import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SearchBar from '../../../../components/Dashboard/SearchBar';
import DestUserCard from './components/DestUserCard';
import Pagination from '../../../../components/Dashboard/Pagination';
import api from '../../../../utils/api';
import Loading from '../../../../components/Loading';

function DestinationPage() {
  const [tours, setTours] = useState([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const effectRun = useRef(false);
  const [pageNumber, setPageNumber] = useState(0);
  const toursPerPage = 4;
  const pagesVisited = pageNumber * toursPerPage;

  const options = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'];

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

  const filteredTours = city
    ? tours.filter((tour) => tour.city === city)
    : tours;

  const displayTours = filteredTours
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
          <Dropdown
            className="w-[500px] drop-shadow-md"
            options={options}
            onChange={(option) => setCity(option.value)}
            value={city}
            placeholder="-- choose city --"
            controlClassName="w-full text-center"
            menuClassName="w-full text-center"
          />
        </div>
        <div className="flex items-center justify-center mt-7">
          <h1 className="text-[#006769] text-3xl font-bold">
            Where Do You Want to Explore?
          </h1>
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

export default DestinationPage;
