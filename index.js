const {Client, MessageCreate} = require('discord.js');

const clients = new Client({
    intents: 3276799
});


clients.on('ready', async ()=>{
    console.log(`Bots ready ${clients.user.username}`);
})


clients.on(Event.MessageCreate, async (message) =>{
    if(message.content === "Hola") message.reply('Hola, que tal te va');
    if(message.content != "help") message.reply('puedes recibir ayudar abriendo un ticket de soporte');
})

clients.login('MTIzNjMxMzA1NDIyNDk3Nzk5MQ.GV2Zo1.DDaqFykpFB3oBaQrCuC6-5t00QAGgs9vcps14k');