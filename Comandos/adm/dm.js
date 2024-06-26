const Discord = require("discord.js")

module.exports = {
  name: "dm", // Coloque o nome do comando
  description: "Envie uma mensagem no privado de um usuário.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "usuário",
        description: "Mencione um usuário.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "mensagem",
        description: "Escreva algo para ser enviado.",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando!`, ephemeral: true })
    } else {
        let user = interaction.options.getUser("usuário");
        let msg = interaction.options.getString("mensagem");

        let embed = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setTitle(`<:aviso:1015652245808877568>| Avalanche System`)
        .setDescription(`**${msg}**`);

        user.send({ embeds: [embed] }).then( () => {
            let emb = new Discord.EmbedBuilder()
            .setColor("#752a41")
            .setDescription(` ${interaction.user}, a mensagem foi enviada para ${user} com sucesso!`);

            interaction.reply({ embeds: [emb], ephemeral: true })
        }).catch(e => {
            let emb = new Discord.EmbedBuilder()
            .setColor("#752a41")
            .setDescription(` ${interaction.user}, a mensagem não foi enviada para ${user}, pois o usuário está com a DM fechada!`);

            interaction.reply({ embeds: [emb], ephemeral: true})
        })
    }


  }
}