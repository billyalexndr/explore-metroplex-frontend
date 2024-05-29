import useAuth from './useAuth';
import axios from '../api/axios';

const useLogOut = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      await axios.delete('/logout', {
        withCredentials: true,
      });
    } catch (error) {
      alert(error);
    }
  };

  return logout;
};

export default useLogOut;
