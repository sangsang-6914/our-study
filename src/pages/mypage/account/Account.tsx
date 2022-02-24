import { FormError, InputForm, LoginJoinBtn } from "@styles/common.style";
import { GenderBtn, GenderForm, JoinForm, SubTitle } from "@styles/join.style";
import { MypageCompTitle } from "@styles/mypage.style"
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "styled-components"

const AccountWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

function Account () {
  const {register, handleSubmit, formState: {errors}, getValues} = useForm()
  const {t} = useTranslation()
  const onValid = () => {
    
  }
  return (
    <AccountWrapper>
      <MypageCompTitle>회원정보 수정</MypageCompTitle>
      <JoinForm onSubmit={handleSubmit(onValid)}>
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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
              message: '비밀번호는 8자이상 입력하고, 영문, 숫자, 특수문자를 포함해야 합니다.'
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

        <SubTitle>{t('join.subtitle.gender')}</SubTitle>
        <GenderForm>
          <GenderBtn>
            {t('join.button.man')}
          </GenderBtn>
          <GenderBtn>
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
        <LoginJoinBtn>{t('join.button.signup')}</LoginJoinBtn>
      </JoinForm>
    </AccountWrapper>
  )
}

export default Account