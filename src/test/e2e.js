module.exports = {
    'Authentication succes' : function (client) {
        client
            .url('http://app:3000/')
            .waitForElementVisible("button[id='MesProjets']", 1000)
            .click("button[id='MesProjets']")
            .end();
    }
};
