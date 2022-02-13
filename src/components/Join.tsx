import { useForm } from 'react-hook-form';
import {
  InputForm,
  JoinBtn,
  JoinWrapper,
  SubTitle,
  Title,
  Wrapper,
} from '../style/join';

function Join() {
  const { register, handleSubmit, setValue } = useForm();
  return (
    <>
      <Wrapper>
        <JoinWrapper>
          <Title>회원가입</Title>
          <SubTitle>이름</SubTitle>
          <InputForm {...register('name')} placeholder="이름을 입력하세요." />
          <SubTitle>이메일</SubTitle>
          <InputForm
            {...register('email')}
            placeholder="이메일을 입력하세요."
          />
          <SubTitle>비밀번호</SubTitle>
          <InputForm
            {...register('password')}
            type="password"
            placeholder="******"
          />
          <SubTitle>비밀번호 확인</SubTitle>
          <InputForm
            {...register('passwordCheck')}
            type="password"
            placeholder="******"
          />
          <SubTitle>성별</SubTitle>
          <InputForm {...register('gender')} placeholder="성별을 선택하세요." />
          <SubTitle>연락처</SubTitle>
          <InputForm
            {...register('handphone')}
            placeholder="연락처를 입력하세요."
          />
          <SubTitle>주소</SubTitle>
          <InputForm
            {...register('address')}
            placeholder="주소를 입력하세요."
          />
          <JoinBtn>가입하기</JoinBtn>
        </JoinWrapper>
      </Wrapper>
    </>
  );
}

export default Join;
