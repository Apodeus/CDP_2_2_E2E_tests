const {Builder, By, Key, until} = require('selenium-webdriver');

(async function test() {
  const driver = await new Builder().forBrowser('safari').build();
  try {
    const home = 'http://localhost:3000';
    await driver.get(home);
    await driver.findElement(By.id('MesProjets')).click().then( () => console.log('click'));
    await driver.sleep(1000);
    let url = await driver.getCurrentUrl();
    if (home === url) {
      return -1;
    }
    let res = await driver.findElement(By.tagName('h2')).then(function(e) {
      if (e === undefined) {
        return -1;
      }
      return 0;
    });
    if (res === -1) {
      return -1;
    }
    await driver.navigate().back();
    await driver.sleep(2000);
    url = await driver.getCurrentUrl();
    if (home !== url) {
      return -1;
    }
    await driver.findElement(By.id('MesProjets')).click().then( () => console.log('click'));
    await driver.sleep(1000);
    url = await driver.getCurrentUrl();
    if (home === url) {
      return -1;
    }
    res = await driver.findElement(By.tagName('h2')).then(function(e) {
      if (e === undefined) {
        return -1;
      }
      return 0;
    });
    return res;
  } finally {
    await driver.quit();
  }
})();
