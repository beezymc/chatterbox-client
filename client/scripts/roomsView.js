// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  _roomname: {},

  initialize: function() {
    // TODO: Perform any work which needs to be done
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    const roomKeys = Rooms.items();
    for (let key of roomKeys) {
      RoomsView.renderRoom(key);
    }
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    const $roomHtml = $('<option>')
      .val(roomName)
      .text(roomName);
    RoomsView.$select.append($roomHtml);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // jQuery way to isolate the currently-selected room.
    // const $selectedVal = $('select option:selected').val();
    Rooms.selected = RoomsView.$select.val();
    Rooms.filtered = true;
    const messages = Messages.items();
    const messagesWithinRoom = [];
    for (let i = 0; i < messages.length; i++) {
      if (Rooms.selected === messages[i].roomname) {
        messagesWithinRoom.push(messages[i]);
      }
    }
    MessagesView.render(messagesWithinRoom);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // handle adding a room (alert or input field)
    const newRoomName = window.prompt('Enter a new room name:');
    if (newRoomName) {
      Rooms.add(newRoomName, () => {
        RoomsView.renderRoom(newRoomName);
        MessagesView.render();
      });

    }
  }
};
