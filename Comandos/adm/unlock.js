const Discord = require("discord.js")

module.exports = {
    name: "unlock", // Coloque o nome do comando
    description: "Comando para desbloquear o chat", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,


    run: async(client,interaction, args) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
            let embedNoPermission = new Discord.EmbedBuilder()
            .setColor("#752a41")
            .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
            .setTimestamp();
         
        interaction.reply({ embeds: [embedNoPermission], ephemeral: true})
        } 
     
        const channel = interaction.channel
        await channel.permissionOverwrites.edit(interaction.guild.id, {
            SendMessages: true
        }).catch(err => console.log(err))

        let embed_unlock = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`**🔓 | Chat Desbloquado **`)
        .setTimestamp()

         interaction.reply({embeds: [embed_unlock]})
    }


}