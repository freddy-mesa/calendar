import {useState} from 'react'
import moment from 'moment'

import CalendarChangeYear from '../components/CalendarChangeYear'
import CalendarGrid from '../components/CalendarGrid'

const CalendarView = () => {
  const [date, setDate] = useState(new Date())
  
  const onChangeYear = (dateChanged) => {
    setDate(dateChanged)
  }
  const onMonthChange = (dateChanged) => {
    setDate(dateChanged)
  }
  return (
    <div>
      <h1> Calendar </h1>
      <h2> Year: {moment(props.date).format("YYYY")}</h2>
      <h2> Month: {moment(date).format("MMMM")}</h2>
      <CalendarGrid date={date} />
    </div>
  )
}

export default CalendarView;