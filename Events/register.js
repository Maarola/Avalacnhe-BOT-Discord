const client = require("../index.js");
const { MessageEmbed, Message} = require('discord.js');

client.on('interactionCreate', interaction => {

    

    if (interaction.isButton()) {

        // cargo man
        if(interaction.customId.startsWith("botao_man")) {
            try {
                
            if (interaction.member.roles.cache.get('1011326422658318426') || interaction.member.roles.cache.get('1011328418111037511') || interaction.member.roles.cache.get('1011377981417078835')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você não pode ter mais de um genero**`, ephemeral: true})
            }else {
                interaction.member.roles.add('1011326422658318426') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1011326422658318426> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}

        // cargo woman
        if(interaction.customId.startsWith("botao_woman")) {
            try {
                
            if (interaction.member.roles.cache.get('1011328418111037511') || interaction.member.roles.cache.get('1011326422658318426') || interaction.member.roles.cache.get('1011377981417078835')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você não pode ter mais de um genero**`, ephemeral: true})
            }else {
                interaction.member.roles.add('1011328418111037511') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1011328418111037511> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        
        // cargo other
        if(interaction.customId.startsWith("botao_other")) {
            try {
                
            if (interaction.member.roles.cache.get('1011328418111037511') || interaction.member.roles.cache.get('1011326422658318426') || interaction.member.roles.cache.get('1011377981417078835')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você não pode ter mais de um genero**`, ephemeral: true})
            }else {
                interaction.member.roles.add('1011377981417078835') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1011377981417078835> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}

        // cargo +18 
        if(interaction.customId.startsWith("botao_+18")) {
            try {
                
            if (interaction.member.roles.cache.get('1011388357240176751') || interaction.member.roles.cache.get('1011388349350694973')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você não pode ser maior e menor de idade**`, ephemeral: true})
            }else {
                interaction.member.roles.add('1011388357240176751') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1011388357240176751> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        // cargo -18
        if(interaction.customId.startsWith("botao_-8")) {
            try {
                
            if (interaction.member.roles.cache.get('1011388357240176751') || interaction.member.roles.cache.get('1011388349350694973')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Você não pode ser maior e menor de idade**`, ephemeral: true})
            }else {
                interaction.member.roles.add('1011388349350694973') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1011388349350694973> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        // valorant
        if(interaction.customId.startsWith("botao_vava")) {
            try {
                
            if (interaction.member.roles.cache.get('1079036241485496400')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Cargo <@&1079036241485496400>  removido com sucesso**`, ephemeral: true})
                interaction.member.roles.remove('1079036241485496400')
            }else {
                interaction.member.roles.add('1079036241485496400') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1079036241485496400> adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        // League of legends
        if(interaction.customId.startsWith("botao_lol")) {
            try {
                
            if (interaction.member.roles.cache.get('1079036216080605314')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Cargo <@&1079036216080605314>  removido com sucesso**`, ephemeral: true})
                interaction.member.roles.remove('1079036216080605314')
            }else {
                interaction.member.roles.add('1079036216080605314') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1079036216080605314>  adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        // Fortnite
        if(interaction.customId.startsWith("botao_fort")) {
            try {
                
            if (interaction.member.roles.cache.get('1079460551782043698')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Cargo <@&1079460551782043698>  removido com sucesso**`, ephemeral: true})
                interaction.member.roles.remove('1079460551782043698')
            }else {
                interaction.member.roles.add('1079460551782043698') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1079460551782043698>  adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
        // The Forest
        if(interaction.customId.startsWith("botao_tforest")) {
            try {
                
            if (interaction.member.roles.cache.get('1079509907491000321')) {
                    
                interaction.reply({content: `**<a:x_ava:1002696052421431326> | Cargo <@&1079509907491000321>  removido com sucesso**`, ephemeral: true})
                interaction.member.roles.remove('1079509907491000321')
            }else {
                interaction.member.roles.add('1079509907491000321') 
                interaction.reply({ content: `**<a:gifverify:1010197359084453898> | Cargo <@&1079509907491000321>  adicionado com sucesso**`, ephemeral: true})
            }
            } catch (er) { console.log(er)}
        } else {}
    }
})