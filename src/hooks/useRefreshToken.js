import { jwtDecode } from 'jwt-decode';
import useAuth from './useAuth';
import api from '../utils/api';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const accessToken = await api.refreshToken();
    const { id, name, username, email, role } = jwtDecode(accessToken);
    setAuth(() => ({ user: { id, name, username, email }, role, accessToken }));
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
