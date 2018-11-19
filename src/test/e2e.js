module.exports = {
    'Authentication succes' : function (client) {
        client
            .url('http://localhost:3000/')
            .source(function(result) {
                console.log(result.value);
            })
	    .url('http://app:3000')
            .source(function(result) {
                console.log(result.value);
            })
            .waitForElementVisible("button[id='MesProjets']", 2000)
            .click("button[id='MesProjets']")
            .end();
    }
};
