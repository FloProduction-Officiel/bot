module.exports = {
	name: 'kick',
	description: 'kick!',
	execute(message, args) {  
        if (!message.mentions.users.size) {
            return message.reply('tu dois tagger un utilisateur pour le kick');
        }
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu as as les permission de kick un membre")
         const taggedUser = message.mentions.users.first();
         let kickReason = args.join(" ").slice(22);
         let author = message.author ; 
         message.channel.send(`tu veus kick ${taggedUser} avec la raison ${kickReason}`);
        taggedUser.send(`tu as etait kick par ${author} pour la raison ${kickReason}` )
	}
};