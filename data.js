const { ThreadChannel } = require('discord.js'), serv = require('node-mcstatus');
const index = require('/workspaces/ServerToBot/index.js');
const editJson = require('edit-json-file');
let file = editJson('/workspaces/ServerToBot/server.json');
let host = file.get("host");
let port = file.get("port");

serverStatus = () => {
    serv.statusJava(host, port)
    .then((result) => {
        file.set("playerCount", result.players.online);
        if(result.online == true) {
            file.save();
            if (result.motd.clean.includes('sleeping')) {
                file.set("status", "idle");
                file.save();
            } else if (result.motd.clean.includes('online')) {
                file.set("status", "online");
                file.save();
            } else {
                file.set("status", "invisible");
                file.save();
            }
        } else {
            file.set("status", "invisible");
            file.save();
        }
    })
    file.save();
}
