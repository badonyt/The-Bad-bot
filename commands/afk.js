module.exports  = {
    name: "afk",
    description:"this is a afk command!",
    execute(message, args){
        
   if (message.member.roles.cache.has("819532227691937865")){
    message.member.roles.add("821312984256872449");
    message.member.roles.remove("819532227691937865");
   } else {
       message.channel.send("still not verificated");
   }
    }


        
}