import { jwtDecode } from 'jwt-decode';
import useAuth from './useAuth';
import api from '../utils/api';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const accessToken = await api.refreshToken();
    setAuth((prev) => {
      return { ...prev, accessToken };
    });
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
