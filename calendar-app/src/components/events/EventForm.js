import { useEffect, useState } from "react";
import moment from 'moment'

const EventForm = (props) => {

  const [id,setId] = useState("")
  const [title,setTitle] = useState("")
  const [date,setDate] = useState(new Date())

  useEffect(() => {
    if (props.event.id) {
      setId(props.event.id)
      setTitle(props.event.title)
      setDate(props.event.date)
    }
    else {
      setId("")
      setTitle("")
      setDate(new Date())
    }
  }, [props.event]);

  const onChangeTitle = (valueChanged) => {
    setTitle(valueChanged)
  }
  const onChangeDate = (valueChanged) => {
    setDate(new Date(valueChanged))
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const event = {
      "id" : id,
      "title": title,
      "date": date
    }

    props.onSubmit(event)
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
          <input type="submit" value="Submit" onClick={onSubmit} />
          <input type="button" value="New Event" onClick={props.onNew} />
          <input type="button" value="Delete" disabled={props.create} onClick={props.onDelete} />
        </div>
      </form>
    </div>
  )
}

export default EventForm;