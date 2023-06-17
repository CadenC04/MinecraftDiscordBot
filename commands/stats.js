const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Shows Server Statistics.'),
    async execute(interaction) {
        await interaction.reply('yes');
    },
};