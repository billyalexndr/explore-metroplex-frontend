import axios from '../api/axios';

const api = (() => {
  async function register({ name, username, email, password }) {
    const response = await axios.post(
      '/register',
      JSON.stringify({
        name,
        username,
        email,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );

    const responseJson = await response.data;
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;
    return user;
  }

  async function login({ email, password }) {
    const response = await axios.post(
      '/login',
      JSON.stringify({
        email,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getOwnProfile({ axiosPrivate, signal }) {
    const response = await axiosPrivate.get('/users/me', {
      signal,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function updatePassword({ axiosPrivate, signal, currentPassword, newPassword }) {
    const response = await axiosPrivate.patch(
      '/users/me/password',
      JSON.stringify({
        currentPassword,
        newPassword,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function logout() {
    const response = await axios.delete('/logout', {
      withCredentials: true,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function getAllUser({ axiosPrivate, signal }) {
    const response = await axiosPrivate.get('/users', {
      signal,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { users } } = responseJson;

    return users;
  }

  async function updateUser({ axiosPrivate, signal, id, name, username, email, role }) {
    const response = await axiosPrivate.patch(
      `/users/${id}`,
      JSON.stringify({
        name,
        username,
        email,
        role,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function deleteUser({ axiosPrivate, signal, id }) {
    const response = await axiosPrivate.delete(
      `/users/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function getAllTour(signal) {
    const response = await axios.get('/tours', {
      signal,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { tours } } = responseJson;

    return tours;
  }

  async function getTourById({ signal, id }) {
    const response = await axios.get(`/tours/${id}`, {
      signal,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailTour } } = responseJson;

    return detailTour;
  }

  async function createTour({
    axiosPrivate,
    signal,
    name,
    city,
    price,
    capacity,
    description,
    address,
    map,
    image,
  }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('map', map);
    formData.append('image', image);

    const response = await axiosPrivate.post(
      '/tours',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { tour } } = responseJson;

    return tour;
  }

  async function updateTour({
    axiosPrivate,
    signal,
    id,
    name,
    city,
    price,
    capacity,
    description,
    address,
    map,
    image,
  }) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('map', map);
    formData.append('image', image);

    const response = await axiosPrivate.patch(
      `/tours/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { tour } } = responseJson;

    return tour;
  }

  async function deleteTour({ axiosPrivate, signal, id }) {
    const response = await axiosPrivate.delete(
      `/tours/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function createReservation({
    axiosPrivate,
    signal,
    id,
    name,
    phone,
    email,
    ticket,
    subtotal,
    reservedAt,
  }) {
    const response = await axiosPrivate.post(
      `/tours/${id}/reservations`,
      JSON.stringify({
        name,
        phone,
        email,
        ticket,
        subtotal,
        reservedAt,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function getReservations({ axiosPrivate, signal }) {
    const response = await axiosPrivate.get('/reservations', {
      signal,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { reservations } } = responseJson;

    return reservations;
  }

  async function cancelReservation({ axiosPrivate, signal, id }) {
    const response = await axiosPrivate.patch(
      `/reservations/${id}/cancel`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function createFeedback({ axiosPrivate, signal, id, text, rate }) {
    const response = await axiosPrivate.post(
      `/tours/${id}/feedback`,
      JSON.stringify({
        text,
        rate,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
      {
        signal,
      },
    );

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function refreshToken() {
    const response = await axios.get('/token', {
      withCredentials: true,
    });

    const responseJson = await response.data;

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  return {
    register,
    login,
    getOwnProfile,
    updatePassword,
    logout,
    getAllUser,
    updateUser,
    deleteUser,
    getAllTour,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
    createReservation,
    getReservations,
    cancelReservation,
    createFeedback,
    refreshToken,
  };
})();

export default api;
