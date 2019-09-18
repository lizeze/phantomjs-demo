var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var id = (system.args + "").split(',')[1];
console.log(system.args)
page.open("http://127.0.0.1:8081/index.html?id=" + id, function start(status) {
    page.render('google_home.png', { format: 'png', quality: '1' });
    console.log(status)
    phantom.exit();
});