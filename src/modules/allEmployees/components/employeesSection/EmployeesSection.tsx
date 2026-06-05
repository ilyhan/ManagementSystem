import { IEmployeeShort } from '@/common/interfaces/user';
import CardEmployee from '@/modules/allEmployees/components/cardEmployee/CardEmployee';
import '@/modules/allEmployees/components/employeesSection/style.scss';

interface IEmployeesSectionProps {
  employees: IEmployeeShort[];
}

const EmployeesSection = ({ employees }: IEmployeesSectionProps) => {
  return (
    <section>
      <ul className="list">
        {employees.map((employee) => (
          <li>
            <CardEmployee {...employee} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployeesSection;
