var sphero = require('sphero');
var orb = sphero('COM3'); //need to get COM port

orb.connect(function() {

    orb.color("green");


}); 