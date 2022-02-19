import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import JoinView from './JoinView';
interface IForm {
  userName: string;
  email: string;
  password: string;
  passwordCheck: string;
  mobile: string;
  address: string;
  addressDetail: string;
  postNum: string;
  gender: string;
}

function Join() {
  const navigate = useNavigate()
  
  const [manClick, setManClick] = useState(true);
  const [womanClick, setWomanClick] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);

  const onSubmit = (data: IForm) => {
    // 회원가입 API 호출
    if (manClick) {
      data.gender = 'M'
    } else {
      data.gender = 'W'
    }

    navigate('/')
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
    setIsPostModal
  }

  return (
    <JoinView {...props}/>
  );
}

export default Join;
