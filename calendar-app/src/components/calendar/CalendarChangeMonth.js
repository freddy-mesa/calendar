import {useState} from 'react'
import moment from 'moment'

import convertToTable from '../../utils/convertToTable';

const MonthGrid = (date, setYearMonth) => {
  const months = []
  
  const monthStart = moment(date).subtract(4,'M')
  const monthEnd = moment(date).add(4,'M')

  for (var currentMonth = monthStart; monthEnd.toDate() >= currentMonth.toDate(); moment(currentMonth.add(1,'M'))) {
    const month = currentMonth.month()
    const year = currentMonth.year()
    months.push(
      <td
        key={currentMonth.format('YYYYMM')}
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
          <th colSpan="3">Select a Month</th>
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
    setShowMonthGrid(false)
    props.onChangeMonth(newDate)
  }
  const onPrevious = () => {
    const newDate = moment(date.subtract(1,'M'))
    onChangeMonth(newDate.year(),newDate.month())
  }
  const onNext = () => {
    const newDate = moment(date.add(1,'M'))
    onChangeMonth(newDate.year(), newDate.month())
  }

  return (
    <div>
      <h2>
        <input type="button" value="<<" onClick={onPrevious} />
        Month: <a href="/#" onClick={onClickTitle}>{date.format("MMMM")} </a>
        <input type="button" value=">>" onClick={onNext} />
      </h2>
      {showMonthGrid && MonthGrid(date, onChangeMonth)}
    </div>
  )
}

export default CalendarChangeMonth;