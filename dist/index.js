"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const main = new main_1.Main('https://www.cman.jp/network/support/go_access.cgi');
console.log('1');
void (async () => {
    console.log('2');
    await main.exec();
    console.log('3');
})();
