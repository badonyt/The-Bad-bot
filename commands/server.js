module.exports  = {
    name: "server",
    description:"this is a server command!",
    execute(message, args){
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
}