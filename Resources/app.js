Ti.Database.install("webBase.sqlite", "dBase");
var api = require("api");
var func = require("func");
var imp= [];
var db = Ti.Database.open("dBase");
///Functions
var next = function(a){
	console.log(a.picture);
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

var info = db.execute("SELECT * FROM webTab");
while(info.isValidRow()){
	var dbInfo = JSON.parse(info.fieldByName("web"));
	imp.push(dbInfo);
	info.next();
	for(var i=0; i < imp.length; i++){
		var pic = imp[i].pic;
		var title = imp[i].title;
		var listView = Ti.UI.createView({
			backgroundColor: "#EBEBEB",
			bottom: 2,
			picture: pic,
			height: Ti.UI.SIZE
		});
			var text = Ti.UI.createLabel({
			text: title,
			top : 2,
			bottom: 2,
			left: 5,
			right: 5,
			textAlign: "left",
			height: Ti.UI.SIZE
			
		});
		// console.log(imp[i].pic);
		// console.log(imp[i].title);
		listView.add(text);
		infoView.add(listView);
		//console.log(listView);
	};
};

info.close();
db.close();

infoView.addEventListener("click", next);
titleView.add(titleLabel);
main.add(infoView, titleView);
main.open();



