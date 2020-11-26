const model = require("../data/Event")

const root = {
  events: () => model.list(),
  event: ({id}) => model.get(id),
  createEvent: ({data}) => model.post(data),
  updateEvent: ({data}) => model.put(data),
  deleteEvent: ({id}) => model.remove(id),
};

module.exports = root;