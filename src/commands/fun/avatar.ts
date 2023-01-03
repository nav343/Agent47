import { EmbedBuilder, ImageURLOptions } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
  name: "avatar",
  description: "Sends the avatar (or profile picture) of any member in this server.",
  run: async ({ interaction }) => {
    const member = interaction.options.get("member")
    const opts: ImageURLOptions = { extension: 'png', size: 1024 }
    const getTitle = () => {
      if (member === null || member.user.tag === interaction.user.tag) {
        return 'Your'
      } else {
        return member.user.username + "'s"
      }
    }
    const randomMsgs: string[] = [
      `Wow!! That's such a cool avatar.`,
      `Eww....The worst avatar I have ever seen in my _life_`,
      `That's awesome.......`,
      `Man.....Where did u get this from`,
      `Oh....My....God......Just WOW!!`,
      `This is so bad.....`,
      `Wasn't expecting this from you!!`,
    ]
    const avaEmbed = new EmbedBuilder()
      .setTitle(getTitle() + ' avatar :bulb:')
      .setImage(member === null ? interaction.user.avatarURL(opts) : member.user.avatarURL(opts))
      .setColor('Blue')
      .setTimestamp()

    await interaction.followUp({ embeds: [avaEmbed] })
    if (member != null) {
      await interaction.channel.send(member.user.discriminator === '6880' ? randomMsgs[0] : randomMsgs[parseInt(String(Math.random() * 8))])
    } else {
      return
    }
  },
  options: [{ name: "member", type: ApplicationCommandOptionType.Mentionable, description: 'The member to get avatar for', required: false }]
})
