// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  //
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  update: function () {

  },

  select: function (data) {

  },

  add: function (newRoomName) {
    Rooms._data[newRoomName] = [];
  },

  initialize: function () {
    for (var i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i].roomname !== null) {
        var messageID = Messages._data[i].message_id;
        if (!this._data[Messages._data[i].roomname]) {
          this._data[Messages._data[i].roomname] = [messageID];
        } else {
          this._data[Messages._data[i].roomname].push(messageID);
        }
      } else {
        var messageID = Messages._data[i].message_id;
        if (!this._data['All']) {
          this._data['All'] = [messageID];
        } else {
          this._data['All'].push(messageID);
        }
      }
    }
  }
};