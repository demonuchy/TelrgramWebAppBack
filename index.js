// подключение необходимых библиотек
require("dotenv").config();
const { Bot, InlineKeyboard, HttpError, GrammyError } = require("grammy");
const bot = new Bot(process.env.TOKEN_BOT);

// обработка команды старт
bot.command("start", async (ctx) => {
  await ctx.reply(`Hello, ${ctx.chat.first_name}`);
});

// обработка всех сообщений кнопка с url сайта
bot.on("message", async (ctx) => {
  const websiteButton = new InlineKeyboard();
  await ctx.reply("You can go to our website", {
    reply_markup: websiteButton.webApp(
      "go to the website",
      "https://telegramwebappfront.netlify.app/"
    ),
  });
});

// обработка ошибок
bot.catch((error) => {
  const ctx = error.ctx;
  console.error(ctx.update.update_id);
  const e = error.error;
  if (e instanceof HttpError) {
    console.error(`Error connect Telegram: ${e.description}`);
  } else if (e instanceof GrammyError) {
    console.error(`Error in reqest: ${e.description}`);
  } else {
    console.error(`Unknown error ${e}`);
  }
});

bot.start();
