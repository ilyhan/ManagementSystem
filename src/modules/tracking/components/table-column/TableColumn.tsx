import { clsx } from '@/common/utils/lib';
import { IDayTracking } from '@/common/interfaces/tracking';
import './style.scss';
import { CreateTrackModal } from '../create-track-modal/CreateTrackModal';
import { useState } from 'react';

type TableColumnProps = {
  isWeekend?: boolean;
  date: number;
  weekDay: string;
  fullDate: Date;
  tracks?: IDayTracking[];
};

export const TableColumn = ({
  isWeekend = false,
  date,
  weekDay,
  fullDate,
  tracks,
}: TableColumnProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="table-column">
      <div className={clsx('table-column__header', isWeekend && 'table-column__header--weekend')}>
        <p>{weekDay}</p>
        <p className="table-column__date">{date}</p>
      </div>

      <div className="table-column__tracking">
        {tracks?.map((track) => (
          <div key={track.id} className="table-column__track">
            <div className="table-column__time">затрачено: {track.reservedhours} ч.</div>
            <div className="table-column__content">{track.description}</div>
          </div>
        ))}

        <button className="table-column__button" onClick={() => setOpen(true)}>
          + добавить трек
        </button>
      </div>

      <CreateTrackModal date={fullDate} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
