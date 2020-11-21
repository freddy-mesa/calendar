import {useState} from 'react'
import moment from 'moment'

import convertToTable from '../utils/convertToTable';

const YearGrid = (date, setYear) => {
  const years = []
  
  const yearStart = moment(date).subtract(4,'y')
  const yearEnd = moment(date).add(4,'y')

  for (var currentYear = yearStart; yearEnd.year() >= currentYear.year(); moment(currentYear.add(1,'y'))) {
    const dateYear = currentYear.year()
    years.push(
      <td
        key={currentYear.format('YYYY')}
        className="calendar-year"
        onClick={e => { setYear(dateYear);}} >
        <span>{currentYear.format('YYYY')}</span>
      </td>
    )
  }

  const yearList = convertToTable(years, 3)

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">Select a Year</th>
        </tr>
      </thead>
      <tbody>{yearList}</tbody>
    </table>
  );
};

const CalendarChangeYear = (props) => { 
  const [showYearDialog, setShowYearDialog] = useState(false)
  
  const onClickTitle = (e) => {
    setShowYearDialog(!showYearDialog)
  }

  const date = moment(props.date)

  const onChangeYear = (year) => {
    const newDate = moment(date.set('y', year)).toDate()
    setShowYearDialog(!showYearDialog)
    props.onChangeYear(newDate)
  }

  return (
    <div>
      <h2>
        <span onClick={onClickTitle}>
          Year: {date.format("YYYY")}
        </span>
        {showYearDialog && YearGrid(date, onChangeYear)}
      </h2>
    </div>
  )
}

export default CalendarChangeYear;