// TODO rename this function and all should work as before
function myFunction() {
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
function mySecondFunction() {

    // TODO use the debugger command to debug in the UI
    // debugger;
    const host = window.location.host
    const url = host + '/entries';

    // TODO example data replace this with the text feal from the UI
    const data = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };

    // TODO find the issue
    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response)
        response.json()
      })
      .then(data => {
        // TODO Do you get the correct data back
        console.log('Response:', data);
        // TODO Handle the response data
      })
      .catch(error => {
        // TODO handle the error better if possible
        console.error('Error:');
      });
}