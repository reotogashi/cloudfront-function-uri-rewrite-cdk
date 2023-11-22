function handler(event) {
  var eventRequest = event.request;

  console.log(JSON.stringify(eventRequest));
  if (eventRequest.uri.endsWith('/')) {
    eventRequest.uri += 'index.html';
  }
  console.log(JSON.stringify(eventRequest));

  return eventRequest;
}