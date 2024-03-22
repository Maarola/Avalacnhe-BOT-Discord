require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { MessageEmbed, Message} = require('discord.js');
const {CommandInteraction, Interaction, MessageActionRow} = require("discord.js")

client.on("ready", async(client) => {


    const activites = [

        `🧑‍💻 | Dev by @marola `,
        `📜 | Precisa de ajuda ? da um /help`,

    ]
    setInterval(()=>{
    const status = activites[Math.floor(Math.random()*activites.length)]
    client.user.setPresence({activities: [{name: `${status}`}] })
    },4000)
});