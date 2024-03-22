const Discord = require("discord.js")
const axios  = require('axios')
const {EmbedBuilder} = require("discord.js")

module.exports = {
    name: "banner", // Coloque o nome do comando
    description: "Comando para pegar o banner de alguem", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
      {
          name: "user",
          description: "Mencione um usuário que deseja pegar o banner.",
          type: Discord.ApplicationCommandOptionType.User,
          required: true,
      },
  ],

run: async (client, interaction, args) => {
    let userr = interaction.options.getUser('user')
    try {
        const data = await
        axios.get(`https://discord.com/api/users/${userr.id}`,{
            headers: {
                Authorization: `Bot ${client.token}`
            }
        }).then(d => d.data);
        if(data.banner){
            let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
            url = `https://cdn.discordapp.com/banners/${userr.id}/${data.banner}${url}`;
            

        let embed = new Discord.EmbedBuilder()
        .setTitle(`🏴‍☠️ | Banner do(a) ${userr.username}`)
        .setColor('#752a41')
        .setImage(url)
        .setTimestamp()
        interaction.reply({ embeds:[embed]})
        }else{

            embed_no_banner = new EmbedBuilder()
            .setColor("#752a41")
            .setDescription(`**❌ | Este usuario não possui banner!**`)
            interaction.reply({ embeds: [embed_no_banner]});
        };
    }catch(err){
        console.log(err)
}
}
}   
