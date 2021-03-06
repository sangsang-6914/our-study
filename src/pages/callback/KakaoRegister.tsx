import {snsRegisterAPI} from '@api/social';
import {RootState} from '@modules/index';
import {ComponentWrapper} from '@styles/common.style';
import {parsingURLCode} from '@utils/commonUtils';
import {handleException} from '@utils/errorUtils';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function KakaoRegister() {
  const navigate = useNavigate();
  const {code} = parsingURLCode();
  const userOid = useSelector((state: RootState) => state.loginInfo.oid);

  useEffect(() => {
    const snsRegister = async () => {
      try {
        const response = await snsRegisterAPI(String(code), 'kakao', userOid);
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
  }, [userOid]);
  return <ComponentWrapper></ComponentWrapper>;
}

export default KakaoRegister;
