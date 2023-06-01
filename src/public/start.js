
var abgesendeteTexte = [];


function absenden() {
  const host = window.location.host;
  const url = host + '/entries';

  var textValue = document.getElementById("myTextId").value;
  document.getElementById("myTextId").value = "";
  localStorage.setItem("lastEnteredText", textValue);

  fetch(document.URL + "entries", {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: textValue})
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);

    abgesendeteTexte.push(textValue);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function zurueckrufen() {
  if (abgesendeteTexte.length > 0) {
    var letzterText = abgesendeteTexte.pop();
    document.getElementById("myTextId").value = letzterText;
  }
}

function deleteEntries() {
  abgesendeteTexte = [];
}
