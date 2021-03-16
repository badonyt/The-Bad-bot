module.exports  = {
    name: "inspiration",
    description:"this is a indadhjad command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#8594B4")
        
       
        .setImage("https://i.pinimg.com/originals/b3/a2/b7/b3a2b701f2657b1c1b6326d54d639ed5.jpg")
            .setFooter("this bot was made by Bad. Copyright 2021");

            message.channel.send(newEmbed);
    }
}