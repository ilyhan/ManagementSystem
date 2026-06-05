import Button from '@/common/ui/button/Button';
import Input from '@/common/ui/input/Input';
import '@/modules/login/style.scss';
import { Link } from 'react-router-dom';
import useLogin from '@/common/hooks/useLogin';
import { FormEvent, useState } from 'react';
import { IUserLogin } from '@/common/interfaces/auth';

const Login = () => {
  const { mutate } = useLogin();
  const [formData, setFormData] = useState<IUserLogin>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>

      <form className="login__form" onSubmit={handleSubmit}>
        <Input name="email" label="Почта" value={formData.email} onChange={handleChange} />
        <Input
          name="password"
          type="password"
          label="Пароль"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" className="login__button">
          Войти
        </Button>

        <Link to="/registration" className="login__link">
          Нет аккаунта?
        </Link>
      </form>
    </div>
  );
};

export default Login;
