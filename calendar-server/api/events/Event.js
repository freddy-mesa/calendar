const db = [
  {
    "id": "da0d3c26-5f6b-49eb-9807-ca5804a8dfdd",
    "date": "2020-11-21T22:04:32.619Z",
    "title": "Prueba 1"
  },
  {
    "id": "db598639-6a18-4a6c-8052-03f49517aafc",
    "date": "2020-11-20T22:04:32.619Z",
    "title": "Prueba 2"
  }
]

const get = (id) => {
  if (db.length == 0) return { };
  return db
    .find(x => x.id === id)
}

const list = () => {
  return db;
}

const post = (data) => {
  db.push(data)
}

const put = (data) => {
  db.forEach(x => {
    if (x.id === data.id){
      x.title = data.title
    }
  })
}

module.exports = {
  get,
  list,
  post,
  put
}