import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import moment from "moment"

import './Event.css'

const Event = (props) => {
  const [id,setId] = useState(uuid())
  const [title,setTitle] = useState("")
  const [date,setDate] = useState(new Date())
  useEffect(() => {
    if (props.event){
      if (props.event.title){
        setTitle(props.event.title)
      }
      if (props.event.date) {
        setDate(props.event.date)
      }
      if (props.event.date) {
        setId(props.event.id)
      }
    }
  }, [props.event]);

  const [create,setCreate] = useState(true)
  useEffect(() => {
    setCreate(props.create)
  },[props.create]);

  const onChangeTitle = (valueChanged) => {
    setTitle(valueChanged)
  }
  const onChangeDate = (valueChanged) => {
    setDate(new Date(valueChanged))
  }
  const onClickSubmit = (e) => {
    e.preventDefault();

    console.log("id: "+id)
    console.log("title: "+title)
    console.log("date: "+date)

    const event = {
      "id" : id,
      "title": title,
      "date": date
    }

    props.onClickSubmitEvent(event,create)
  }
  const onClickNewEvent = () => {
    setId(uuid())
    setTitle("")
    setDate(new Date())
    props.onClickNewEvent()
  }
  const onClickDelete = () => {

  }

  return (
    <div>
      <h2> Event </h2>
      <form className="grid-container-event">
        <label>
          Title:
          <input type="text" name="title" onChange={e => onChangeTitle(e.target.value)} value={title} />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={e => onChangeDate(e.target.value)} value={moment(date).format("YYYY-MM-DD")} />
        </label>
        <div className="grid-container-event-buttons">
          <input type="submit" value="Submit" onClick={onClickSubmit} />
          <input type="button" value="New Event" onClick={onClickNewEvent} />
          <input type="button" value="Delete" disabled={create} onClick={onClickDelete}  />
        </div>
      </form>
    </div>
  )
}

export default Event;