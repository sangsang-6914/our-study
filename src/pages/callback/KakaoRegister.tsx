import {snsRegisterAPI} from '@api/social';
import {RootState} from '@modules/index';
import {ComponentWrapper} from '@styles/common.style';
import {parsingURLCode} from '@utils/commonUtils';
import {handleException} from '@utils/errorUtils';
import qs from 'qs';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

function KakaoRegister() {
  const {code} = parsingURLCode();
  const userOid = useSelector((state: RootState) => state.loginInfo.oid);

  useEffect(() => {
    const snsRegister = async () => {
      try {
        const response = await snsRegisterAPI(String(code), 'kakao', userOid);
        console.log(response.data);
      } catch (err) {
        handleException(err);
      }
    };
    snsRegister();
  }, [code]);
  return <ComponentWrapper>{code}</ComponentWrapper>;
}

export default KakaoRegister;
