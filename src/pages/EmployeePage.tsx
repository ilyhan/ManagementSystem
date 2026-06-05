import { useParams } from 'react-router-dom';

const EmployeePage = () => {
  const { id } = useParams();

  return <div>Employee {id}</div>;
};

export default EmployeePage;
