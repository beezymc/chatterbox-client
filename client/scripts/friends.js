// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function (friendUser) {
    Friends._data[friendUser] = true;
  },

  toggleStatus: function (friendUser, users) {
    for (let i = 0; i < users.length; i++) {
      if ($(users[i]).text().trim() === friendUser) {
        $(users[i]).css({ 'color': 'blue' });
      }
    }
  }
};