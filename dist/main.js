"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const cheerioWrapper_1 = require("./common/cheerioWrapper");
const fetchWrapper_1 = require("./wrapper/fetchWrapper");
class Main {
    constructor(url) {
        this.url = '';
        this.exec = async () => {
            const fetchObj = new fetchWrapper_1.FetchWrap(this.url);
            const response = await fetchObj.fetch();
            const cheerio = new cheerioWrapper_1.CheerioWrap(response);
            const $ = cheerio.scraping();
            console.log('Ip address is here!!!!!!!!!!');
            console.log($('.outIp').text());
        };
        this.url = url;
    }
}
exports.Main = Main;
