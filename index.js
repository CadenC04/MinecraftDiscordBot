const { Client, Events, GatewayIntentBits, ActivityType, RoleManager, Guild, ClientUser, MembershipScreeningFieldType, UserContextMenuCommandInteraction, Collection } = require('discord.js');
const config = require('./config.json');
const data = require('/workspaces/ServerToBot/data.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const editJson = require('edit-json-file');
const guild = client.guilds.cache.get(config.serverId);
var clock;

client.once(Events.ClientReady, c => {
    console.log(`Ready, Logged in as ${c.user.tag}`);
});

client.login(config.token).then(function() {
    setTimeout(() => {   
        updateClock();
    }, 1000);
});

updateClock = () => {
    clock = setInterval(() => {
        serverStatus();
        setActivity();
    }, 10000);
}

stopClock = () => {
    clearInterval(clock);
    setTimeout(() => {
        finalCheck();
    }, 600000);
}

setActivity = () => {
    let file = editJson('/workspaces/ServerToBot/server.json');
    var server = file.get("host"), pCount = file.get("playerCount");
    client.user.setPresence({
        activities: [{ name: server + " [" + pCount + "/6]", type: ActivityType.Watching }],
        status: file.get("status")
      });
}

