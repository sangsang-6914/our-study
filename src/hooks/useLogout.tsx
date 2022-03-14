import {apiClient} from '@api/customAxios';
import {logout} from '@modules/loginInfo';
import {useDispatch} from 'react-redux';

const useLogout = () => {
  const dispatch = useDispatch();

  apiClient.defaults.headers.common['x-access-token'] = '';
  dispatch(logout());
};

export default useLogout;
