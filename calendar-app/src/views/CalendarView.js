import {useState} from 'react'

import CalendarChangeYear from '../components/CalendarChangeYear'
import CalendarChangeMonth from '../components/CalendarChangeMonth'
import CalendarGrid from '../components/CalendarGrid'

const CalendarView = () => {
  const [date, setDate] = useState(new Date())
  
  const onChangeDate = (dateChanged) => {
    setDate(dateChanged)
  }
  return (
    <div>
      <h1> Calendar </h1>
      <CalendarChangeYear 
        date={date}
        onChangeYear={onChangeDate} />
     <CalendarChangeMonth 
        date={date}
        onChangeMonth={onChangeDate} />
      <CalendarGrid date={date} />
    </div>
  )
}

export default CalendarView;