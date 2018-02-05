var sphero = require("sphero");
var orb = sphero("c2:56:80:8d:60:04"); //need to get COM port

orb.connect(function() {
    orb.color("green");
}); 