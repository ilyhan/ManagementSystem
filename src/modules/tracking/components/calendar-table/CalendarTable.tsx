import useGetTracking from '@/common/hooks/api/tracking/useGetWeekTrack';
import { TableColumn } from '../table-column/TableColumn';
import './style.scss';
import {
  formatDate,
  getCurrentMonthByWeek,
  getDateRange,
  getNumberWeek,
} from '../../utils/getDateRange';
import { useState } from 'react';
import { IDayTracking } from '@/common/interfaces/tracking';

// скорее всего отдельный селл не нужен тк, много экзмепляров модалки будет и наверное это не сильно круто,
// хотя она и будерт рендериться по условию, все равно будто лучше её тут намутить, ну или потом учти этот момент

const weekNameDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

export const CalendarTable = () => {
  const currentDate = new Date();
  const [week, setWeek] = useState(getNumberWeek(currentDate));

  const { data } = useGetTracking(week, currentDate.getFullYear());
  const weekDates = getDateRange(week, currentDate.getFullYear());
  const currentMonth = getCurrentMonthByWeek(week);

  const getTracksByDate = (date: Date): IDayTracking[] => {
    if (data) {
      const formatedDate = formatDate(date);

      for (let i = 0; i < data.length; i++) {
        if (data[i].date === formatedDate) {
          return data[i].data;
        }
      }
    }

    return [];
  };

  return (
    <>
      <div className="calendar-table__month">
        <p>{currentMonth}</p>
        <button className="calendar-table__button" onClick={() => setWeek(week - 1)}>
          &lt;
        </button>

        <button className="calendar-table__button" onClick={() => setWeek(week + 1)}>
          &gt;
        </button>
      </div>
      <div className="calendar-table">
        {weekDates.map((item, ind) => {
          const dayTracking = getTracksByDate(item);

          return (
            <TableColumn
              date={item.getDate()}
              weekDay={weekNameDay[ind]}
              isWeekend={ind >= 5}
              tracks={dayTracking}
              fullDate={weekDates[ind]}
            />
          );
        })}
      </div>
    </>
  );
};
