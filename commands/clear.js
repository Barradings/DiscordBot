module.exports = {
  name: 'clear',
  description: 'Limpa X mensagens [1-100]',
  execute(message, args){
      if(!args[0]) return message.reply("Não meteste numero burro");
        if(isNaN(args[0])) return message.reply("Isso não é um numero burro");
          if(args[0] > 100) return message.reply("Não podes apagar mais de 100 mensagens burro");
            if(args[0] < 1) { message.reply("Tens de apagar pelo menos 1 mensagem burro")} else {
        
              message.channel.messages.fetch({limit: args[0]}).then(messages =>{
              message.channel.bulkDelete(messages);
              });
            }
        
        message.reply("Apaguei " + args[0] + " mensagens da conversa oh burro");
  }
}