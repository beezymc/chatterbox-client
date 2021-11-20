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
  retrieve: function () {

  },

  add: function (data) {
    this._data = [...data];
    console.log('add:', this._data);
    MessagesView.render();
  },

  update: function (message) {
    this._data.push(message);
    const html = MessageView.render(message);
    MessagesView.$chats.prepend(html);
  }

};