
require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // ignorar bot


  // ignorar links dos canais abaixo
  let canal_midia = client.channels.cache.get("1012530830779875358")
  let canal_stream = client.channels.cache.get("1010612197841457265")
  let canal_musica = client.channels.cache.get("1011269820836229120")
  let canal_commands = client.channels.cache.get("1011273336606703669")


  if(message.channel.id == canal_midia) return;
  if(message.channel.id == canal_commands) return;
  if(message.channel.id == canal_stream) return;
  if(message.channel.id == canal_musica) return;

  let confirm = await db.get(`antilink_${'992076730053447730'}`);
  if (confirm === false || confirm === null) {
    return;
  } else if (confirm === true) {
    // if (message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return; // ignorar Links por ADM
    if (message.content.toLocaleLowerCase().includes("http")) {
      message.delete()

      let embed = new Discord.EmbedBuilder()
        .setColor("#752a41")
        .setTitle(`<a:siren:1112764770576240651> | Avalanche System`)
        .setDescription(`**${message.author} Não envie links neste canal!!! links permitidos somente em: ${canal_midia}, ${canal_stream} e ${canal_musica}**`)

      message.reply({embeds: [embed], ephemeral: true})


      let apagar_mensagem = "sim" // sim ou nao

                if (apagar_mensagem === "sim") {
                    setTimeout(() => {
                        message.channel.bulkDelete(1)
                    }, 5000)
                } else if (apagar_mensagem === "nao") {
                    return;
                }

    }

  }
})