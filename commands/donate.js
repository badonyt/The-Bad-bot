module.exports  = {
    name: "donate",
    description:"this is a donate command!",
    execute(message, args){
        message.channel.send("https://streamlabs.com/badisnotfunny/tip");
    }
}