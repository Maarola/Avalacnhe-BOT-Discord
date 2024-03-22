const Discord = require("discord.js")


module.exports = {
    name: "lock", // Coloque o nome do comando
    description: "Comando para bloquear o chat", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,

    
    run: async(client,interaction, args) => {
    
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
            let embedNoPermission = new Discord.EmbedBuilder()
            .setColor("#752a41")
            .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
            .setTimestamp();
         
        interaction.reply({ embeds: [embedNoPermission], ephemeral: true})
        }else{ 
            const channel = interaction.channel
            await channel.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: false
            }).catch(err => console.log(err))
    
            let embed_lock = new Discord.EmbedBuilder()
            .setColor("#752a41")
            .setDescription(`**🔒 | Chat Bloquado**`)
            .setTimestamp()
    
            interaction.reply({embeds: [embed_lock]})
        } 
    }
}