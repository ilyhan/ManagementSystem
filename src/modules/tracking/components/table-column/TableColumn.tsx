import { clsx } from '@/common/utils/lib';
import './style.scss';

// type Track = {
//     id: number;
//     title: string;
//     timeStart: number;
//     timeEnd: number;
//     date: string;
// }

type TableColumnProps = {
    // tracks: Track[];
    isWeekend?: boolean;
}

export const TableColumn = ({ isWeekend = false}: TableColumnProps) => {
    return (
        <div className='table-column'> 
            <div className={clsx('table-column__header', isWeekend && 'table-column__header--weekend')}>
                <p>пн</p>
                <p className='table-column__date'>17</p>
            </div>

            <div className='table-column__tracking'>
                <div className='table-column__track'>
                    <div className='table-column__time'>
                        <p>10:00</p> - <p>14:00</p>
                    </div>
                    <div className='table-column__content'>
                        sdcsdc sdcsd csdc sdc sdcdcsd csdc sd
                    </div>
                </div>

                <div className='table-column__track'>
                    <div className='table-column__time'>
                        <p>14:00</p> - <p>18:00</p>
                    </div>
                    <div className='table-column__content'>
                        sdcsdc sdcsd csdc sdc sdcdcsd csdc sd
                    </div>
                </div>

                <button className='table-column__button'>
                    + добавить трек
                </button>
            </div>
        </div>
    )
}