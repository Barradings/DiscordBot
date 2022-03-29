module.exports = {
  name: 'joke',
  description: 'Manda uma piada',
  execute(message, args){
    const JokeAPI = require('sv443-joke-api');
    
    JokeAPI.getJokes()
      .then((res) => res.json())
      .then((data) => {
        message.reply(data.setup + "\n\n" + data.delivery);
    });
  }
}