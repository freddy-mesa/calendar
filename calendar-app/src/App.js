import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "./store/actions";
import CalendarView from './components/calendar/CalendarView'
import EventView from './components/events/EventView'
import useEventApi from "./api/events/useEventApi";

import './App.css';


function App() {

  const event = useSelector(state => state.event)
  const crud = useSelector(state => state.crud)
  const [fetch, setFetch] = useState(true)

  const dispatch = useDispatch()

  const api = useEventApi("http://localhost:4000/events/")

  useEffect(() => {
    const fetchData = async() => {
      if (fetch) {
        const result = await api.list()
        dispatch(actions.eventListFetched(result))
        setFetch(false)
      }
    } 
    fetchData();
  }, [fetch, api, dispatch]);

  useEffect(() => {
    const apiCall = async() => {
      if (crud === "save") {
        await api.onSave(event)
        dispatch(actions.eventChanged_New())
        setFetch(true)
      }
      else if (crud === "delete") {
        await api.onDelete(event)
        dispatch(actions.eventChanged_New())
        setFetch(true)
      }
    }
    apiCall();
  }, [crud, event, api, dispatch]);

  return (
    <div className="grid-container">
      <div className="header">
        <h1> Calendar </h1>
      </div>
      <div className="main">
        <CalendarView />
      </div>
      <div className="right"> 
        <EventView />
      </div>
      <br />
    </div>
  );
}

export default App;
