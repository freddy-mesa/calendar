const db = [
  {
    "id": "922eb2e9-3cb0-405b-b992-a9e75ab91ffa",
    "date": "2020-10-31T22:04:32.619Z",
    "title": "Prueba 1"
  },
  {
    "id": "db598639-6a18-4a6c-8052-03f49517aafc",
    "date": "2020-10-20T22:04:32.619Z",
    "title": "Prueba 2"
  },
  {
    "id": "da0d3c26-5f6b-49eb-9807-ca5804a8dfdd",
    "date": "2020-11-10T22:04:32.619Z",
    "title": "Prueba 3"
  },
  {
    "id": "cd1b9b3f-1167-4b50-944f-81f4c24b2f67",
    "date": "2020-11-20T22:04:32.619Z",
    "title": "Prueba 4"
  },
  {
    "id": "83d56904-a72e-4266-a4b3-8b45689e47d8",
    "date": "2020-12-02T22:04:32.619Z",
    "title": "Prueba 5"
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
  return data
}

const put = (data) => {
  const index =  db.findIndex(x => x.id === data.id)
  if (index >= 0) {
    db[index] = data
  }
  return data
}

const remove = (id) => {
  const index = db.findIndex(x => x.id === id)
  if (index >= 0) {
    console.log(id)
    db.splice(index, 1);
  }
  return id
}

module.exports = {
  get,
  list,
  post,
  put,
  remove 
}