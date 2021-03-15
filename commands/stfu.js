module.exports  = {
    name: "stfu",
    description:"this is a stfu command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        
        .addFields(
           
            {name: "stfu", value: "please your the one to stfu, owner 2021"},
           
            )
        .setImage("https://www.teclasap.com.br/wp-content/uploads/2020/02/shut-up.png")
            .setFooter("this bot was made by Bad. Copyright 2021");

            message.channel.send(newEmbed);
    }
}