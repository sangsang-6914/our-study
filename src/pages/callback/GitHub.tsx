import {ComponentWrapper} from '@styles/common.style';
import {snsLoginAPI} from '@api/social';
import qs from 'qs';
import {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {handleException} from '@utils/errorUtils';

function GitHub() {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const snsLogin = async () => {
      try {
        const response = await snsLoginAPI(String(code), 'github');
        console.log(response.data);
        navigate('/');
      } catch (err) {
        handleException(err);
      }
    };
    snsLogin();
  }, [code]);

  return <ComponentWrapper>{code}</ComponentWrapper>;
}

export default GitHub;
