const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "-";

const fs = require("fs");



const memberCounter = require("./counters/member-counter");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
console.log("The bot is ready!");    
memberCounter(client);
client.user.setActivity(`with ${prefix}rules & ${prefix}help & your gay`, { type: 'PLAYING' });


    

});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'need verification');
    
    
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('819547996634087434').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});
 client.on("guildMemberRemove", member => {
    const notChannel = member.guild.channels.cache.find(channel => channel.name === 'bye');
    notChannel.send (`Goodbye! ${member} next time please tell us what did we did worng in this  :slight_frown: `)
})

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "youtube"){
     client.commands.get("youtube").execute(message, args);
    }else if(command === "twitch"){
        client.commands.get("twitch").execute(message, args);
    }else if(command === "donate"){
        client.commands.get("donate").execute(message, args);
    }else if (command === "play"){
        client.commands.get("play").execute(message, args);
    }else if (command === "verificate"){
        client.commands.get("verificate").execute(message, args);
    }else if (command === "clear"){
        client.commands.get("clear").execute(message, args);
    }else if (command === "rules"){
        client.commands.get("rules").execute(message, args, Discord);
    }else if (command === "help"){
        client.commands.get("help").execute(message, args, Discord);
    }else if (command === "leave"){
        client.commands.get("leave").execute(message, args)
    }
});

client.login("ODIwNjEzNzM4OTIyOTAxNTQ0.YE3uGQ.oHToJERhEf1xfH9iNf9y6cdBhp0");