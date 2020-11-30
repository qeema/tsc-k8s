import axios from 'axios';

void (async () => {
  const res = await axios({
    method: 'get',
    url: 'https://us-central1-test-acb17.cloudfunctions.net/helloWorld',
  });

  console.log(res.data);
})();
