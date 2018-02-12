<<<<<<< HEAD

// Not working? Did you `npm install` `npm run build` first?

var $ = require("jquery");
var PNotify = require("pnotify");

$(function(){
    $("#button1").click(function(){
        new PNotify({
            title: "Yay!",
            text: "It works!"
        });
    });

    $("#button12").click(function(){
        require("pnotify.reference");

        new PNotify({
            title: "Yay!",
            text: "It works!",
            reference: {
                put_thing: true
            }
        });
    });
=======

// Not working? Did you `npm install` `npm run build` first?

var $ = require("jquery");
var PNotify = require("pnotify");

$(function(){
    $("#button1").click(function(){
        new PNotify({
            title: "Yay!",
            text: "It works!"
        });
    });

    $("#button12").click(function(){
        require("pnotify.reference");

        new PNotify({
            title: "Yay!",
            text: "It works!",
            reference: {
                put_thing: true
            }
        });
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});