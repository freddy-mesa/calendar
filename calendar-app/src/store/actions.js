import * as ACTIONS from './actionTypes'

export const calendarDateChanged = date => ({
  type: ACTIONS.CALENDAR_DATE_CHANGED,
  payload: {
    date
  }
})

export const eventListFetched = (eventList) => ({
  type: ACTIONS.EVENT_LIST_FETCHED,
  payload: {
    eventList
  }
});

export const eventChanged = (event,crud) => ({
  type: ACTIONS.EVENT_CHANGED,
  payload: {
    crud,
    event
  }
});

export const eventChanged_New = () => ({
  type: ACTIONS.EVENT_CHANGED,
  payload: {
    crud : "new",
    event : { id:"", title:"", date: new Date() }
  }
});