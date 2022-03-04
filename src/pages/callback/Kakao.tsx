import {snsLoginAPI} from '@api/social';
import {ComponentWrapper} from '@styles/common.style';
import {handleException} from '@utils/errorUtils';
import qs from 'qs';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Kakao() {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const snsLogin = async () => {
      try {
        const response = await snsLoginAPI(String(code), 'kakao');
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

export default Kakao;
