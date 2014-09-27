Ti.Database.install("webBase.sqlite", "dBase");
var api = require("api");
var func = require("func");
///Functions

var next = function(a){
	var nextWin = Ti.UI.createWindow({
		backgroundColor: "#aa1111",
		
	});
	var picView = Ti.UI.createImageView({
		image: a.source.picture
	});
	nextWin.add(picView);
	nextWin.open();
	nextWin.addEventListener("click", function(){
		this.close();
	});
};


var main = Ti.UI.createWindow({
	backgroundColor : "#c0c0c0"
});

var titleView = Ti.UI.createView({
	top: 0,
	height: 50,
	backgroundColor: "#CCCCCC"
});

var titleLabel = Ti.UI.createLabel({
	text: "Funny Pictures!"
});

var infoView = Ti.UI.createScrollView({
	top: 51,
	height : Ti.Platform.displayCaps.platformHeight - titleView,
	layout: "vertical"
});
//infoView.addEventListener("click", next);
titleView.add(titleLabel);
main.add(infoView, titleView);
main.open();

