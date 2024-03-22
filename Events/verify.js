const client = require("../index.js");
const { MessageEmbed, Message, Interaction} = require('discord.js');

client.on('interactionCreate', interaction => {
    let cargo = interaction.guild.roles.cache.get("994364409004687546") // Id Cargo verify
    let cargo2 = interaction.guild.roles.cache.get("1011684937340039259") // Id Cargo membro

    if (interaction.isButton()) {
        if(interaction.customId.startsWith("botao_verify")) {
            try {
                
            if (interaction.member.roles.cache.get(cargo.id)) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você ja está Verificado no servidor**`, ephemeral: true})
            }else {
                interaction.member.roles.add(cargo)
                interaction.member.roles.add(cargo2)
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Você foi verificado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
    }
})