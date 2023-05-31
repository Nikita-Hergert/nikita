// TODO rename this function and all should work as before--
function absenden() {
    fetch('/entries')
    .then(data => {
      // Process the data returned from the backend
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
}

// TODO rename and create button in the UI to call this function as above
function absenden() {

    // TODO use the debugger command to debug in the UI
    // debugger;
    const host = window.location.host
    const url = host + '/entries';

    // TODO example data replace this with the text field from the UI--
  const inputElement = document.getElementById('text');
  inputElement.addEventListener('input', function(event) {
    const enteredText = event.target.value;
    console.log('Eingabe:', enteredText);
  });

    // TODO find the issue--------------
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text)
    })
      .then(response => {
        console.log(response);
        return response.json(); //return
      })
      .then(data => {
        // TODO Do you get the correct data back
        console.log('Response:', data);
        // TODO Handle the response data
      })
      .catch(error => {
        // TODO handle the error better if possible
        console.error('Error:', error);
      });
}

function reset() {
  fetch('/entries/last', {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log('Last entry deleted');
      } else {
        console.error('Error deleting last entry');
      }
    })
    .catch(error => {
      console.error('Error deleting last entry:', error);
    });
}