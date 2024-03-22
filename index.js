const Discord = require("discord.js")
const fs = require('fs')
const config = require("./config.json")

const client = new Discord.Client({
  intents: [
Discord.GatewayIntentBits.Guilds,
Discord.GatewayIntentBits.DirectMessages,
Discord.GatewayIntentBits.Guilds,
Discord.GatewayIntentBits.GuildBans,
Discord.GatewayIntentBits.GuildMembers,
Discord.GatewayIntentBits.GuildMessages,
Discord.GatewayIntentBits.MessageContent,
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
  console.log(`📦 Estou online em ${client.user.username}!`)
})
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  let mencoes = [`<@${client.user.id}>`, `<@!${client.user.id}>`]

  mencoes.forEach(element => {
    if (message.content === element) {

      //(message.content.includes(element))

      let embed = new Discord.EmbedBuilder()
      .setColor("#752a41")
      .setTitle(`<a:Marolacaco:1078460448103473192> | Menciona não lerdão | <a:Marolacaco:1078460448103473192>`)


      message.channel.send({ embeds: [embed] })
      message.channel.send('https://cdn.discordapp.com/attachments/689716708675420165/1104491052276125828/mark_no_random.mp4')


    }
  })

})

client.on("guildMemberAdd", (member) => {
  let canal_logs = "1011666351812771901";
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
  .setColor("Green")
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setTitle("👋 Boas Vindas!")
  .setDescription(`> Olá ${member}!\n> Seja Bem-Vindo(a) ao servidor \`${member.guild.name}\`!\n> Atualmente estamos com \`${member.guild.memberCount}\` membros.`);

  member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
})

client.on("messageCreate", (message) =>  {
  if(message.guild==null &&message.author.id!=='992439156728938606'){
   message.reply('Manda mensagem não lerdão, sou um bot cabaço <:fds:1119114978570534914> ')
  }
});
client.on("guildMemberRemove", (member) => {
  let canal_logs = "1011666351812771901"; // Coloque o ID do canal de texto
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
  .setColor("Red")
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setTitle(`😓 Adeus ${member.user.username}....`)
  .setDescription(`> O usuário ${member} saiu do servidor!\n> Espero que retorne um dia.\n> Nos sobrou apenas \`${member.guild.memberCount}\` membros.`);

  member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
})

fs.readdir('./Events', (err, file) => {
  file.forEach(event => {
    require(`./Events/${event}`)
  })
})



client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)
