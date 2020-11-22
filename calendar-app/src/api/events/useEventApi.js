import axios from "axios";

const useEventApi = (url) => {
  const get = async(id) => {
    try {
      const response = await axios.get(`${url}:id`, { id: id })
      const data = await response.data
      console.table(data);
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
    debugger
    try {
      const response = await axios.post(`${url}`, { id, title, date })
      const data = await response.data
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  const update = async(event) => {
    try {
      const response = await axios.put(`${url}`, { event })
      await response.data
      //console.log("Put:" + data)
    } catch (error) {
      console.log(error);
    }
  }
  
  const remove = async(event) => {
    try {
      const response = await axios.remove(`${url}`, { event })
      await response.data
      //console.log("Put:" + data)
    } catch (error) {
      console.log(error);
    }
  }

  return {
    get,
    list,
    insert,
    update,
    remove
  }
}

export default useEventApi;