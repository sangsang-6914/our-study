import {snsLoginAPI} from '@api/social';
import {ComponentWrapper} from '@styles/common.style';
import {parsingURLCode} from '@utils/commonUtils';
import {handleException} from '@utils/errorUtils';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Kakao() {
  const {code} = parsingURLCode();
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
