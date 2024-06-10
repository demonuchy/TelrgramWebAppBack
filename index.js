require("dotenv").config();
const { Bot, InlineKeyboard } = require("grammy");
const bot = new Bot(process.env.TOKEN_BOT);

bot.on("message", async (ctx) => {
  await ctx.reply("gergher");
});

bot.start();
