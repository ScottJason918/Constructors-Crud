var db = Ti.Database.open("dBase");
var data= [];
var imp= [];

///Getting information from API and passing to Array
var yes = function (){
	//alert("Data has been received");
	var getData = JSON.parse(this.responseText);
	var infoCon = getData.data.children;
	for(var i = 0; i < infoCon.length; i++){
		var thumb = infoCon[i].data.url;
		var lastFour = thumb.substring((thumb.length - 3), thumb.length);
		var title = infoCon[i].data.title;
		///keeping the non image files out
		if(lastFour === "jpg" || lastFour === "gif" || lastFour === "png"){
			data.push({
				pic : infoCon[i].data.url,
				title: infoCon[i].data.title
			});
		};	
	};
	//using Object Constructor
	for(var i=0; i<data.length; i++){
		var thing = data[i];
		var thingInfo = new func.Construct(thing);
	};
	///Testing
	//console.log(thingInfo);
};

var info = db.execute("SELECT * FROM webTab");
while(info.isValidRow()){
	var dbInfo = JSON.parse(info.fieldByName("web"));
	imp.push(dbInfo);
	info.next();
	
};

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
		picture: pic,
		height: Ti.UI.SIZE
		
	});
	console.log(title);
	listView.add(text);
	infoView.add(listView);
};

info.close();
db.close();

var no = function(){
	alert("Data has not been received");
};	
var url = "http://api.reddit.com/r/funny";

var info = Ti.Network.createHTTPClient({
	onload: yes,
	onerror: no,
	timeout: 5000
});
///opening connection
info.open("GET", url);
//request
info.send();

//console.log(func.Construct);

exports.data = data;