import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
      const response = await axios.get('/token', {
        withCredentials: true,
      });
      setAuth((prev) => ({ ...prev, accessToken: response.data.token }));
      return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
