"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const functions = require("firebase-functions");
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log('===================================');
    console.log(request.headers['x-appengine-user-ip']);
    console.log('-----------------------------------');
    response.send('Hello from Firebase!\n\n');
});
//# sourceMappingURL=index.js.map