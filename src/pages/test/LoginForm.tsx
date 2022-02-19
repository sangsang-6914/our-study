import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LoginForm({ onSubmit }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          {t('title')}
          <input
            type="email"
            placeholder="user@test.com"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        <button disabled={!email || !password}>로그인</button>
      </form>
    </>
  );
}

export default LoginForm;
