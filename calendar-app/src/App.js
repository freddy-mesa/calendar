import { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";

import CalendarView from './components/calendar/CalendarView'
import EventView from './components/events/EventView'
import useEventApi from "./api/events/useEventApi";

import './App.css';

function App() {

  const api = useEventApi("http://localhost:4000/events/")
  const [event,setEvent] = useState({})
  const [list, setList] = useState([])
  const [fetch, setFetch] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      if (fetch) {
        const result = await api.list()
        setList(result)
        setFetch(false)
      }
    } 
    fetchData();
  }, [api, fetch]);
 
  const onPersist = async(event) => {
    if (event.id === "") {
      event.id = uuid()
      const data = await api.insert(event)
      console.log("Inserted: "+JSON.stringify(data))
    }
    else {
      const data = await api.update(event)
      console.log("Updated: "+JSON.stringify(data))
    }
    setFetch(true)
    setEvent({})
  }
  const onDelete = async(selectedEvent) => {
    const data = await api.remove(selectedEvent.id)
    console.log("Deleted: "+JSON.stringify(data))
  } 
  const onClickEvent = (selectedEvent) => {
    setEvent(selectedEvent)
  }

  return (
    <div className="grid-container">
      <div className="header">
        <h1> Calendar </h1>
      </div>
      <div className="main">
        <CalendarView
          list={list}
          onClickEvent={onClickEvent} />
      </div>
      <div className="right"> 
        <EventView
          event={event}
          onPersist={onPersist}
          onDelete={onDelete} />
      </div>
      <br />
    </div>
  );
}

export default App;
