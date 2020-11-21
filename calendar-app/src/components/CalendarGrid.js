import './CalendarGrid.css';
import moment from 'moment'

const CalendarGrid = (props) => {

  const previousMonthDays = [];
  const currentMonthDays = [];
  const nextMonthDays = [];

  const firstDayOfMonth = moment(props.date).startOf("month") 
  const previousOffSet = firstDayOfMonth.isoWeekday()-1;

  if (previousOffSet > 0) {
    var firstDayWeek = moment(firstDayOfMonth).subtract(previousOffSet, "days")
    for (let previousDate = firstDayWeek; previousDate.isBefore(firstDayOfMonth); moment(previousDate.add(1, 'days'))) {
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

  const nextOffSet = 7-lastDayOfMonth.isoWeekday();
  if (nextOffSet > 0) {
    var firstDayOfNextMonth = moment(lastDayOfMonth).add(1, "days")
    var lastWeekDayOfNextMonth = moment(lastDayOfMonth).add(nextOffSet, "days")
    for (var nextDate = firstDayOfNextMonth; nextDate.isSameOrBefore(lastWeekDayOfNextMonth); moment(nextDate.add(1, 'days'))) {
      nextMonthDays.push(
        <td key={nextDate.format("YYYY-MM-DD")} className="calendar-day empty">{nextDate.date()}</td>
      );
    } 
  }

  const totalSlots = [
    ...previousMonthDays, ...currentMonthDays, ...nextMonthDays
  ];
  let rows = [];
  let cells = [];

  totalSlots.forEach((day, i) => {
    if (i % 7 !== 0) {
      cells.push(day); 
    } else {
      rows.push(cells); 
      cells = []; 
      cells.push(day);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  const calendarDays = rows.map(day => {
    return <tr>{day}</tr>;
  });

  const weekDayNames = moment.weekdays().map(day => {
    return <th key={day} className="week-day">{day}</th>
  });

  return (
    <div>
      <table>
        <thead>
          <tr>{weekDayNames}</tr>
        </thead>
        <tbody>
          {calendarDays}
        </tbody>
      </table>
    </div>
 )  
}

export default CalendarGrid;