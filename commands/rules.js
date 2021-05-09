module.exports = {
    name:"rules",
    description: "rules",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        .setTitle("Rules")
        .setURL("https://youtube.com/Badisnotfunny")
        .setDescription("This is the rules for our server")
        .addFields(
           
            {name: "Rule 1", value: "Don't throw unnecessary insults. Be respectful of people in this server."},
            {name: "Rule 2", value: "Spamming isn't allowed.Dont spam messages"},
            {name: "Rule 3", value: "Don't abuse the @mention system."},
            {name: "Rule 4", value: " Don't post suspicious links.Please dont post any type of Malwares,Virus or anything else"},
            {name: "Rule 5", value: "Use channels properly."},
            {name: "Rule 6", value: "No advertising.(Except on the Self Promote channel"}
            )
            .setImage("https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
            .setFooter("And please make sure you match the community guidelines https://discord.com/guidelines");

            message.author.send(newEmbed);
            message.channel.send("check dms (:")
    }


}