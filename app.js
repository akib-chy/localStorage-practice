let db = {};
const addToDb = (item) => {
  const nameTracker = JSON.parse(localStorage.getItem("name"));
  if (nameTracker) {
    db = nameTracker;
  }
  if (db[item]) {
    db[item] += 1;
  } else {
    db[item] = 1;
  }
  localStorage.setItem("name", JSON.stringify(db));
  console.log(db);
};
const removeItem = (item) => {
  const nameTracker = JSON.parse(localStorage.getItem("name"));
  if (nameTracker) {
    delete nameTracker[item];
    localStorage.setItem("name", JSON.stringify(nameTracker));
  }
};
