import { EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
  name: "ping",
  description: "Sends the latency of the bot !!",
  run: async ({ interaction }) => {
    const loading = new EmbedBuilder().setTitle(":ping_pong: Checking Latency.....").setColor('White')
    const latency = Date.now() - interaction.createdTimestamp
    const apiLatency = interaction.client.ws.ping

    const pingemb = new EmbedBuilder()
      .setTitle(":bulb: My Latency.....")
      .setDescription(`**Latency**: ${latency}ms\n**API Latency**: ${apiLatency}ms`)
      .setColor('Blue')
      .setTimestamp()

    interaction.followUp({ embeds: [loading] }).then(() =>
      interaction.editReply({ embeds: [pingemb] })
    )
  }
});
