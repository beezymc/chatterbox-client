// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function (friend) {
    Friends._data[friend] = true;
  },

  isFriend: function (friend) {
    return Friends._data[friend];
  },

  toggleStatus: function (friend, callback = () => {}) {
    if (Friends._data[friend]) {
      delete Friends._data[friend];
    } else {
      Friends.add(friend);
    }
    callback();
  }
};