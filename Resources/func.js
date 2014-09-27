//Constructor that adds info to DB
var Construct = function(fin){
	this.title = fin.title;
	this.pic = fin.pic;
	var db = Ti.Database.open("dBase");
	var row = db.execute("INSERT INTO webTab (web) VALUES (?)", JSON.stringify(this));
	db.close();
	
};


exports.Construct = Construct;