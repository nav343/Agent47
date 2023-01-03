import { Event } from "../structures/Event";

export default new Event('messageCreate', (msg) => {
  if (msg.content.toLowerCase().includes("i am") || msg.content.toLowerCase().includes("i'm")) {
    if (msg.author.discriminator === '6731') { return false }
    const startIdx = msg.content.indexOf('i am') || msg.content.indexOf("i'm")
    const restMsg = msg.content.slice(startIdx + 5)
    msg.channel.send(`Hi **${restMsg}**, I am Agent47`)
  }
  //debugging.......
  if (msg.channel.id === '973104016114479104') {
    console.log(msg.content)
  }
})
