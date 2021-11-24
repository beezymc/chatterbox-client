// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  //
  _data: new Set(),

  selected: 'lobby',

  filtered: false,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  items: function () {
    return [...Rooms._data];
  },

  isSelected: function (roomName = 'lobby') {
    return roomName === Rooms.selected;
  },

  add: function (newRoomName, callback = () => {}) {
    Rooms._data.add(newRoomName);
    Rooms.selected = newRoomName;
    callback(Rooms.items());
  },

  update: function (messages, callback = () => {}) {
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].roomname !== null && !Rooms._data.has(messages[i].roomname)) {
        Rooms.add(messages[i].roomname);
      }
    }
    callback(Rooms.items());
  }
};