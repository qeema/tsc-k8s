import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log('===================================');
  console.log(request.headers['x-appengine-user-ip']);
  console.log('-----------------------------------');
  response.send('Hello from Firebase!\n\n');
});
