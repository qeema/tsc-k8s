import * as functions from 'firebase-functions';
import axios from 'axios';

export const response = functions.https.onRequest((request, response) => {
  console.log('===================================');
  console.log(request.headers['x-appengine-user-ip']);
  console.log(request.headers);
  console.log('-----------------------------------');
  response.send('Hello from Firebase!\n\n');
});

export const request = functions
  .runWith({
    memory: '512MB',
    timeoutSeconds: 100,
  })
  .region('asia-northeast1')
  .pubsub.schedule('* * * * *')
  .onRun(() => {
    void (async () => {
      const res = await axios({
        method: 'get',
        //url: 'http://localhost:5001/test-acb17/us-central1/response',
        url: 'https://us-central1-test-acb17.cloudfunctions.net/response',
      });

      console.log(res.data);
    })();
  });
