import './CalendarGrid.css';

import { useSelector,useDispatch } from 'react-redux'
import moment from 'moment'

import * as actions from "../../store/actions";
import convertToTable from '../../utils/convertToTable';

const CalendarGrid = () => {

  const dispatch = useDispatch()
  const date = moment(useSelector(state => state.date))
  const events = useSelector(state => state.eventList)

  const onClick = (event) => (dispatch(actions.eventChanged(event,"selected")))
  const isWeekend = (date) => (date.getDay() === 0 || date.getDay() === 6)

  const getEvents = (date) => {
    return events.filter(x => {
      var eventDate = new Date(x.date) 
      return eventDate.getFullYear() === date.getFullYear() 
        && eventDate.getMonth() === date.getMonth()
        && eventDate.getDate() === date.getDate()
    }).map(x => {
      return (
        <div className="event"
          key={x.id}>
          <a href="/#" onClick={e => onClick(x)}> 
            {x.title} 
          </a>
        </div>
      )
    })
  } 

  const calendarDays = [];

  const firstDayOfMonth = moment(date).startOf("month") 
  const previousOffSet = firstDayOfMonth.weekday();
  if (previousOffSet > 0) {
    var firstDayWeek = moment(firstDayOfMonth).subtract(previousOffSet, "days")
    for (const previousDate = firstDayWeek; previousDate.isBefore(firstDayOfMonth); moment(previousDate.add(1, 'days'))) {      
      calendarDays.push(
        <td 
          className={`calendar-day ${isWeekend(previousDate.toDate()) ? "weekend" : ""}`}
          key={previousDate.format("YYYY-MM-DD")}> 
            <div className="calendar-date"> {previousDate.date()}</div>
            {getEvents(previousDate.toDate())}           
        </td>
      );
    } 
  }

  const lastDayOfMonth = moment(date).endOf("month")
  for (const currentDate = firstDayOfMonth; currentDate.isSameOrBefore(lastDayOfMonth); moment(currentDate.add(1, 'days'))) {    
    calendarDays.push(
      <td 
        className={`${isWeekend(currentDate.toDate()) ? "weekend" : ""}`} 
        key={currentDate.format("YYYY-MM-DD")}> 
          <div className="calendar-day">{currentDate.date()}</div>
          {getEvents(currentDate.toDate())}
      </td>
    );
  }

  const nextOffSet = 6-lastDayOfMonth.weekday();

  if (nextOffSet > 0) {
    var firstDayOfNextMonth = moment(lastDayOfMonth).add(1, "days")
    var lastWeekDayOfNextMonth = moment(lastDayOfMonth).add(nextOffSet, "days")
    for (const nextDate = firstDayOfNextMonth; nextDate.isSameOrBefore(lastWeekDayOfNextMonth); moment(nextDate.add(1, 'days'))) {
      calendarDays.push(
        <td 
          className={`${isWeekend(nextDate.toDate()) ? "weekend" : ""}`}
          key={nextDate.format("YYYY-MM-DD")}> 
            <div className="calendar-day empty">{nextDate.date()}</div>
            {getEvents(nextDate.toDate())}
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