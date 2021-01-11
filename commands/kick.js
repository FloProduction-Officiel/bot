module.exports = {
	name: 'kick',
    description: 'kick!',
	execute(message, args) {  
        if (!message.mentions.users.size) {
            return message.reply('tu dois tagger un utilisateur pour le kick');
        }
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les permission de kick un membre")
            const author = message.author ;     
            let kickReason = args.join(" ").slice(22);
            const taguser = message.mentions.users.first();  
            if (author == taguser)return message.reply('tu peux pas te kick toi même') ;
            if (taguser) {  
                const tagmember = message.guild.member(taguser);         
                if (tagmember) { 
                    setTimeout(async function(){ 
                        await tagmember.send(`tu as été kick par ${author}  pour  ${kickReason}` )
                        await tagmember
                        .kick("${kickReason}")
                        message.channel.send(` ${taguser} à été kick `);    
                    }, 100);
                }else{
                message.reply("That user isn't in this guild!");
            }
        };
    }
}