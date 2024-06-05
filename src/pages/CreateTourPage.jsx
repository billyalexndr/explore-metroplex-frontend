import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useInput from '../hooks/useInput';

function CreateTourPage() {
  const axiosPrivate = useAxiosPrivate();
  const [name, onNameChange] = useInput('');
  const [city, onCityChange] = useInput('');
  const [price, onPriceChange] = useInput(0);
  const [capacity, onCapacityChange] = useInput(0);
  const [description, onDescriptionChange] = useInput('');
  const [address, onAddressChange] = useInput('');
  const [map, onMapChange] = useInput('');
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
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
    navigate('/');
  };

  return (
    <div className="">
      <form onSubmit={onSubmitHandler}>
        <input value={name} onChange={onNameChange} type="text" placeholder="Name" />
        <input value={city} onChange={onCityChange} type="text" placeholder="City" />
        <input value={price} onChange={onPriceChange} type="number" placeholder="Price" />
        <input value={capacity} onChange={onCapacityChange} type="number" placeholder="Capacity" />
        <input value={description} onChange={onDescriptionChange} type="text" placeholder="Description" />
        <input value={address} onChange={onAddressChange} type="text" placeholder="Address" />
        <input value={map} onChange={onMapChange} type="text" placeholder="Map" />
        <input onChange={fileSelected} type="file" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateTourPage;
