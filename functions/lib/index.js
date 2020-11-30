"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.response = void 0;
const functions = require("firebase-functions");
const axios_1 = require("axios");
exports.response = functions.https.onRequest((request, response) => {
    console.log('===================================');
    console.log(request.headers['x-appengine-user-ip']);
    console.log(request.headers);
    console.log('-----------------------------------');
    response.send('Hello from Firebase!\n\n');
});
exports.request = functions
    .runWith({
    memory: '512MB',
    timeoutSeconds: 100,
})
    .region('asia-northeast1')
    .pubsub.schedule('* * * * *')
    .onRun(() => {
    void (async () => {
        const res = await axios_1.default({
            method: 'get',
            url: 'http://localhost:5001/test-acb17/us-central1/response',
        });
        console.log(res.data);
    })();
});
//# sourceMappingURL=index.js.map