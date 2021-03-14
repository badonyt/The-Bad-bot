module.exports = {
    name:"command",
    description: "helo",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        .setTitle("Rules")
        .setURL("https://youtube.com/Badisnotfunny")
        .setDescription("This is the rules for our server")
        .addFields(
            {name: "Rule 1", value: "No trolling, Don't provoke people or purposely attempt to derail a topic either through text, excessive emojis, or images."},
            {name: "Rule 2", value: "Toxicity, flaming, bullying, and harassment are not allowed, Be civilized; don't throw unnecessary insults or purposely antagonize others. Be respectful of people in this server and dont be overly sexual or racist."},
            {name: "Rule 3", value: "Spamming isn't allowed.Dont spam messages,youre just annoying :face_vomiting:"},
            {name: "Rule 4", value: "Don't abuse the @mention system.Don't mention people for no legitimate reason. Do not mention administrative roles more than once for one situation because they have received the mention, they are just not there or able to respond."},
            {name: "Rule 5", value: " Don't post suspicious links.Please dont post any type of Malwares,Virus or anything else"},
            {name: "Rule 6", value: "Use channels properly.Keep topics relevant to the channel you are in."},
            {name: "Rule 7", value: "No advertising. Please dont do Self promote(Except on the Self Promote channel"}
            )
        .setImage("https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
            .setFooter("And please make sure you match the community guidelines https://discord.com/guidelines");

            message.channel.send(newEmbed);
    }


}