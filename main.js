const Discord = require("discord.js");

const bot = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "-";

const fs = require("fs");

bot.db = require("quick.db");

bot.request = new (require("rss-parser"))();

const randomPuppy = require('random-puppy')




const memberCounter = require("./counters/member-counter");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.once("ready", () => {
console.log("The bot is ready! ");

console.log(`Bot tag: ${bot.user.tag}`);
memberCounter(bot);
bot.user.setActivity(`with ${prefix}rules & ${prefix}help`, { type: 'PLAYING' });


    

});

bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'need verification');
    
    
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('819547996634087434').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});
bot.on("guildMemberRemove", member => {
    const notChannel = member.guild.channels.cache.find(channel => channel.name === 'bye');
    notChannel.send (`Goodbye! ${member} next time please tell us what did we did worng in this  :slight_frown: `)
})

bot.on('message', async message =>{
    if (message.content === "-meme"){
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed)
    }

});


bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "youtube"){
     bot.commands.get("youtube").execute(message, args);
    }else if(command === "twitch"){
        bot.commands.get("twitch").execute(message, args);
    }else if(command === "donate"){
        bot.commands.get("donate").execute(message, args);
    }else if (command === "verificate" || command === "verify" || command === "verification"){
        bot.commands.get("verificate").execute(message, args);
    }else if (command === "clear"){
        bot.commands.get("clear").execute(message, args);
    }else if (command === "rules" || command === "rule"){
        bot.commands.get("rules").execute(message, args, Discord);
    }else if (command === "help" || command === "command" || command === "commands" || command === "needcommands" || command === "secrettoaccesscommands"){
        bot.commands.get("help").execute(message, args, Discord);
    }else if (command === "games"){
        bot.commands.get("games").execute(message, args, Discord);
    }else if (command === "stfu"){
        bot.commands.get("stfu").execute(message, args, Discord);
    }else if (command === "afk"){
        bot.commands.get("afk").execute(message, args);
    }else if (command === "noafk"){
        bot.commands.get("noafk").execute(message, args);
    }else if (command === "fatmom"){
        bot.commands.get("fatmom").execute(message, args);
    }else if (command === "givemod"){
        bot.commands.get("givemod").execute(message, args); 
    }else if (command === "remmod"){
        bot.commands.get("remod").execute(message, args);
    }else if (command === "inspiration"){
        bot.commands.get("inspiration").execute(message, args, Discord);
    }else if (command === "simping"){
        bot.commands.get("simping").execute(message, args, Discord);
    }else if (command === "thx" || command === "thanks"){
        bot.commands.get("thx").execute(message, args);
    }else if (command === "avatar" || command === "avatars"){
        bot.commands.get("avatar").execute(message, args);
    }else if (command === "lol"){
        bot.commands.get("lol").execute(message, args);
    }else if (command === "bruh"){
        bot.commands.get("bruh").execute(message, args);
    }else if (command === "ping" || command === "stats"){
        bot.commands.get("ping").execute(message, args, bot);
    }else if (command === ""){
        bot.commands.get("typepls").execute(message, args);
    }else if (command === "please" || command === "ibeg"){
        bot.commands.get("no").execute(message, args);
    }else if (command === "twittersecret"){
        bot.commands.get("twittersecret").execute(message, args);
    }else if (command === "create"){
        bot.commands.get("create").execute(message, args);
    }else if (command === "delete"){
        bot.commands.get("delete").execute(message, args);
    }else if (command === "server"){
        bot.commands.get("server").execute(message, args);
    }else if (command === "user"){
        bot.commands.get("user").execute(message, args);
    }
        
    
});








bot.login("code lol");