const Discord = require("discord.js");
const prefix = '$';
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
// Mensagem quando o bot está ready
client.once('ready', () => {
  console.log('On duty!');
})

// Ficheiros separados para os comandos
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", async message => {
  // comandos sem prefixo
  if(!message.content.startsWith(prefix) && !message.author.bot){

    // 1/10 de resonder a mensagem com randem uper e lower
    if((Math.floor((Math.random() * 10) + 1)) == 1){

      message.reply(message.content.split('').map((v) =>
      Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()).join(''));
    } 

  } else if(!message.author.bot) {

    const args = message.content.slice(prefix.length).split(/ +/); // separa os argumentos
    const command = args.shift().toLowerCase();
  
    switch(command){
      case 'joke':
        await client.commands.get('joke').execute(message, args);
      break;
      case 'clear':
        await client.commands.get('clear').execute(message, args);
      break;
      /* case 'spam':
        await client.commands.get('spam').execute(message, args);
      break; */
      case 'roll':
        await client.commands.get('roll').execute(message, args);
      break;
      default:
        message.reply("Comando inválido!");
    }
  }

      // Mensagens do marques 1/20 dizer RAWR 350636246730670080
      if(message.author == '350636246730670080') {
        if((Math.floor((Math.random() * 5) + 1)) == 1){
          message.reply('RAWR');
        }
      }

      //responder ao bot do pedro
      //if(message.author == '688422501554192390'){
      //  message.reply();
      //}
})

client.login('OTU2NDkxNzA4NjIxNzgzMDYx.YjxAUg.D1z4d5aADDr5_5SQcqzpWRsCa3g');