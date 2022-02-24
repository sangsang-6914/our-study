import Modal from "@components/common/Modal";
import { FormError, InputForm, LoginJoinBtn } from "@styles/common.style";
import { ComponentWrapper, GenderBtn, GenderForm, JoinForm, JoinWrapper, SubTitle, Title } from "@styles/join.style";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { $CombinedState } from "redux";

interface IJoinViewProps {
  onSubmit: (data: any) => void;
  onInValid: () => void;
  onPostModalClick: () => void;
  manClick: boolean;
  womanClick: boolean;
  onManClick: () => void;
  onWomanClick: () => void;
  isPostModal: boolean;
  setIsPostModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
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

function UserInfoView({onSubmit, onInValid, onPostModalClick, manClick, womanClick, onManClick, onWomanClick, isPostModal, setIsPostModal, type }:IJoinViewProps) {
  const { register, formState: {errors}, handleSubmit, getValues, setFocus, setValue} = useForm({ mode: 'onChange'})
  const {t} = useTranslation()

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

  const setTitle = (type: string) => {
    const title = type === 'join' ? t('join.title') : type === 'modify' ? t('mypage.account.title') : t('mypage.passwordChange.title')
    return title
  }

  const setPasswordForm = (type: string) => {
    if (type === 'join' || type === 'password') {
      return (
        <>
          {type === 'password' && (
            <>
              <SubTitle>{t('mypage.passwordChange.originalPwd')}</SubTitle>
                <InputForm
                  {...register('originalPassword', {
                    required: `${t('join.validate.required')}`,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                      message: `${t('join.validate.password')}`
                    },
                  })}
                  type="password"
                  placeholder="******"
                />
              <FormError>{errors?.originalPassword?.message}</FormError>
            </>
          )}

          <SubTitle>{type === 'join' ? t('join.subtitle.password') : t('mypage.passwordChange.changePwd')}</SubTitle>
          <InputForm
            {...register('password', {
              required: `${t('join.validate.required')}`,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                message: `${t('join.validate.password')}`
              },
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
        </>
      )
    }
  }

  return (
    <>
      <ComponentWrapper type={type}>
        <JoinWrapper>
          <Title>{setTitle(type)}</Title>
          <JoinForm onSubmit={handleSubmit(onSubmit, onInValid)}>
            { type === 'password' || (
              <>
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
                    disabled={type === 'join' ? false : true}
                    placeholder={t('join.placeholder.email')}
                  />
                  <FormError>{errors?.email?.message}</FormError>
                  
                  { setPasswordForm(type) }

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
                  <LoginJoinBtn>{type === 'join' ? t('join.button.signup') : t('mypage.account.button')}</LoginJoinBtn>
              </>
            )}
            {
              type === 'password' && (
                <>
                 {setPasswordForm(type)}
                 <LoginJoinBtn>{t('mypage.passwordChange.button')}</LoginJoinBtn>
                </>
              )
            }
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
  )
}

export default UserInfoView;
