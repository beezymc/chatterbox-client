// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(message) {
    // TODO: Render _all_ the messages.
    // Loop through messages structure, ensure they match the html we want, and append them to $chats.
    MessagesView.$chats.html('');
    messages = message || Messages.items();
    for (let i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    const $html = $(MessageView.render(message));
    $html.on('click', MessagesView.handleClick);
    MessagesView.$chats.append($html);
  },

  renderNewMessage: function(message) {
    const $html = $(MessageView.render(message));
    $html.on('click', MessagesView.handleClick);
    MessagesView.$chats.prepend($html);
  },

  renderFriends: function () {
    const users = $('.username');
    for (let i = 0; i < users.length; i++) {
      let currUser = $(users[i]).text().trim();
      if (Friends.isFriend(currUser)) {
        $(users[i]).css({ 'color': 'blue' });
      } else {
        $(users[i]).css({ 'color': 'black' });
      }
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    const $friend = $(this).find('.username').text().trim();
    Friends.toggleStatus($friend, MessagesView.renderFriends);
  }
};