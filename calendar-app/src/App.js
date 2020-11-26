import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation } from '@apollo/client';
import { v4 as uuid } from "uuid";

import { EVENT_LIST } from "./graphql/query"
import { EVENT_CREATE, EVENT_UPDATE, EVENT_DELETE } from "./graphql/mutation"
import * as actions from "./store/actions";

import CalendarView from './components/calendar/CalendarView'
import EventView from './components/events/EventView'

import './App.css';

const App = () => {

  const event = useSelector(state => state.event)
  const crud = useSelector(state => state.crud)
  const [fetch, setFetch] = useState(true)
  const dispatch = useDispatch()

  const { loading, error, data, refetch } = useQuery(
    EVENT_LIST,{ fetchPolicy: "no-cache"});
    
  const [createEvent] = useMutation(EVENT_CREATE);
  const [updateEvent] = useMutation(EVENT_UPDATE);
  const [deleteEvent] = useMutation(EVENT_DELETE);

  useEffect(() => {
    if (fetch){
      refetch()
      setFetch(false)
    }
  },[fetch, refetch]);

  useEffect(() => {
    if (error) {
      console.log("Error: "+ error)
    }
    else if (!loading) {
      dispatch(actions.eventListFetched(data.events))
    }
  }, [loading, error, data, dispatch]);

  useEffect(() => {
    if (crud === "save") {
      if (event.id === ""){
        event.id = uuid()
        createEvent({variables: {data : { ...event }}})
      }
      else {
        updateEvent({variables: {data : { ...event }}})
      }
      dispatch(actions.eventChanged_New())
      setFetch(true)
    }
    else if (crud === "delete") {
      deleteEvent({variables: { id: event.id }})
      dispatch(actions.eventChanged_New())
      setFetch(true)
    }
  }, [crud, event, dispatch, updateEvent, createEvent, deleteEvent]);

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
