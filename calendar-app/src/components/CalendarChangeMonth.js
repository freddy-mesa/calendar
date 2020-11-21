import {useState} from 'react'
import moment from 'moment'

import convertToTable from '../utils/convertToTable';

const MonthGrid = (date, setYearMonth) => {
  const months = []
  
  const monthStart = moment(date).subtract(4,'M')
  const monthEnd = moment(date).add(4,'M')

  for (var currentMonth = monthStart; monthEnd.toDate() >= currentMonth.toDate(); moment(currentMonth.add(1,'M'))) {
    const month = currentMonth.month()
    const year = currentMonth.year()
    months.push(
      <td
        key={currentMonth.format('YYMM')}
        className="calendar-month"
        onClick={e => { setYearMonth(year,month);}} >
        <span>{currentMonth.format('YYYY MMMM')}</span>
      </td>
    )
  }

  const monthList = convertToTable(months, 3)

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">Select a Month</th>
        </tr>
      </thead>
      <tbody>{monthList}</tbody>
    </table>
  );
};

const CalendarChangeMonth = (props) => { 
  const [showMonthGrid, setShowMonthGrid] = useState(false)
  
  const onClickTitle = (e) => {
    setShowMonthGrid(!showMonthGrid)
  }

  const date = moment(props.date)

  const onChangeMonth = (year,month) => {
    const newDate = moment(date.set('Y', year).set('M', month)).toDate()
    setShowMonthGrid(!showMonthGrid)
    props.onChangeMonth(newDate)
  }

  return (
    <div>
      <h2>
        <span onClick={onClickTitle}>
          Month: {date.format("MMMM")}
        </span>
        {showMonthGrid && MonthGrid(date, onChangeMonth)}
      </h2>
    </div>
  )
}

export default CalendarChangeMonth;