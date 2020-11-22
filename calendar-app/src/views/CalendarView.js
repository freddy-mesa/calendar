import {useState, useEffect} from 'react'

import useEventApi from "../api/events/useEventApi";

import CalendarChangeYear from '../components/CalendarChangeYear'
import CalendarChangeMonth from '../components/CalendarChangeMonth'
import CalendarGrid from '../components/CalendarGrid'
import Event from "../components/Event";

import './CalendarView.css'

const CalendarView = () => {
  const [date, setDate] = useState(new Date())
  const onChangeDate = (dateChanged) => {
    setDate(dateChanged)
  }

  const [event, setEvent] = useState({})
  const [createEvent, setCreateEvent] = useState(false)
  const onClickEvent = (eventChanged) => {
    setCreateEvent(false)
    setEvent(eventChanged)
  }
  const onClickNewEvent = () => {
    setCreateEvent(true)
    setEvent({})
  }
  const onClickSubmitEvent = async(event,create) => {
    console.log("create: "+create)
    if (create) {
     const data = await api.insert(event)
     console.log("Insert: "+data)
    }
    else {
      const data = await api.insert(event)
      console.log("Insert: "+data)
    }
    setFetch(true)
  }

  const api = useEventApi("http://localhost:4000/events/")
  const [list, setList] = useState([])
  const [fetch, setFetch] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      if (fetch) {
        const result =  await api.list()
        setList(result)
        setFetch(false)
      }
    } 
    fetchData();
  }, [api, fetch]);

  return (
    <div>
      <h1> Calendar </h1>
      <div className="grid-container">
        <div className="grid-item">
          <CalendarChangeYear 
            date={date}
            onChangeYear={onChangeDate} />
          <CalendarChangeMonth 
            date={date}
            onChangeMonth={onChangeDate} />
        </div>
        <div className="grid-item">
          <Event 
            event={event}
            create={createEvent}
            onClickNewEvent={onClickNewEvent}
            onClickSubmitEvent={onClickSubmitEvent} />
        </div>
      </div>
      <br />
      <CalendarGrid 
        date={date}
        events={list}
        onClickEvent={onClickEvent} />
      <br />
    </div>
  )
}

export default CalendarView;