module.exports  = {
    name: "givemod",
    description:"this is a givemod command!",
    execute(message, args){
       if(message.member.hasPermission('ADMINISTRATOR')){
        message.member.roles.add("819541323807457300");
        message.author.send("mod added");
       } else {
        message.channel.send("not admin ");
       }
    }
}