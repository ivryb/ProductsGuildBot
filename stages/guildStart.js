

export const setupGuildStart = (bot) => {
  bot.callbackQuery('joinGuildFinally', async (ctx) => {
    await ctx.reply(`${botNameC} `);

    await ctx.reply(menuTitle, {
      reply_markup: guildMenu
    });

    await ctx.answerCallbackQuery();
  });
};