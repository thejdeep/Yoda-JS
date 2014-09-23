//Configuration Settings
var config = {
	channels: ["#tester123"],
	server: "irc.freenode.net",
	botName: "Yoda"
};

//Create the connect

var irc = require("irc");
var bot = new irc.Client(config.server,config.botName,{
	channels : config.channels
});

//Listen for joins
bot.addListener("join", function(channel, who) {
	bot.say(channel, who + " welcome back!");
});

