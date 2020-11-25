import axios from "axios";
import { v4 as uuid } from "uuid";

const useEventApi = (url) => {
  const get = async(id) => {
    try {
      const response = await axios.get(`${url}:id`, { id: id })
      const data = await response.data
      return data
    } catch (error) {
      console.log(error);
    }
  }
  const list = async() => {
    try {
      const response = await axios.get(`${url}`)
      const data = await response.data
      return data
    } catch (error) {
      console.log(error);
    }
  }
  const insert = async({id, title, date}) => {
    try {
      const response = await axios.post(`${url}`, { id, title, date })
      return await response.data
    } catch (error) {
      console.log(error);
    }
  }
  const update = async({id, title, date}) => {
    try {
      const response = await axios.put(`${url}`, { id, title, date })
      return await response.data
    } catch (error) {
      console.log(error);
    }
  }
  
  const remove = async(id) => {
    try {
      const response = await axios.delete(`${url}`, { id })
      return await response.data
    } catch (error) {
      console.log(error);
    }
  }

  const onSave = async(event) => {
    if (event.id === "") {
      event.id = uuid()
      const data = await insert(event)
      console.log("Inserted: "+JSON.stringify(data))
    }
    else {
      const data = await update(event)
      console.log("Updated: "+JSON.stringify(data))
    }
    
  }

  const onDelete = async(selectedEvent) => {
    const data = await remove(selectedEvent.id)
    console.log("Deleted: "+JSON.stringify(data))
  } 

  return {
    get,
    list,
    onSave,
    onDelete
  }
}

export default useEventApi;