import * as ACTIONS from './actionTypes'

const initialState = {
  event: { id:"", title:"", date: new Date() },
  crud: "new",
  eventList : [],
  date: new Date()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CALENDAR_DATE_CHANGED:
      return {
        ...state,
        date: action.payload.date
      }
    case ACTIONS.EVENT_CHANGED:
      return {
        ...state,
        event: action.payload.event,
        crud: action.payload.crud,
      }
    case ACTIONS.EVENT_LIST_FETCHED:
      return {
        ...state,
        eventList: action.payload.eventList
      }
    default:
      return state;
  } 
}

export default reducer;