import {ComponentWrapper} from '@styles/common.style';
import {snsLoginAPI} from '@api/social';
import {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {handleException} from '@utils/errorUtils';
import {parsingURLCode} from '@utils/commonUtils';

function GitHub() {
  const {code} = parsingURLCode();
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
