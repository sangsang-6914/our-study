import {getUser} from '@api/user';
import UserInfo from '@components/user/UserInfo';
import {RootState} from '@modules/index';
import {handleException} from '@utils/errorUtils';
import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

export interface IUserData {
  email: string;
  password: string;
  username: string;
  mobile: string;
  birthdate: string;
  gender: string;
  address: string;
  addressDetail: string;
  postNum: string;
  roles: string;
  oid: string;
}

function Account() {
  const userOid = useSelector((state: RootState) => state.loginInfo.oid);

  const {data, isLoading} = useQuery<IUserData, Error>(
    'userData',
    () => getUser(userOid),
    {
      retry: false,
      onError: (error) => handleException(error),
      refetchOnWindowFocus: false,
    },
  );

  return (
    <>
      {isLoading ? 'loading....' : <UserInfo type="modify" userinfo={data} />}
    </>
  );
}

export default Account;
