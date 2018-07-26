const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Alpha Codes©`,"http://twitch.tv/Alpha Codes")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
var prefix = "/";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'SET-name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح ?**");
} else
if (message.content.startsWith(prefix + 'SET-pic')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});

client.on('message', message => {
var prefix = "/";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split("** **").slice(1);


if (command == "emb")    {
    let say = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

const devs = ['211969554061066243' , '337629134371160065' , '' , ''];
const adminprefix = "/";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });

const code = '-^';

client.on('message',async message => {
    if(message.content.startsWith(code + "تخزين")) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
    let rank = message.guild.member(message.author).roles.find('name', '↬ Support');
    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة سبورت  لأستخدام هذا الأمر.**');
    let jscodes = message.guild.channels.find(`name`, "✻-codes_js");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Code Alpha© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});

client.on('message', message => {
if (message.content.startsWith("/uptime")) {
    if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});



const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";


client.on('message', message => {
	if(message.content.startsWith('القرآن')) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("  بوت القرآن | نسخة خاصة  ", 'http://cc-card.cf/up2/upload-files/8c13d72.png')
      .setDescription(` **
     🕋 أوامر بوت القرآن الكريم 🕋
      
     1⃣ ألقران الكريم كامل بصوت الشيخ عبد الباسط عبد الصمد
     2⃣ ألقران الكريم كامل بصوت الشيخ ياسر الدوسري  
     3⃣ ألقران الكريم كامل بصوت الشيخ ماهر المعيقلي
     🚫 _Stop_
     4⃣ ألقران الكريم كامل بصوت الشيخ فارس عباد
     5⃣ ألقران الكريم كامل بصوت الشيخ العيون الكوشي ** `)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('1⃣')
		.then(() => msg.react('2⃣'))
		.then(() => msg.react('3⃣'))
		.then(() => msg.react('🚫'))
		.then(() => msg.react('4⃣'))
		.then(() => msg.react('5⃣'))
		.then(() => msg.react('6⃣'))
        
// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '🚫' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '6⃣' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '7⃣' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=TFm4fCZA7i0", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=4Zr--4eLKPA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=mTa5FhXKMus", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});




client.on('message' , async (message) => {
 if (message.content.startsWith('/info-bot')) {
    if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
 const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

}
});



client.on("message", message => {
    if (message.content === "-^help")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');


  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**    ╭━━━╮╱╱╱╱╱╱╱╭╮
╰╮╭╮┃╭╮╱╱╱╱╱┃┃
╱┃┃┃┃╰╋━━┳━━┫┃
╱┃┃┃┃╭┫╭╮┃┃━┫┃
╭╯╰╯┣┫┃╰╯┃┃━┫╰╮
╰━━━┻┫┃╭━┻━━┻━╯
╱╱╱╱╭╯┃┃
╱╱╱╱╰━┻╯

_─══════ {✯D.JPEI✯} ══════─_
      __الاوامرالخاصة__:spy::skin-tone-1: 
\`\`-^js\`\` | امر نشر الاكوادر فقط للسبورت بلس
\`\`-^ قريبا\`\` |
\`\`-^ قريبا\`\` |

∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
__الاوامر العامة__:tools: 
\`\`/uptime\`\`   | لتعرف متا اشتغل البوت
\`\`/info-bot\`\` | معلومات عن البوت 
\`\`القرآن\`\`    | لتشغيل القران الكريم
__الاوامر فقط للسيرفرات __:no_entry: :no_entry_sign: 

∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞


__اوامر صاحب البوت__:cherry_blossom: 
\`\`/ls\`\`  | امر الستنج / امر الاستماع
\`\`/ply\`\` | امر البليانج
\`\`/wt\`\`  | امر الوتشنج 
\`\`/st\`\`  | امر الستريمنج
\`\`/restart\`\`| امر الريستارت
    _─══════ {✯D.JPEI✯} ══════─_
**`)


message.author.sendEmbed(embed)

}
});


client.on('message', message => {
if (message.content === "-^help") {
message.react("✅")

}
});


client.on('message', message => {
if (message.content === "-^help") {
message.react("📩")

}
});



client.login(process.env.BOT_TOKEN);
