module.exports  = {
    name: "simping",
    description:"this is a indadhadadjad command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
          .setColor("#8594B4")
              .setTitle("Simping")
            .setURL("https://youtube.com/Badisnotfunny")
            .setDescription("No simping on my server kid")
            .setFooter("This was made by Bad, Copyright 2021");

            message.channel.send(newEmbed);

            
    }
}