import {snsRegisterAPI} from '@api/social';
import {RootState} from '@modules/index';
import {ComponentWrapper} from '@styles/common.style';
import {parsingURLCode} from '@utils/commonUtils';
import {handleException} from '@utils/errorUtils';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function GoogleRegister() {
  const {code} = parsingURLCode();
  const userOid = useSelector((state: RootState) => state.loginInfo.oid);
  const navigate = useNavigate();

  useEffect(() => {
    const snsRegister = async () => {
      try {
        const response = await snsRegisterAPI(String(code), 'google', userOid);
        if (response.data?.dataMap?.accessToken) {
          navigate('/');
        } else {
          alert('등록 실패');
          navigate('/');
        }
      } catch (err) {
        handleException(err);
      }
    };
    snsRegister();
  }, [code, userOid]);
  return <ComponentWrapper>{code}</ComponentWrapper>;
}

export default GoogleRegister;
