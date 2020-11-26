// import { useEffect, useState } from "react";
// import { useSelector } from 'react-redux'
// import moment from 'moment'

// const EventForm = (props) => {

//   const event = useSelector(state => state.event)

//   const [id,setId] = useState("")
//   const [title,setTitle] = useState("")
//   const [date,setDate] = useState(new Date())

//   const getEvent = () => ({"id": id,"title": title,"date": date})

//   useEffect(() => {
//     if (event) {
//       setId(event.id)
//       setTitle(event.title)
//       setDate(event.date)
//     }
//     else {
//       setId("")
//       setTitle("")
//       setDate(new Date())
//     }
//   }, [event]);

//   const disabledBtnDelete = () => id === ""

//   const onChangeTitle = (valueChanged) => {
//     setTitle(valueChanged)
//   }
//   const onChangeDate = (valueChanged) => {
//     setDate(new Date(valueChanged))
//   }
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     props.onSubmit(getEvent())
//   }
//   const onDelete = (e) => {
//     e.preventDefault();
//     props.onDelete(getEvent())
//   }

//   return (
//     <div>
//       <h2> Event </h2>
//       <form className="grid-container-event">
//         <label>
//           Title:
//           <input type="text" name="title" onChange={e => onChangeTitle(e.target.value)} value={title} />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" onChange={e => onChangeDate(e.target.value)} value={moment(date).format("YYYY-MM-DD")} />
//         </label>
//         <div className="grid-container-event-buttons">
//           <input type="submit" value="Submit" onClick={onSubmit} />
//           <input type="button" value="New Event" onClick={props.onNew} />
//           <input type="submit" value="Delete" disabled={disabledBtnDelete()} onClick={onDelete} />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default EventForm;