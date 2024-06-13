import useAuth from './useAuth';
import api from '../utils/api';

const useLogOut = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      await api.logout();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return logout;
};

export default useLogOut;