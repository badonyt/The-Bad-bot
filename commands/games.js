module.exports = {
    name:"games",
    description: "adadadagames",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        .setTitle("Rules")
        .setURL("https://youtube.com/Badisnotfunny")
        .setDescription("This is the rules for our server")
        .addFields(
           
            {name: "Battle.net", value: "bad"},
            {name: "Rockstar", value: "Badlovespizza"},
            {name: "Epic games", value: "Badlikespizza"},
            {name: "Minecraft", value: " badlikespizza"},
            {name: "steam", value: "badplaysfn"}
            )
        
            .setFooter("And please make sure you match the community guidelines https://discord.com/guidelines");

            message.channel.send(newEmbed);
    }


}