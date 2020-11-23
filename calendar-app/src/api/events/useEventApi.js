import axios from "axios";

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

  return {
    get,
    list,
    insert,
    update,
    remove
  }
}

export default useEventApi;