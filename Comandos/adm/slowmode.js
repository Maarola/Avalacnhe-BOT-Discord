const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
  name: "slowmode", // Coloque o nome do comando
  description: "Configure o modo lento em um canal de texto.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "tempo",
        description: "Coloque o tempo do modo lento [s|m|h].",
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    },
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
        let embedNoPermission = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
        .setTimestamp();
     
        interaction.reply({ embeds: [embedNoPermission], ephemeral: true})
    } else {

        let t = interaction.options.getString("tempo");
        let tempo = ms(t);
        let channel = interaction.channel

        if (!tempo || tempo === false || tempo === null) {
            interaction.reply({ content: `Forneça um tempo válido: [s|m|h].`, ephemeral: true })
        } else {
            msg = `**⏱️ | O slowmode foi ativado neste canal para: ${ms(tempo, {
                long: true
            })}**`
            let embed_activ = new Discord.EmbedBuilder()
            .setColor(`#752a41`)
            .setDescription(msg)
            .setTimestamp()

            channel.setRateLimitPerUser(tempo/1000);
            
            interaction.reply({ embeds: [embed_activ] })
        }
    
    }



  }
}