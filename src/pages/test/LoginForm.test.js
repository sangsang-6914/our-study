import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('enables button when both email and password are entered', () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <LoginForm onSubmit={onSubmit} />,
    );

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: 'test@1234.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
