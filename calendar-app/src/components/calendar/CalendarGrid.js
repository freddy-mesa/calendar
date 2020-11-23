import './CalendarGrid.css';
import moment from 'moment'

import convertToTable from '../../utils/convertToTable';

const CalendarGrid = (props) => {

  const calendarDays = [];

  const firstDayOfMonth = moment(props.date).startOf("month") 
  const previousOffSet = firstDayOfMonth.weekday();
  if (previousOffSet > 0) {
    var firstDayWeek = moment(firstDayOfMonth).subtract(previousOffSet, "days")
    for (const previousDate = firstDayWeek; previousDate.isBefore(firstDayOfMonth); moment(previousDate.add(1, 'days'))) {
      
      const previousEvents = props.events.filter(x => {
        var eventDate = new Date(x.date) 
        var calendarDate = previousDate.toDate()
        return eventDate.getFullYear() === calendarDate.getFullYear() 
          && eventDate.getMonth() === calendarDate.getMonth()
          && eventDate.getDate() === calendarDate.getDate()
      }).map(x => {
        return (
          <div key={x.id}>
            <a href="/#" onClick={_ => props.onClickEvent(x)}> 
              {x.title} 
            </a>
          </div>
        )
      })
      
      calendarDays.push(
        <td key={previousDate.format("YYYY-MM-DD")}> 
          <div className="calendar-day empty">{previousDate.date()}</div>
          {previousEvents}
        </td>
      );
    } 
  }

  const lastDayOfMonth = moment(props.date).endOf("month")
  for (const currentDate = firstDayOfMonth; currentDate.isSameOrBefore(lastDayOfMonth); moment(currentDate.add(1, 'days'))) {
    
    const currentEvents = props.events.filter(x => {
      var eventDate = new Date(x.date) 
      var calendarDate = currentDate.toDate()
      return eventDate.getFullYear() === calendarDate.getFullYear() 
        && eventDate.getMonth() === calendarDate.getMonth()
        && eventDate.getDate() === calendarDate.getDate()
    }).map(x => {
      return (
        <div key={x.id}>
          <a href="/#" onClick={_ => props.onClickEvent(x)}> 
            {x.title} 
          </a>
        </div>
      )
    })
    
    calendarDays.push(
      <td key={currentDate.format("YYYY-MM-DD")}> 
        <div className="calendar-day">{currentDate.date()}</div>
        {currentEvents}
      </td>
    );
  }

  const nextOffSet = 6-lastDayOfMonth.weekday();

  if (nextOffSet > 0) {
    var firstDayOfNextMonth = moment(lastDayOfMonth).add(1, "days")
    var lastWeekDayOfNextMonth = moment(lastDayOfMonth).add(nextOffSet, "days")
    for (const nextDate = firstDayOfNextMonth; nextDate.isSameOrBefore(lastWeekDayOfNextMonth); moment(nextDate.add(1, 'days'))) {
      
      const nextEvents = props.events.filter(x => {
        var eventDate = new Date(x.date) 
        var calendarDate = nextDate.toDate()
        return eventDate.getFullYear() === calendarDate.getFullYear() 
          && eventDate.getMonth() === calendarDate.getMonth()
          && eventDate.getDate() === calendarDate.getDate()
      }).map(x => {
        return (
          <div key={x.id}>
            <a href="/#" onClick={_ => props.onClickEvent(x)}> 
              {x.title} 
            </a>
          </div>
        )
      })

      calendarDays.push(
        <td key={nextDate.format("YYYY-MM-DD")}> 
          <div className="calendar-day empty">{nextDate.date()}</div>
          {nextEvents}
        </td>
      );
    } 
  }

  const calendarDaysFormatted = convertToTable(calendarDays, 7)

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
          {calendarDaysFormatted}
        </tbody>
      </table>
    </div>
 )  
}

export default CalendarGrid;