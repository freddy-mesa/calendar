const db = require("./index");
const Event = db.events;

const get = async(id) => {
  try {
    return Event.findById(id).exec()
  } catch (error) {
    console.error("Error: "+error)
  }
}

const list = async() => {
  try {
    return Event.find().exec()
  } catch (error) {
    console.error("Error: "+error)
  }
};

const post = async(data) => {
  try {
    return Event.create({
      id: data.id,
      title: data.title,
      date: data.date
    })
  } catch (error) {
    console.error("Error: "+error)
  }
}

const put = async(data) => {
  try {
    return Event
      .findByIdAndUpdate(data.id, data, { useFindAndModify: false })
      .exec()    
  } catch (error) {
    console.error("Error: "+error)
  }
}

const remove = async (id) => {
  try {
    await Event
      .deleteOne({_id: id},{ useFindAndModify: false })
      .exec()
    return id
  } catch (error) {
    console.error("Error: "+error)
  }
}

module.exports = {
  get,
  list,
  post,
  put,
  remove 
}