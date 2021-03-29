module.exports  = {
    name: "remod",
    description:"this is a remod command!",
    execute(message, args){
       if(message.member.hasPermission('ADMINISTRATOR')){
        message.member.roles.remove("819541323807457300");
        message.author.send("mod removed");
       } else {
        message.channel.send("not admin");
       }
    }
}