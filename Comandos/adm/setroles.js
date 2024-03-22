const Discord = require("discord.js")


//botoes
const botao = new Discord.ButtonBuilder().setCustomId("botao_man").setLabel("Man").setEmoji("👨🏻").setStyle(Discord.ButtonStyle.Secondary);
const botao2 = new Discord.ButtonBuilder().setCustomId("botao_woman").setLabel("Woman").setEmoji("👩🏻‍🦰").setStyle(Discord.ButtonStyle.Secondary);
const botao3 = new Discord.ButtonBuilder().setCustomId("botao_other").setLabel("non binary").setEmoji("🧑🏼‍🦱").setStyle(Discord.ButtonStyle.Secondary);
const botao4 = new Discord.ButtonBuilder().setCustomId("botao_+18").setLabel("+18").setEmoji("🍻").setStyle(Discord.ButtonStyle.Secondary);
const botao5 = new Discord.ButtonBuilder().setCustomId("botao_-18").setLabel("-18").setEmoji("🔞").setStyle(Discord.ButtonStyle.Secondary);
const botao6 = new Discord.ButtonBuilder().setCustomId("botao_vava").setLabel("Valorant").setEmoji("🔫").setStyle(Discord.ButtonStyle.Secondary);
const botao7 = new Discord.ButtonBuilder().setCustomId("botao_lol").setLabel("League of Legends").setEmoji("🍷").setStyle(Discord.ButtonStyle.Secondary);
const botao8 = new Discord.ButtonBuilder().setCustomId("botao_fort").setLabel("Fortnite").setEmoji("🧱").setStyle(Discord.ButtonStyle.Secondary);
const botao9 = new Discord.ButtonBuilder().setCustomId("botao_tforest").setLabel("The Forest").setEmoji("🌳").setStyle(Discord.ButtonStyle.Secondary);

let row1 = new Discord.ActionRowBuilder().addComponents(botao, botao2, botao3)
let row2 = new Discord.ActionRowBuilder().addComponents(botao4, botao5)
let row3 = new Discord.ActionRowBuilder().addComponents(botao6,botao7,botao8,botao9)

module.exports = {
  name: "setroles", // Coloque o nome do comando
  description: "enviar ", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "canal",
        description: "Mencione o canal para envar o convite",
        type: Discord.ApplicationCommandOptionType.Channel,
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

        let canal_msg = interaction.options.getChannel('canal')

        let embed_reply = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setTitle(`<a:gifverify:1010197359084453898> | Avalanche System`)
        .setDescription(`**Sistema de registro adiconado no canal ${canal_msg}**`)

        interaction.reply(
            {embeds : [embed_reply], ephemeral: true}
        )


        canal_msg.send({embeds: [
            new Discord.EmbedBuilder()
            .setTitle(`**📝 | Registre-se**`)
            .setColor("#752a41")
            .setDescription(`\n Neste canal voce pode se registrar para obter alguns cargos.\n\n**Como pegar cargo ?**\n\nApenas **click** no botão que corresponde a cada pergunta.`)
        ]})

        let embed_genero = new Discord.EmbedBuilder()
            .setTitle(`**📝 | Genero**`)
            .setColor("#752a41")
            .setDescription(`**\n Qual é o seu genero ?**\n\n<a:l_gifarrow:1002694674814861373> Click apenas no botão que corresponde ao seu gênero.\n\n`)

        canal_msg.send({ embeds: [embed_genero], components: [row1] }).then( () => {
        })
        let embed_idade = new Discord.EmbedBuilder()
        .setTitle(`**📝 | Idade**`)
        .setColor("#752a41")
        .setDescription(`**\n Você é maior ou menor de idade ?**\n\n<a:l_gifarrow:1002694674814861373> Click apenas no botão que corresponde a sua idade.`)
        canal_msg.send({ embeds: [embed_idade], components: [row2] }).then( () => {
        })
        let embed_games = new Discord.EmbedBuilder()
        .setTitle(`**🕹️ | Games**`)
        .setColor("#752a41")
        .setDescription(`**\n Escolha os jogos de acordo com sua preferencia **\n\n<a:l_gifarrow:1002694674814861373> Click no botão para adicionar | Click novamente no botão do jogo para remover o cargo.`)
        canal_msg.send({ embeds: [embed_games], components: [row3] }).then( () => {
        })
    }
  }
}