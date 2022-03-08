import {snsLoginAPI} from '@api/social';
import {ComponentWrapper} from '@styles/common.style';
import {parsingURLCode} from '@utils/commonUtils';
import {handleException} from '@utils/errorUtils';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Google() {
  const {code} = parsingURLCode();
  const navigate = useNavigate();

  useEffect(() => {
    const snsLogin = async () => {
      try {
        const response = await snsLoginAPI(String(code), 'google');
        console.log(response.data);
        navigate('/');
        // TODO: aceess token 및 로그인 정보 처리 (sns 로그인 api 테스트 후)
      } catch (err) {
        handleException(err);
      }
    };
    snsLogin();
  }, [code]);

  return <ComponentWrapper>{code}</ComponentWrapper>;
}

export default Google;
