//В виде календаря трекер + в модалке весь трек за день
//первый запрос на получение месяца (то есть учесть день недели начала месяца, следующий запрос на трек в

import { CalendarTable } from './components/calendar-table/CalendarTable';

// каждом дне месяца), в информацию о месяце можно добавить количество затреканный часов
export const Tracking = () => {
  return (
    <div>
      <CalendarTable />
    </div>
  );
};
