
const Discord = require("discord.js")

module.exports = {
  name: "avatar", // Coloque o nome do comando
  description: "Comando para pegar o avatar de alguem", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Mencione um usuário que deseja pegar o avatar.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
],
  run: async (client, interaction) => {
    let userr = interaction.options.getUser("user")

    let avatar = userr.displayAvatarURL({ dynamic: true, format: "png", size: 1024});

    let embed = new Discord.EmbedBuilder()
    .setTitle(`🏴‍☠️ | Avatar do(a) ${userr.username}`)
    .setColor(`#752a41`)
    .setImage(avatar)
    .setTimestamp();

    interaction.reply({ embeds: [embed] });

  }
}