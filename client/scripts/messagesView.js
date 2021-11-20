// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();

  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    // Loop through messages structure, ensure they match the html we want, and append them to $chats.
    messages = messages || Messages._data;
    for (let i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    const html = $(MessageView.render(message));
    MessagesView.$chats.append(html);
    html.on('click', MessagesView.handleClick);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // console.log(event.target.class('username'));
    const friendUser = $(this).find('.username').text().trim();
    Friends.add(friendUser);
    const users = $('.username');
    Friends.toggleStatus(friendUser, users);

    // console.log(chatDiv.html());
    // console.log('username:', $('.username'))

  }

};