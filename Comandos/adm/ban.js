const Discord = require("discord.js")

module.exports = {
  name: "ban", // Coloque o nome do comando
  description: "Banir um usuário.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Mencione um usuário para ser banido.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "motivo",
        description: "Insira um motivo.",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        let embedNoPermission = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
        .setTimestamp();


        interaction.reply({ embeds: [embedNoPermission], ephemeral: true})
    } else {
        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)
        let motivo = interaction.options.getString("motivo");
        if (!motivo) motivo = "Não definido.";

        let embed = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`<:aviso:1015652245808877568>  | **O usuário ${user} (\`${user.id}\`) foi banido com sucesso!**`)
        .setTimestamp();

        let erro = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`<a:x_ava:1002696052421431326> | **Não foi possível banir o usuário ${user} (\`${user.id}\`) do servidor!**`)
        .setTimestamp();

        user.ban({ reason: [motivo] }).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })
    }

  }
}