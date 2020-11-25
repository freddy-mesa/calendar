import CalendarChangeYear from './CalendarChangeYear'
import CalendarChangeMonth from './CalendarChangeMonth'
import CalendarGrid from './CalendarGrid'

import './CalendarView.css'

const CalendarView = () => {
  return (
    <div>
      <div>
        <CalendarChangeYear />
        <CalendarChangeMonth  />
      </div>
      <br />
      <CalendarGrid />
    </div>
  )
}

export default CalendarView;