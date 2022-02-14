import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  InputForm,
  JoinBtn,
  JoinWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './join.style';

function Join() {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue } = useForm();
  return (
    <>
      <Wrapper>
        <JoinWrapper>
          <Title>{t('join.title')}</Title>
          <SubTitle>{t('join.subtitle.name')}</SubTitle>
          <InputForm
            {...register('name')}
            placeholder={t('join.placeholder.name')}
          />
          <SubTitle>{t('join.subtitle.email')}</SubTitle>
          <InputForm
            {...register('email')}
            placeholder={t('join.placeholder.email')}
          />
          <SubTitle>{t('join.subtitle.password')}</SubTitle>
          <InputForm
            {...register('password')}
            type="password"
            placeholder="******"
          />
          <SubTitle>{t('join.subtitle.checkPassword')}</SubTitle>
          <InputForm
            {...register('passwordCheck')}
            type="password"
            placeholder="******"
          />
          <SubTitle>{t('join.subtitle.gender')}</SubTitle>
          <InputForm
            {...register('gender')}
            placeholder={t('join.placeholder.gender')}
          />
          <SubTitle>{t('join.subtitle.phone')}</SubTitle>
          <InputForm
            {...register('handphone')}
            placeholder={t('join.placeholder.phone')}
          />
          <SubTitle>{t('join.subtitle.address')}</SubTitle>
          <InputForm
            {...register('address')}
            placeholder={t('join.placeholder.address')}
          />
          <JoinBtn>{t('join.button.signup')}</JoinBtn>
        </JoinWrapper>
      </Wrapper>
    </>
  );
}

export default Join;
