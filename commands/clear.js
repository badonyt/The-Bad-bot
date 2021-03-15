module.exports = {
    name: "clear",
    description: "Clear messages!",
    async execute(message, args){
        if(message.member.roles.cache.has("819541323807457300")){
            if(!args[0]) return message.reply("please enter amount");
            if(isNaN(args[0])) return message.reply("please enter a real number");
    
            if(args[0] > 100) return message.reply("you cant delete more than 100 messages");
            if(args[0] < 1) return message.reply("you must delete at least one message");
    
            await message.channel.messages.fetch({limit: 0[0]}).then(messages =>{
    
                message.channel.bulkDelete(messages);
            })
        } else {
            message.channel.send("you dont have the right permission for that action");
        }
        


    }
}