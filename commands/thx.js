module.exports  = {
    name: "thx",
    description:"this is a thx command!",
    execute(message, args){
        message.channel.send("np");
    }
}