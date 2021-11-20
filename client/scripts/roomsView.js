// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  _roomname: {},

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // FormView.$form.on('submit', FormView.handleSubmit);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // calls renderRoom for every room.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // In whatever way you display those rooms.
    // It will append the room to the dropdown.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // jQuery way to isolate the currently-selected room.
    // change messages that pop up given selected room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // handle adding a room (alert or input field)
  }

};
