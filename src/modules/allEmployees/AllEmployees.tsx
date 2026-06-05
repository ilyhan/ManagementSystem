import useGetAllEmployees from '@/common/hooks/api/employees/useGetAllEmployees';
import Loader from '@/common/ui/loader/Loader';
import EmployeesSection from '@/modules/allEmployees/components/employeesSection/EmployeesSection';

const AllEmployees = () => {
  const { data, isLoading } = useGetAllEmployees();

  return isLoading ? (
    <Loader style={{ margin: '0px 50%', translate: '-50%' }} />
  ) : data && data.length ? (
    <EmployeesSection employees={data} />
  ) : (
    <p>Сотрудники отсутсвуют</p>
  );
};

export default AllEmployees;
