import {joinAPI, updatePwd, updateUser} from '@api/user';
import {RootState} from '@modules/index';
import {IUserData} from '@pages/mypage/account/Account';
import {handleException} from '@utils/errorUtils';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import UserInfoView from './UserInfoView';
interface IForm {
  username: string;
  email: string;
  originalPassword: string;
  password: string;
  passwordCheck: string;
  mobile: string;
  address: string;
  addressDetail: string;
  postNum: string;
  gender: string;
}

interface IUserInfoProps {
  type: string;
  userinfo?: IUserData;
}

function UserInfo({type, userinfo}: IUserInfoProps) {
  const navigate = useNavigate();

  const [manClick, setManClick] = useState(true);
  const [womanClick, setWomanClick] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);

  useEffect(() => {
    if (userinfo?.gender === 'W') {
      setManClick(false);
      setWomanClick(true);
    }
  }, [userinfo]);

  let userOid = '';
  if (type === 'password') {
    userOid = useSelector((state: RootState) => state.loginInfo.oid);
  }

  const onSubmit = (data: IForm) => {
    // 회원가입 API 호출
    if (type === 'join') {
      setGender(data);
      join(data);

      // 회원정보 변경
    } else if (type === 'modify') {
      setGender(data);
      update(data);

      // 비밀번호 변경
    } else {
      updatePassword(data);
    }
  };

  const join = async (data: IForm) => {
    try {
      const response = await joinAPI(data);
      alert('회원가입 완료');
      navigate('/');
    } catch (err) {
      handleException(err);
    }
  };

  const update = async (data: IForm) => {
    try {
      const response = await updateUser(data, userinfo?.oid);
      if (response) {
        alert('수정 완료');
      }
    } catch (err) {
      handleException(err);
    }
  };

  const updatePassword = async (data: IForm) => {
    try {
      const payload = {
        oid: userOid,
        ...data,
      };
      const response = await updatePwd(payload);
      if (response) {
        alert('변경 완료');
        navigate('/');
      }
    } catch (err) {
      handleException(err);
    }
  };

  const setGender = (data: IForm) => {
    if (manClick) {
      data.gender = 'M';
    } else {
      data.gender = 'W';
    }
  };

  const onInValid = () => {
    console.log('not correct!');
  };

  const onManClick = () => {
    if (manClick) return;
    setManClick((prev) => !prev);
    setWomanClick((prev) => !prev);
  };

  const onWomanClick = () => {
    if (womanClick) return;
    setWomanClick((prev) => !prev);
    setManClick((prev) => !prev);
  };

  const onPostModalClick = () => {
    setIsPostModal((prev) => !prev);
  };

  const props = {
    onSubmit,
    onInValid,
    onManClick,
    onWomanClick,
    onPostModalClick,
    isPostModal,
    manClick,
    womanClick,
    setIsPostModal,
    type,
    userinfo,
  };

  return <UserInfoView {...props} />;
}

export default UserInfo;
