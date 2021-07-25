module.exports  = {
    name: "user",
    description:"this is a user command!",
    execute(message, args){
        message.channel.send(`Your ugly username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
}