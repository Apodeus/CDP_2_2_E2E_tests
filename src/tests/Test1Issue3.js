const {Builder, By, Key, until} = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    let home = 'http://localhost:3000';
    await driver.get(home);
    await driver.findElement(By.id('MesProjets')).click().then( () => console.log("click"));
    await driver.sleep(1000);
    let url = await driver.getCurrentUrl();
    if (home == url){
      return -1;
    }
    /*await driver.findElement(By.tagName("div")).then(function(e) {
      if (e == undefined)
        return -1;
    });
    */
    await driver.navigate().back();
    await driver.sleep(2000);
    url = await driver.getCurrentUrl();
    if (home != url){
      return -1;
    }
    await driver.findElement(By.id('MesProjets')).click().then( () => console.log("click"));
    await driver.sleep(1000);
    url = await driver.getCurrentUrl();
    if (home == url){
      return -1;
    }
    /*await driver.findElement(By.tagName("div")).then(function(e) {
      if (e == undefined)
        return -1;
    });
    */

  } 
  finally {
    await driver.quit();
  }
  
})();