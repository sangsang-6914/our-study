import {snsRegisterAPI} from '@api/social';
import {RootState} from '@modules/index';
import {ComponentWrapper} from '@styles/common.style';
import qs from 'qs';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

function KakaoRegister() {
  const {code} = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const userOid = useSelector((state: RootState) => state.loginInfo.oid);
  console.log(userOid);

  useEffect(() => {
    snsRegisterAPI(String(code), 'kakao', userOid)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code]);
  return <ComponentWrapper>{code}</ComponentWrapper>;
}

export default KakaoRegister;
