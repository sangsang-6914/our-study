import { joinAPI, updatePwd, updateUser } from '@api/user';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoView from './UserInfoView';
interface IForm {
  userName: string;
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
}

function UserInfo({type}:IUserInfoProps) {
  const navigate = useNavigate()
  
  const [manClick, setManClick] = useState(true);
  const [womanClick, setWomanClick] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);

  const onSubmit = (data: IForm) => {
    // 회원가입 API 호출
    if (type === 'join') {
      setGender(data)
      joinAPI(data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      alert('회원가입 완료')
      navigate('/')

    // 회원정보 변경
    } else if (type === 'modify') {
      setGender(data)
      updateUser(data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      alert('정보수정 완료')

    // 비밀번호 변경
    } else {
      updatePwd(data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      alert('비밀번호 변경 완료')
    }
  };

  const setGender = (data: IForm) => {
    if (manClick) {
      data.gender = 'M'
    } else {
      data.gender = 'W'
    }
  }

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
    setIsPostModal(prev => !prev)
  }
  
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
    type
  }

  return (
    <UserInfoView {...props}/>
  );
}

export default UserInfo;
