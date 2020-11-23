import { useEffect, useState } from "react";

import EventForm from './EventForm'

import './Event.css'

const EventView = (props) => {

  const [event,setEvent] = useState({}) 
  const [create,setCreate] = useState(true)

  useEffect(() => {
    if (props.event.id){
      setEvent(props.event)
      setCreate(false)
    }
    else {
      setEvent({})
      setCreate(true)
    }
  }, [props.event])

  const onSubmit = (eventChanged) => {
    setEvent({
      "id" : eventChanged.id,
      "title": eventChanged.title,
      "date": eventChanged.date
    })
    props.onPersist(eventChanged)
    onNew()
  }
  const onNew = () => {
    setEvent({
      "id" : "",
      "title": "",
      "date": new Date()
    })
    setCreate(true)
  }
  const onDelete = () => {
    props.onDelete(event)
    setCreate(true)
  }

  return (
    <EventForm 
      event={event}
      create={create}
      onSubmit={onSubmit}
      onNew={onNew}
      onDelete={onDelete}
    />
  )
}

export default EventView;