const Discord = require("discord.js")

module.exports = {
  name: "setverify", // Coloque o nome do comando
  description: "Adicione o sistema de verificação", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageRoles)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {

        let embed = new Discord.EmbedBuilder()
        .setColor("#2a753e")
        .setTitle(`**🕵️‍♂️ | Verificar**`)
        .setDescription(`** Clique no botão para desbloquear os canais**`);

        let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("botao_verify")
            .setLabel("🕵️‍♂️")
            .setStyle(Discord.ButtonStyle.Success)
        );

        interaction.channel.send({ embeds: [embed], components: [botao] }).then( () => {

        })
    }


  }
}