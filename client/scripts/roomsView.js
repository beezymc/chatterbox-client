// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  _roomname: {},

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // calls renderRoom for every room.
    var roomKeys = Object.keys(Rooms._data);
    for (var i = 0; i < roomKeys.length; i++) {
      RoomsView.renderRoom(roomKeys[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // In whatever way you display those rooms.
    // It will append the room to the dropdown.
    const roomHtml = `<option>${roomname}</option>`;
    RoomsView.$select.append(roomHtml);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // jQuery way to isolate the currently-selected room.
    // change messages that pop up given selected room.
    const $selectedVal = $('select option:selected').val();
    const messagesWithinRoom = [];
    for (let i = 0; i < Messages._data.length; i++) {
      if (($selectedVal === 'All') && (Messages._data[i].roomname === null)) {
        messagesWithinRoom.push(Messages._data[i]);
      } else if (Messages._data[i].roomname === $selectedVal) {
        messagesWithinRoom.push(Messages._data[i]);
      }
    }
    console.log(messagesWithinRoom);
    // $('.chats').empty();
    $('#chats').empty();
    MessagesView.render(messagesWithinRoom);
    // loop through messages structure, finding all messages that match the IDs in currMessageIDS (place those messages in an array);
    // Render that array via messageView.render();

  //loop through rooms and do a boolean comparison
  //make sure the room name and jquery selection are trimmed.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // handle adding a room (alert or input field)
    const newRoomName = window.prompt('Enter a new room name:');
    const roomHtml = `<option>${newRoomName}</option>`;
    RoomsView.$select.prepend(roomHtml);
    Rooms.add(newRoomName);

  }

};
