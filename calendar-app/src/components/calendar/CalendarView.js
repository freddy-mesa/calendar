import {useState} from 'react'

import CalendarChangeYear from './CalendarChangeYear'
import CalendarChangeMonth from './CalendarChangeMonth'
import CalendarGrid from './CalendarGrid'

import './CalendarView.css'

const CalendarView = (props) => {
  const [date, setDate] = useState(new Date())

  const onChangeDate = (dateChanged) => {
    setDate(dateChanged)
  }

  const onClickEvent = (eventChanged) => {
    props.onClickEvent(eventChanged)
  }

  return (
    <div>
      <div>
        <CalendarChangeYear 
          date={date}
          onChangeYear={onChangeDate} />
        <CalendarChangeMonth 
          date={date}
          onChangeMonth={onChangeDate} />
      </div>
      <br />
      <CalendarGrid 
        date={date}
        events={props.list}
        onClickEvent={onClickEvent} />
    </div>
  )
}

export default CalendarView;