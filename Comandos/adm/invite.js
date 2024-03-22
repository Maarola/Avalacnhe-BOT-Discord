
const Discord = require("discord.js")

module.exports = {
  name: "invite", // Coloque o nome do comando
  description: "Enviar convite do servidor", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "canal",
        description: "Mencione o canal para envar o convite",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: "convite",
        description: "Coloque apenas o link do convite",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    },
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        let embedNoPermission = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
        .setTimestamp();


        interaction.reply({ embeds: [embedNoPermission], ephemeral: true})
    } else{
        let canal_msg = interaction.options.getChannel("canal");
        let convite_msg = interaction.options.getString("convite")

        let embed_convite = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setTitle(`📩 | Convite`)
        .setDescription(`**Convide seus amigos para nosso servidor**`)

        canal_msg.send({embeds : [embed_convite]})
        canal_msg.send(convite_msg)

        let embed_reply = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setTitle(`<a:gifverify:1010197359084453898> | Avalanche System`)
        .setDescription(`**Comando enviado com sucesso**`)

        interaction.reply(
            {embeds : [embed_reply], ephemeral: true}
        )

        
    }
  }
}