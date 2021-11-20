// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-sfo',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      //need to bind 'this' to the success function.
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};