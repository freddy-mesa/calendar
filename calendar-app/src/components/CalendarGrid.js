import './CalendarGrid.css';
import moment from 'moment'

import convertToTable from '../utils/convertToTable';

const CalendarGrid = (props) => {

  const previousMonthDays = [];
  const currentMonthDays = [];
  const nextMonthDays = [];

  const firstDayOfMonth = moment(props.date).startOf("month") 
  const previousOffSet = firstDayOfMonth.weekday();
  if (previousOffSet > 0) {
    var firstDayWeek = moment(firstDayOfMonth).subtract(previousOffSet, "days")
    for (const previousDate = firstDayWeek; previousDate.isBefore(firstDayOfMonth); moment(previousDate.add(1, 'days'))) {
      previousMonthDays.push(
        <td key={previousDate.format("YYYY-MM-DD")} className="calendar-day empty">
          {previousDate.date()}
        </td>
      );
    } 
  }

  const lastDayOfMonth = moment(props.date).endOf("month")
  for (let currentDate = firstDayOfMonth; currentDate.isSameOrBefore(lastDayOfMonth); moment(currentDate.add(1, 'days'))) {
    currentMonthDays.push(
      <td key={currentDate.format("YYYY-MM-DD")} className="calendar-day">
        {currentDate.date()}
      </td>
    );
  }

  const nextOffSet = 6-lastDayOfMonth.weekday();

  if (nextOffSet > 0) {
    var firstDayOfNextMonth = moment(lastDayOfMonth).add(1, "days")
    var lastWeekDayOfNextMonth = moment(lastDayOfMonth).add(nextOffSet, "days")
    for (var nextDate = firstDayOfNextMonth; nextDate.isSameOrBefore(lastWeekDayOfNextMonth); moment(nextDate.add(1, 'days'))) {
      nextMonthDays.push(
        <td key={nextDate.format("YYYY-MM-DD")} className="calendar-day empty">{nextDate.date()}</td>
      );
    } 
  }

  const calendarDays = convertToTable(
    [...previousMonthDays, ...currentMonthDays, ...nextMonthDays], 7 
  )

  const weekDayNames = moment.weekdays().map(day => {
    return <th key={day} className="week-day">{day}</th>
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {weekDayNames}
          </tr>
        </thead>
        <tbody>
          {calendarDays}
        </tbody>
      </table>
    </div>
 )  
}

export default CalendarGrid;