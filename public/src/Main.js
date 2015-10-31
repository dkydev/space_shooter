// TODO: fix all of this...

function bodyLoaded()
{
    canvas = document.getElementById("canvas");
    canvas.tabIndex = 1;
    logElement = document.getElementById("log");
    tailElement = document.getElementById("tail");
      /*
    loadJSON("data/sprites.json", function(data) {
        var spriteSheets = JSON.parse(data);
        for (var i = 0; i < spriteSheets.length; i++) {
          spriteMap[spriteSheets[i].name] = spriteSheets[i];
        }
        jsonLoaded();
    });
    */

    jsonLoaded();
};

function loadJSON(filename, callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function jsonLoaded()
{
    initClient();
}

var client;
var spriteMap = {};
var canvas;
function initClient()
{
    client = new GameClient(canvas);
    client.start();

    window.requestAnimationFrame(clientLoop);
}

function clientLoop()
{
    tail("totalJSHeapSize", window.performance.memory.totalJSHeapSize);
    tail("jsHeapSizeLimit", window.performance.memory.jsHeapSizeLimit);
    tail("usedJSHeapSize", window.performance.memory.usedJSHeapSize);

    client.update();
    window.requestAnimationFrame(clientLoop);
}

var logElement;
var tailElement;
var tails = {};
function log(text)
{
    logElement.innerHTML = logElement.innerHTML + text + "<br />";
}

function tail(key, text)
{
    tails[key] = text;
    tailElement.innerHTML = "";
    for (var key in tails) {
        tailElement.innerHTML = tailElement.innerHTML + key + " : " + tails[key] + "<br />";
    }
}
