module.exports = {
	name: 'kick',
    description: 'kick!',
	execute(message, args) {  
        if (!message.mentions.users.size) {
            return message.reply(":x: " +'tu dois tagger un utilisateur pour le kick');
        }
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: " +"Tu n'as pas les permission de kick un membre")
            const author = message.author ;     
            let kickReason = args.join(" ").slice(22);
            const taguser = message.mentions.users.first();  
            const userid = message.mentions.users.first();  
           fetchuser = message.guild.members.fetch(userid)
            fetchuser = fetchuser.username
            if (author == taguser)return message.reply(":x: " +'tu peux pas te kick toi même') ;
            if (taguser) {  
                const tagmember = message.guild.member(taguser);         
                if (tagmember) { 
                    setTimeout(async function(){ 
                        await tagmember.send(`tu as été kick par ${author}  pour  ${kickReason}` )
                        await tagmember
                        .kick(`${taguser.tag} a été kick pour ${kickReason}`)
                        message.channel.send(` ${taguser} à été kick `);    
                    }, 100);
                }else{
                message.reply(":x: " +"cette utilisateur n est pas dans le serveur");
            }
        };
    }
}