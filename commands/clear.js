module.exports = {
    name: 'clear',
    description: 'clear des message',
    async execute(message, args) { 
    if (!message.member.hasPermission("MANAGE_MESSAGES" )) return message.channel.send(":x: " + 'Tu as pas les permisssion de supprimer les')
        const amount = args.join(" ");
       await message.channel.bulkDelete(1)
        if(!amount) return message.reply(":x: " + 'Merci d indiquer le nombre de meesage a supprimer')

        if(amount > 100) return message.reply(":x: " +`vous pouvvez pas supprimer plus de 100 message`)

        if(amount < 1) return message.reply(":x: " +`vous devez supprimer au moins un message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
        )});
       await message.reply(`${amount}message on été supprimé`).then(msg =>{
        msg.delete({ timeout: 10000})
       })
       .catch();
    }
}