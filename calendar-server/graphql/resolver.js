const model = require("../data/db.event")

const root = {
  events: async() => await model.list(),
  event: async({id}) => await model.get(id),
  createEvent: async({data}) => await model.post(data),
  updateEvent: async({data}) => await model.put(data),
  deleteEvent: async({id}) => await model.remove(id),
};

module.exports = root;