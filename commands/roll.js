module.exports = {
    name: 'roll',
    description: 'roda 1 ou 2 dados',
    execute(message, args){
        const Discord = require("discord.js");
      switch(args[0]){
            case undefined:
            case '1':
                const num = (Math.floor((Math.random() * 6) + 1)).toString();

                message.channel.send({files: ["images/" + num + ".png"]})
            break;
            case '2':
                const num1 = (Math.floor((Math.random() * 6) + 1)).toString();
                const num2 = (Math.floor((Math.random() * 6) + 1)).toString();

                message.channel.send({files: ["images/" + num1 + ".png", "images/" + num2 + ".png"]})
            break;
            case '4':
                message.reply(Math.floor((Math.random() * 4) + 1).toString());
            break;
            case '8':
                message.reply(Math.floor((Math.random() * 8) + 1).toString());
            break;
            case '10':
                message.reply(Math.floor((Math.random() * 10) + 1).toString());
            break;
            case '20':
                message.reply(Math.floor((Math.random() * 20) + 1).toString());
            break;
            case '100':
                message.reply(Math.floor((Math.random() * 100) + 1).toString());
            break;
      }
    }
  }