import { Main } from './main';

const main = new Main('https://www.cman.jp/network/support/go_access.cgi');
void (async () => {
  await main.exec();
})();
