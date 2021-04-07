const Discord = require("discord.js");

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
console.log("The bot is ready! ");  
console.log(`Bot tag: ${client.user.tag}`);
memberCounter(client);
client.user.setActivity(`with ${prefix}rules & ${prefix}help`, { type: 'PLAYING' });


    

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
        client.commands.get("leave").execute(message, args);
    }else if (command === "games"){
        client.commands.get("games").execute(message, args, Discord);
    }else if (command === "stfu"){
        client.commands.get("stfu").execute(message, args, Discord);
    }else if (command === "afk"){
        client.commands.get("afk").execute(message, args);
    }else if (command === "noafk"){
        client.commands.get("noafk").execute(message, args);
    }else if (command === "fatmom"){
        client.commands.get("fatmom").execute(message, args);
    }else if (command === "givemod"){
        client.commands.get("givemod").execute(message, args);
    }else if (command === "remmod"){
        client.commands.get("remod").execute(message, args);
    }else if (command === "inspiration"){
        client.commands.get("inspiration").execute(message, args, Discord);
    }else if (command === "simping"){
        client.commands.get("simping").execute(message, args, Discord);
    }else if (command === "thx"){
        client.commands.get("thx").execute(message, args);
    }else if (command === "avatar"){
        client.commands.get("avatar").execute(message, args)
    }
        
    
});

client.login("ODIxMzIyODI1MjY3OTM3MzEx.YFCCfA.AHIVt6UnRXzLE80YTcFdVZbzUZs");