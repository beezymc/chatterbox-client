// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
/* Message Contents
campus: "hr-sfo"
created_at: "2021-10-14T03:31:20.989Z"
github_handle: "david-deaton"
message_id: 39471
roomname: "lobby"
text: "hello"
updated_at: "2021-10-14T03:31:20.989Z"
username: "Joseph"
*/


var Messages = {

  // TODO: Define how you want to store your messages.
  // An array of objects?
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  items: function () {
    return this._data;
  },

  add: function (message, callback = () => {}) {
    Messages.items().unshift(message);
    callback();
  },

  update: function (messages, callback = () => {}) {
    this._data = [...messages];
    for (let i = 0; i < this._data.length; i++) {
      if (this._data[i].roomname === null) {
        this._data[i].roomname = 'lobby';
      }
    }
    callback();
  }

};