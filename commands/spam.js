module.exports = {
    name: 'spam',
    description: 'Manda uma piada',
    execute(message, args){
      for(let i = 0; i <= args[1]; i++) {
        message.reply(args[0]);
      }
    }
  }