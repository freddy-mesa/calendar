import { useSelector, useDispatch } from 'react-redux'

import * as actions from "../../store/actions";
import EventForm from './EventForm'

import './Event.css'

const EventView = () => {

  const dispatch = useDispatch()
  const event = useSelector(state => state.event)

  const onSubmit = (eventSubmit) => {
    dispatch(actions.eventChanged(eventSubmit,"save"))
  }
  const onNew = () => {
    dispatch(actions.eventChanged_New())
  }
  const onDelete = (eventDelete) => {
    dispatch(actions.eventChanged(eventDelete,"delete"))
  }

  return (
    <EventForm 
      event={event}
      onSubmit={onSubmit}
      onNew={onNew}
      onDelete={onDelete}
    />
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