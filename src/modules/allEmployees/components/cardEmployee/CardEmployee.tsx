import { IEmployeeShort } from '@/common/interfaces/user';
import '@/modules/allEmployees/components/cardEmployee/style.scss';
import { getAvatarColor } from '@/modules/allEmployees/lib';

const CardEmployee = ({ id, name, surname, email, grade, phone }: IEmployeeShort) => {
  const color = getAvatarColor(id);

  const firstLetter = name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
  const fullName = name + ' ' + surname;

  return (
    <article className="card-employee__wrapper">
      <div className="card-employee__header">
        <div className={`card-employee__avatar card-employee__avatar_${color}`}>{firstLetter}</div>

        <div>
          <p className="card-employee__name">{fullName}</p>

          {grade && <p className="card-employee__grade">{grade}</p>}
        </div>
      </div>

      <div className="card-employee__contact">
        <div className="card-employee__contact-info">
          <p className="card-employee__contact-type">E-mail:</p>
          <p>{email}</p>
        </div>

        <div className="card-employee__contact-info">
          <p className="card-employee__contact-type">Телефон:</p>
          <p>{phone || '-'}</p>
        </div>
      </div>
    </article>
  );
};

export default CardEmployee;
