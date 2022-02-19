import {ComponentWrapper, FormError, Overlay } from '@styles/common.style';
import {useForm, useWatch} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  GenderBtn,
  GenderForm,
  InputForm,
  JoinBtn,
  JoinForm,
  JoinWrapper,
  SubTitle,
  Title,
} from '@styles/join.style';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import Modal from '@components/common/Modal';
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

interface IPostData {
  address: string;
  addressEnglish: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  userSelectedType: string;
  zonecode: string;
}

function Join() {
  const {t} = useTranslation();
  const {register, handleSubmit, setValue, formState: {errors}, getValues, setFocus} = useForm<IForm>({ mode: 'onChange'});
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
    
    alert(`${data.userName}님 환영합니다.`)
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
  
  const onCompletePost = (data: IPostData) => {
    // 구주소 선택
    if (data.userSelectedType === 'J') {
      setValue('address', data.jibunAddress)
      setValue('postNum', data.zonecode)
    } else {
      setValue('address', data.roadAddress)
      setValue('postNum', data.zonecode)
    }
    
    setFocus('addressDetail')
    setIsPostModal(prev => !prev)
  }

  return (
    <>
      <ComponentWrapper>
        <JoinWrapper>
          <Title>{t('join.title')}</Title>
          <JoinForm onSubmit={handleSubmit(onSubmit, onInValid)}>
            <SubTitle>{t('join.subtitle.name')}</SubTitle>
            <InputForm
              type="text"
              {...register('userName', {
                required: `${t('join.validate.required')}`,
              })}
              placeholder={t('join.placeholder.name')}
            />
            <FormError>{errors?.userName?.message}</FormError>

            <SubTitle>{t('join.subtitle.email')}</SubTitle>
            <InputForm
              {...register('email', {
                required: `${t('join.validate.required')}`,
                pattern: {
                  value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: `${t('join.validate.email')}`
                }
              })}
              placeholder={t('join.placeholder.email')}
            />
            <FormError>{errors?.email?.message}</FormError>

            <SubTitle>{t('join.subtitle.password')}</SubTitle>
            <InputForm
              {...register('password', {
                required: `${t('join.validate.required')}`,
              })}
              type="password"
              placeholder="******"
            />
            <FormError>{errors?.password?.message}</FormError>

            <SubTitle>{t('join.subtitle.checkPassword')}</SubTitle>
            <InputForm
              {...register('passwordCheck', {
                required: true,
                validate: {
                  matchesPreviousPassword: (val) => {
                    const {password} = getValues();
                    return val === password || `${t('join.validate.passwordCheck')}`
                  }
                }
              })}
              type="password"
              placeholder="******"
            />
            <FormError>{errors?.passwordCheck?.message}</FormError>

            <SubTitle>{t('join.subtitle.gender')}</SubTitle>
            <GenderForm>
              <GenderBtn onClick={onManClick} click={manClick}>
                {t('join.button.man')}
              </GenderBtn>
              <GenderBtn onClick={onWomanClick} click={womanClick}>
                {t('join.button.woman')}
              </GenderBtn>
            </GenderForm>
            <SubTitle>{t('join.subtitle.phone')}</SubTitle>
            <InputForm
              {...register('mobile', {
                required: `${t('join.validate.required')}`,
                pattern: {
                  // value: /^\d{3}-\d{3,4}-\d{4}$/,
                  value: /^\d{10,11}$/,
                  message: `${t('join.validate.mobile')}`
                }
              })}
              placeholder={t('join.placeholder.mobile')}
            />
            <FormError>{errors?.mobile?.message}</FormError>

            <SubTitle>{t('join.subtitle.address')}</SubTitle>
            <InputForm
              {...register('address')}
              onClick={onPostModalClick}
              placeholder={t('join.placeholder.address')}
              style={{marginBottom: '5px'}}
              readOnly
            />
            <InputForm
              {...register('addressDetail')}
              placeholder={t('join.placeholder.addressDetail')}
              style={{marginBottom: '5px'}}
            />
            <InputForm
              {...register('postNum')}
              placeholder={t('join.placeholder.postNum')}
              style={{width: '50%'}}
              readOnly
            />
            <JoinBtn>{t('join.button.signup')}</JoinBtn>
          </JoinForm>
        </JoinWrapper>
      </ComponentWrapper>
      {
        isPostModal && <>
          <Modal 
            visible={true} 
            maskClosable={true} 
            onClose={onPostModalClick}
          >
            <DaumPostcode autoClose onComplete={onCompletePost} />
          </Modal>
        </>
      }
    </>
  );
}

export default Join;
