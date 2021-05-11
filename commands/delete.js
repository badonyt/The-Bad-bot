

module.exports = {
    name: "delete",
    description: "deletessss",
    execute(message, args){
        
        if(!message.member.permissions.has("MANAGE_CHANNELS"))
        return message.reply("no perms lol")

        const channeltar = message.mentions.channels.first() || message.channel;

        channeltar.delete()
        
        console.log("someone deleted a channel btw")
    
    }
        
    
                
       
        
           

        
        


    
}