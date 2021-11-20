// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // FormView.$form.on('input', 'input:text', FormView.handleInput);
  },

  // handleInput: function(event) {
  //   FormView.setStatus(FormView.$form.find('input[type=submit]').val());
  // },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    /*
    campus: "hr-sfo"
    created_at: "2021-11-19T21:45:06.101Z"
    github_handle: "beezymc"
    message_id: 40205
    roomname: null
    text: null
    updated_at: "2021-11-19T21:45:06.101Z"
    username: null
    */
    const $messageText = FormView.$form.find('input[id=message]').val();
    const username = window.App.username;
    const message = {
      // roomname:
      campus: window.CAMPUS,
      text: $messageText,
      username: username
    };
    Parse.create(message, function () {
      console.log('Successfully posted a message!');
    });
    // Messages.add(message);
    MessagesView.render();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};