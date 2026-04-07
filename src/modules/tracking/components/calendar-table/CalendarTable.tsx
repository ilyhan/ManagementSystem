import { TableColumn } from '../table-column/TableColumn';
import './style.scss';

// скорее всего отдельный селл не нужен тк, много экзмепляров модалки будет и наверное это не сильно круто, 
// хотя она и будерт рендериться по условию, все равно будто лучше её тут намутить, ну или потом учти этот момент 

export const CalendarTable = () => {
    return (
        <div className='calendar-table'>

            <TableColumn/>
            <TableColumn/>
            <TableColumn/>
            <TableColumn/>
            <TableColumn/>
            <TableColumn isWeekend={true}/>
            <TableColumn isWeekend={true}/>
        </div>
    )
}