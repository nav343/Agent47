import { Event } from "../structures/Event";

export default new Event('messageCreate', (msg) => {
  if (msg.content.includes("I'm") || msg.content.includes("I am")) {
    const test = msg.content.split(/I am[\S\s]*/)
    console.log(test)
  }
})
