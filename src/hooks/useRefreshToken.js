import { jwtDecode } from 'jwt-decode';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
      const response = await axios.get('/token', {
        withCredentials: true,
      });
      const accessToken = response.data.data.token;
      const { id, name, username, email, role } = jwtDecode(accessToken);
      setAuth(() => ({ user: { id, name, username, email }, role, accessToken }));
      return accessToken;
    };
    return refresh;
};

export default useRefreshToken;
