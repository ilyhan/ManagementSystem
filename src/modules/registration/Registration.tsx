import { useRegistration } from '@/common/hooks/useRegistration';
import { IUserReq } from '@/common/interfaces/auth';
import Button from '@/common/ui/button/Button';
import Checkbox from '@/common/ui/checkbox/Checkbox';
import Input from '@/common/ui/input/Input';
import '@/modules/registration/style.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState<IUserReq>({
    email: '',
    name: '',
    surname: '',
    password: '',
    role: 'developer',
  });

  const { mutate, isSuccess, isError } = useRegistration();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ ...formData, role: 'teamlead' });
  };

  const handleCheck = () => {
    setFormData((prev) => ({
      ...prev,
      role: formData.role == 'developer' ? 'teamlead' : 'developer',
    }));
  };

  useEffect(() => {
    if (!isError && isSuccess) {
      navigate('/login');
    }
  }, [isSuccess, isError]);

  return (
    <div className="registration">
      <h1 className="registration__title">Регистрация</h1>

      <form className="registration__form" onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Почта"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <Input
          name="name"
          label="Имя"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
        <Input
          name="surname"
          label="Фамилия"
          value={formData.surname}
          onChange={handleChange}
          required={true}
        />
        <Input
          name="password"
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />

        <Checkbox label="Вы тимлид?" name="role" onChecked={handleCheck} />

        <Button type="submit" className="registration__button">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default Registration;
