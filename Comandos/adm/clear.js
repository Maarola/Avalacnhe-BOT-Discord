const Discord = require("discord.js")

module.exports = {
    name: "clear", // Coloque o nome do comando
    aliases: ["limpar"],
    description: "Limpe o Chat ate 100 msg por vez", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'quantidade',
            description: 'Número de mensagens para serem apagadas.',
            type: Discord.ApplicationCommandOptionType.Number,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        let numero = interaction.options.getNumber('quantidade')

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {

                let embedNoPermission = new Discord.EmbedBuilder()
                    .setColor("#752a41")
                    .setDescription(`<a:x_ava:1002696052421431326> | **Você não possui permissão para utilizar este comando.**`)
                    .setTimestamp();


            interaction.reply({ embeds: [embedNoPermission], ephemeral: true})

        } else {

            if (parseInt(numero) > 100 || parseInt(numero) <= 0) {

                let embed = new Discord.EmbedBuilder()
                    .setColor("#752a41")
                    .setDescription(`**🧹 | /clear [1 - 100]**`)
                    .setTimestamp();


                interaction.reply({ embeds: [embed], ephemeral: true})

            } else {

                interaction.channel.bulkDelete(parseInt(numero))

                let embed = new Discord.EmbedBuilder()
                    .setColor("#752a41")
                    .setDescription(`🧹 | **${interaction.channel} recebeu uma limpeza de \`${numero}\` mensagens.**`)
                    .setTimestamp()


                interaction.reply({ embeds: [embed] })

                let apagar_mensagem = "sim" // sim ou nao

                if (apagar_mensagem === "sim") {
                    setTimeout(() => {
                        interaction.deleteReply()
                    }, 5000)
                } else if (apagar_mensagem === "nao") {
                    return;
                }

            }

        }

    }
}