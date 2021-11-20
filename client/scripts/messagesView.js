// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // Loop through messages structure, ensure they match the html we want, and append them to $chats.
    for (let i = 0; i < Messages._data.length; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    const html = MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};