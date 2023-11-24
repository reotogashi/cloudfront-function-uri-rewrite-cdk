function handler(event) {
  var eventRequest = event.request;

  console.log(JSON.stringify(eventRequest));
  if (eventRequest.uri === '/subdir/') {
    eventRequest.uri += 'index.html';
  }
  else if (eventRequest.uri === '/subdir') {
    eventRequest.uri += '/index.html';
  }
  console.log(JSON.stringify(eventRequest));

  return eventRequest;
}