module.exports = {
    name:"verificate",
    description: "verificaste",
    execute(message, args) {
        if(message.member.roles.cache.has("819532227691937865")){
            message.channel.send("arledy verificated");
        }else{
          message.member.roles.add("819532227691937865");
          message.member.roles.remove("819531604719960074") 
        };




    }
       

        
    




}
