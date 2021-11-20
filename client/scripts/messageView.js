// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.
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

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username">
          <%= username %>
        </div>
        <div>
          <%= text %>
        </div>
      </div>
    `)
};