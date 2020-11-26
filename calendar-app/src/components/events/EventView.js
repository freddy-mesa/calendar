import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import * as actions from "../../store/actions";

import './Event.css'

const EventView = () => {

  const dispatch = useDispatch()
  const event = useSelector(state => state.event)
  const crud = useSelector(state => state.crud)

  const [id,setId] = useState("")
  const [title,setTitle] = useState("")
  const [date,setDate] = useState(new Date())

  const getEvent = () => ({"id": id,"title": title,"date": date})

  useEffect(() => {
    if (event) {
      setId(event.id)
      setTitle(event.title)
      setDate(event.date)
    }
    else {
      setId("")
      setTitle("")
      setDate(new Date())
    }
  }, [event]);

  const disabledBtnDelete = () => crud === "new"

  const onChangeTitle = (valueChanged) => {
    setTitle(valueChanged)
  }
  const onChangeDate = (valueChanged) => {
    console.log(valueChanged);
    setDate(new Date(valueChanged))
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.eventChanged(getEvent(),"save"))
  }
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(actions.eventChanged(getEvent(),"delete"))
  }
  const onNew = () => {
    dispatch(actions.eventChanged_New())
  }

  return (
    <div>
      <h2> Event </h2>
      <form className="grid-container-event">
        <label>
          Title:
          <input type="text" onChange={e => onChangeTitle(e.target.value)} value={title} />
        </label>
        <label>
          Date:
          <input type="date" onChange={e => onChangeDate(e.target.value)} value={moment(date).format("YYYY-MM-DD")} />
        </label>
        <div className="grid-container-event-buttons">
          <input type="button" value="Submit" onClick={onSubmit} />
          <input type="button" value="New Event" onClick={onNew} />
          <input type="button" value="Delete" disabled={disabledBtnDelete()} onClick={onDelete} />
        </div>
      </form>
    </div>
  )
}

/*
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
*/

export default EventView;