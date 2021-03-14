module.exports = async (client) =>{
    const guild = client.guilds.cache.get('819529883222278184'); 
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('819911471017361408');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}    