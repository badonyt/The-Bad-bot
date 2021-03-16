module.exports = {
    name:"help",
    description: "this is the help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        .setTitle("Help")
        .setURL("https://youtube.com/Badisnotfunny")
        .setDescription("If you need help please read all the commands :100:")
        .addFields(
           
            {name: "clear", value: "clear command is to clear messages"},
            {name: "play", value: "play music to play the music and then leave to leave"},
            {name: "verificate", value: "verificate is to have the member role"},
            {name: "twitch", value: "twitch to know the owners twitch"},
            {name: "donate", value: "donate to donate(you dont need too)"},
            {name: "Youtube", value: "Youtube is to show my youtube"},
            {name: "afk", value: "set your status -afk an to stop being afk is -noafk"}
            )
        .setImage("https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
            .setFooter("this bot was made by Bad. Copyright 2021");

            message.channel.send(newEmbed);
    }


}