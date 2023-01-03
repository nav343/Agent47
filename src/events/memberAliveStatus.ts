import { TextChannel } from "discord.js";
import { Event } from "../structures/Event";

export default new Event('guildMemberAdd', (ctx) => {
  (ctx.client.channels.cache.get('951344946286297180') as TextChannel).send(`Welcome <@${ctx.user.id}>`)
})
