require('dotenv').config()
const { Telegraf, Context } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/messages`).then((response) => {
    Context.reply(response.data);
  });

});

bot.hears('Javascript',(Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/javascript`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.w3school);
      Context.reply(doc.mdn);
    });

  });
});

bot.hears('C#', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/csharp`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.ms);
      Context.reply(doc.ms_guide);
    });
  });

});

bot.hears('Java', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/java`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.java);
    });
  });
});

bot.hears('Php', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/php`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.php);
    });
  });
});

bot.hears('Ruby', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/ruby`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.ruby);
    });
  });
});

bot.hears('C', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/c`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.c);
    });
  });
});

bot.hears('C++', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/cpp`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.cpp);
    });
  });
});

bot.hears('Go', (Context) => {
  axios.get(`${process.env.SERVICES}/api/v1/go`).then((response) => {
    const documentation = [];
    documentation.push(response.data);

    documentation.forEach((doc) => {
      Context.reply(doc.go);
    });
  });
});

bot.startPolling();