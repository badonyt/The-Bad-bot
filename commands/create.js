

module.exports = {
    name: "create",
    description: "creeateeeeeeeee",
    execute(message, args){
        
        if(!message.member.permissions.has("MANAGE_CHANNELS"))
        return message.reply("no perms lol")

        const channelname = args.join(" ");
        if (!channelname)
        return message.reply("please specify the channel name")

        message.guild.channels.create(channelname);
    
        message.channel.send("oi")
    }
        
    
                
       
        
           

        
        


    
}