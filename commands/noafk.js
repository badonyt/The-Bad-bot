module.exports  = {
    name: "noafk",
    description:"this is a noafk command!",
    execute(message, args){
        
   if (message.member.roles.cache.has("821312984256872449")){
    message.member.roles.remove("821312984256872449");
    message.member.roles.add("819532227691937865");
   } else {
       message.channel.send("still not verificated");
   }
    }


        
}