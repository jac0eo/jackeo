const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
const owner = ['211969554061066243'];
const id = ['211969554061066243', '' , '' , '' , ''];
const ms = require("ms");
const fs = require('fs');
const jimp = require("jimp");
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const child_process = require("child_process");
const moment = require("moment");
const axios = require('axios');
const path = require('path');
const YouTube = require('simple-youtube-api');
const fetchVideoInfo = require('youtube-info');
const ytApiKey = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";

const youtube = new YouTube(ytApiKey);

var cooldownGames = new Set();
var cooldownSurvival = new Set();
var cooldownSetName = new Set();



client.on('ready', function(){
    var ms = 60000 ;
  var setGame = [`جاكيو بوت`,` المستخدمين : ${client.users.size}`]; 
     var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
     client.user.setActivity(setGame[i],{type: 'LISTENING'});
    }, ms);
});

client.on('ready', () => {
client.user.setStatus("dnd");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
            if (message.content === 'سلام عليكم') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});


client.on('message', message => {
            if (message.content === 'السلام عليكم') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});


client.on('message', message => {
            if (message.content === 'سلام') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});
/*
client.on('message', message => { 
    var FFHH = "."
        if (message.content.startsWith(FFHH + `Jackeo`)) {
  if(!message.channel.guild) return message.reply(' ');
message.guild.setName(`!ّّّّّّّّ♔`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵ`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά`) 
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲Φ`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲Φ♔⌘|🎵💔😍`)
.then(msg => {
 setInterval(() => {
}, 11000);
});
},  10000);
});
},  8000);
});
},  6000);
});
},  4000);
});
},  1000);
})
        .catch(console.error);
  //message.delete().catch(O_o=>{}); 
 
}
}); */


client.on('message', message => {
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
             }, 45500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
             }, 50500)
              setTimeout(function() {
               m.delete()
           }, 55000)
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)
           });
         }
 });


client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
Year  = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
day   = currentTime.getDate()

client.channels.find('id', '353991730196119552').setName(`『 التاريخ ↩ ${Year}/${Month}/${day} 』`)
}, 5000);

});


client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});







client.on("guildMemberAdd", (member) => {
client.channels.get('356375188256063499').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})
client.on("guildMemberRemove", (member) => {
client.channels.get('356375188256063499').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})



/*
client.on('message', async message => {
  if(message.content.startsWith(prefix + "رسالة")) {
    let i = client.users.size;
    if(message.author.id !== '211969554061066243') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
}); */

//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('353991756519309333');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`『فويس أون لاين ↩ ${currentSize}』`);
  if (currentSize !== size) channel.setName(`『الاعضاء بالرومات الصوتية ↩ ${currentSize}』`);
});


/*
client.on('ready',async () => {
setInterval(function(){
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


client.channels.find('id', '356375188256063499').setName(`『 الوقت ↩ ${hours2}:${minutes} 』`)
}, 5000);
       
    }); 
// ميوت
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members 🎮"));//here 
    });


client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية Manage Roles**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص Manage Roles للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
}); */






client.on('message', message => {
if (message.content === ".server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 ايــدي السيرفر**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الرئيسي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 خادم السيرفر**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👔عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content === 'تعال') {
  if(!message.channel.guild) return message.reply(' ');
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('هنالك خطأ ما');
        })
        .catch(console.log);
    } else {
      message.reply(` ** انا جيت ؟ :joy: ** `);
    }
  }
});

/*
client.on('message', message => {
  if (message.content.startsWith('العيد')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`Please be in a voice channel first!`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8SdXc61y7l4", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
}); */




client.on("message", (message) => {
           if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
     let jackeo = new Discord.RichEmbed()
            .setTimestamp()
                .setTitle("هذة ارسل للبوت رسالة")
                .addField(`من:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                   .setThumbnail(message.author.displayAvatarURL)
                   .addField(`الرسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                  .setFooter(`DM .. | Jackeo`)
               client.users.get("211969554061066243").send(jackeo)
         }
});

client.on('message', message => {
   if (message.content === ".id") {
  if(!message.channel.guild) return message.reply(' ');
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});


devs = ['211969554061066243']

client.on('message', message => {
var prefix = ".";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say")  {
   if(!message.channel.guild) return message.reply(' ');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply(' ');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

/*

client.on('message', async message => {
  if(message.content.startsWith(prefix + "voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
  if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
  message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

//ping probot 
  if (command == "ping") {
    message.channel.send("Pong!")
      .then(message => message.edit(`Pong! \`${client.ping}ms\``))
      .catch(console.error);
});

//مغير الرسالة 
client.on('message', msg => {
if (msg.content === 'garo') {
msg.channel.send('ok').then(msg => {
setTimeout(() => {
  msg.edit(`🚬💨💨💨`);
 },1500);
 setTimeout(() => {
  msg.edit(`🚬💨💨`);
},1800);
setTimeout(() => {
msg.edit(`🚬💨`);
},2100);
setTimeout(() => {
msg.edit(`🚬`)
},2400);
});
}    	
});

//تاريخ الجزائر
client.on('message', function(message) {

    if (message.content === prefix + "hours"|| message.content === prefix + "Hours" || message.content === prefix + "HOURS") {
        if (!message.channel.guild) return message.reply('This command only for servers ⁉');  
    var currentTime = new Date(),
       hours = currentTime.getHours() + 1 ,
       hours2 = currentTime.getHours() + 0 ,
       hours3 = currentTime.getHours() + 0 ,
       hours4 = currentTime.getHours() + 0 ,
       minutes = currentTime.getMinutes(),
       seconds = currentTime.getSeconds(),
       Year = currentTime.getFullYear(),
       Month = currentTime.getMonth() + 1,
       Day = currentTime.getDate();
        var h = hours
  if(hours > 12) {
          hours -= 12;
       } else if(hours == 0) {
           hours = "12";
       }  
        if(hours2 > 12) {
          hours2 -= 12;
       } else if(hours2 == 0) {
           hours2 = "12";
       
       }  
       if(hours3 > 12) {
          hours3 -= 12;
       } else if(hours3 == 0) {
           hours3 = "12";
       } 
       if(hours4 > 12) {
        hours4 -= 12;
     } else if(hours4 == 0) {
         hours4 = "12";
     } 
       if (minutes < 10) {
           minutes = '0' + minutes;
       }
       var suffix = 'A.m';
       if (hours >= 12) {
           suffix = 'P.m';
           hours = hours - 12;
       }
       if (hours == 0) {
           hours = 12;
       }
           var Date15= new Discord.RichEmbed()
           .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
           .setTitle( "date and time")
           .setColor('BLACK')
           .setTimestamp()
           .setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
           .addField('Egypt :flag_eg:  ',
           hours + ":" + minutes +":"+ seconds )
            .addField('tunisia :flag_tn:  ',
           hours2 + ":" + minutes +":"+ seconds) 
           .addField('algeria :flag_dz:  ',
            hours3 + ":" + minutes +":"+ seconds ) 
           .addField('Morocco :flag_ma:  ',
            hours4 + ":" + minutes +":"+ seconds ) 
           .addField('Date',
            Day + "-" + Month + "-" + Year )
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.sendEmbed(Date15);
   }
}); 
*/
const profile = JSON.parse(fs.readFileSync('./profile.json', "utf8"));

client.on("message", message => {
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    info: '$info To Set The Info',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 15005,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
    var prefix ="."
    if(message.content.startsWith(prefix + "credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, your :credit_card: balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
var prefix ="."
if(message.content.startsWith(prefix + "daily")) {
      if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
      let args = message.content.split(" ").slice(1);
    let textxt = args.slice(0).join("");
let daily = Math.floor(Math.random() * 100) + 5500;
    profile[message.author.id].credits += daily;
    fs.writeFile("./profile.json", JSON.stringify(profile), function(err) {if(err) console.error(err)});
     message.channel.send(`**${message.author.username} you collect your ${daily}  :yen: daily pounds**`)
} else {
    message.channel.send(`**:atm: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'credits')) {
          if (!args[0]) {
          //  message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
          //  message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**:no_entry: لا يوجد المبلغ الكافي **")
if(args[0].startsWith("-")) return  message.channel.send('**!! لا يمكنيي**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
         //   if (!defineduser) return message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
            if(defineduser.id === message.author.id) return message.channel.send("** تريد التحويل لنفسك ؟ **")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879', '2999', '9950', '2000', '9999', '0000', '9595', '2000', '2018', '2019', '2020', '2021'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879', '2999', '9950', '2000', '9999', '0000', '9595', '2000', '2018', '2019', '2020', '2021'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ** ${message.author.username} Transfer Fees:\`${args}\` **
 type these numbers to confirm :\n \`${x[x3]}\``).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 100;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`$" + args[0] + "` to " + `<@${defineduser.id}>.**`)
mentionned.send(` :atm:  |  Transfer Receipt  \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID: (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });

//message
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

client.on('message', message => {
  if(message.content.startsWith(prefix + "ping")) {
let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
we = "Win!🎉"
} else {
we = "Lose!🤦‍♀️"
}
message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => {
if(message.channel.type === 'dm') {
var guildID = '353875799964778506'; 
if(message.content.includes('discord.gg/')) {
var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
member.ban({ reason: 'ADS In💔 Private.' }).catch();
}
}
});


  client.on('message', message => {
if(message.content == 'جاكيو') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 50000);
}
});

client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = ".";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Alpha Codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
message.channel.send(`**__عضو__ ${message.guild.members.size}  تم ارسال البروكسدات الى | ☑ **`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField(':copyright: السيرفر', message.guild.name)
       .addField(':loudspeaker: ارسلها', message.author.username)
       .addField(':mailbox: الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

client.on('message', message => {
if (message.content.startsWith(".uptime")) {
    if(!message.channel.guild) return message.reply(' ');
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


client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sicon = message.author.displayAvatarURL;
  if(cmd === `.myid`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`** Your id: ${message.author.id}  **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});



client.on('message' , async (message) => {
 if (message.content.startsWith('.info-bot')) {
    if(!message.channel.guild) return message.reply(' ');
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

client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let prefix = '.';
  let sicon = message.author.displayAvatarURL;
  if(cmd === `${prefix}help`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`**  
      ╱╱╭┳━━━┳━━━┳╮╭━┳━━━┳━━━╮╭━━╮╱╱╱╭╮
╱╱┃┃╭━╮┃╭━╮┃┃┃╭┫╭━━┫╭━╮┃┃╭╮┃╱╱╭╯╰╮
╱╱┃┃┃╱┃┃┃╱╰┫╰╯╯┃╰━━┫┃╱┃┃┃╰╯╰┳━┻╮╭╯
╭╮┃┃╰━╯┃┃╱╭┫╭╮┃┃╭━━┫┃╱┃┃┃╭━╮┃╭╮┃┃
┃╰╯┃╭━╮┃╰━╯┃┃┃╰┫╰━━┫╰━╯┃┃╰━╯┃╰╯┃╰╮
╰━━┻╯╱╰┻━━━┻╯╰━┻━━━┻━━━╯╰━━━┻━━┻━╯

      
      _─══════ {✯Jackeo Bot✯} ══════─_
         __الاوامر العامة__:tools: 
      \`\`.uptime\`\`   | لتعرف متا اشتغل البوت
      \`\`.info-bot\`\` | معلومات عن البوت 
      \`\`${prefix}top\`\`|لروئية عدد الاعضاء الذين اتو بالروابط
      \`\`.myid \`\`| لمعرفة ايديك
      \`\`تهكير\`\` | للعب لعبة تهكير وهمية
      \`\`الامر\`\` | 
      \`\`الامر\`\` | 
      \`\`الامر\`\` | 

__الاوامر فقط للسيرفرات __:no_entry: :no_entry_sign: 
      
      ∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞

      __اوامر صاحب البوت__:cherry_blossom: 
      \`\`${prefix}ls\`\`  | امر الستنج / امر الاستماع
      \`\`${prefix}ply\`\` | امر البليانج
      \`\`${prefix}wt\`\`  | امر الوتشنج 
      \`\`${prefix}st\`\`  | امر الستريمنج
      \`\`${prefix}restart\`\`| امر الريستارت
      \`\`${prefix}bc\`\`| امر البروكسدات
      
        _─══════ {✯Jackeo bot✯} ══════─_
      **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});


client.on('message', message => {
if (message.content === ".help") {
message.react("✅")

}
});


client.on('message', message => {
if (message.content === ".help") {
message.react("📩")

}
});



// الموسيقى
/*
client.on('message', async message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
        const prefix = '.'

	let messageContent = message.content.split(" ");
	let command = messageContent[0];
	let args = messageContent.slice(1);
	if(!command.startsWith(prefix)) return;

	switch (command.slice(1).toLowerCase()) {

		case "play":
			if(args.length == 0 && queue.length > 0) {
				if(!message.member.voiceChannel) {
					let notVoiceChannel = new Discord.RichEmbed()
					.setTitle(':name_badge: **Error**')
					.setColor('GRAY')
					.setThumbnail(client.user.avatarURL)
					.setDescription('**\nلازم تكون بروم صوتي**')
					.setTimestamp()
					.setFooter(message.author.tag, message.author.avatarURL)
					
					message.channel.send(notVoiceChannel);
				}else {
					isPlaying = true;
					playMusic(queue[0], message);
					let Playing = new Discord.RichEmbed()
					.setTitle('**[MUSIC]**')
					.setColor('GRAY')
					.setThumbnail(client.user.avatarURL)
					.addField('يتم الان تشغيل:', `**${songsQueue[0]}**`)
					.setTimestamp()
					.setFooter(`Request by: ${message.author.tag}`, message.author.avatarURL)
					
					message.channel.send(Playing);
				}
			} else if (args.length == 0 && queue.length == 0) {
				message.reply("قائمة التشغيل فارغة الآن , .play [ واسم الاغنية ] or .yt [ ومصطلح البحث ] || لتشغيل والبحث عن الاغاني");
			} else if (queue.length > 0 || isPlaying) {
				getID(args).then(id => {
					if (id) {
						queue.push(id);
						getYouTubeResultsId(args, 1).then(ytResults => {
                             message.reply(" ");
                             const embed = new Discord.RichEmbed()
                             .setColor("36393f")
                             .addField('📝 ** || اغنية جديدة في قائمة التشغيل**', '**'+[ytResults]+'**')
                             .addField(`✨** بواسطة **:`, '**'+[message.author.username]+'**')
                             .setTimestamp()
                             .setFooter(client.user.username+" ||", client.user.avatarURL)
                             .addField('**``سرعة استجابة البوت``🍃**', "``"+[Date.now() - message.createdTimestamp]+'``Ms📶', true)
                             .setThumbnail(`http://simpleicon.com/wp-content/uploads/playlist.png`)
                              message.channel.send({embed});
							songsQueue.push(ytResults[0]);
						}).catch(error => console.log(error));
					} else {
						message.reply(" ");
						message.channel.send({embed: {
						color: 3447003,
						description: "🐸 || **__اسف لا يمكن العثور علي الاغنية__**"
						}});

					}
				}).catch(error => console.log(error));
			} else {
				isPlaying = true;
				getID(args).then(id => {
					if (id) {
						queue.push(id);
						playMusic(id, message);
						getYouTubeResultsId(args, 1).then(ytResults => {
                             message.reply(" ");
                             const embed = new Discord.RichEmbed()
                             .setColor("36393f")
                             .addField('** ☑ || تم تشغيل** ', '**'+[ytResults]+'**')
                             .addField(`✨** بواسطة **:`, '**'+[message.author.username]+'**')
                             .setTimestamp()
                             .setFooter(client.user.username+" ||", client.user.avatarURL)
                             .addField('**``سرعة استجابة البوت``🍃**', "``"+[Date.now() - message.createdTimestamp]+'``Ms📶', true)
                             .setThumbnail(`http://i.ytimg.com/vi/${queue}/hqdefault.jpg`)
                              message.channel.send({embed});

                  songsQueue.push(ytResults[0]);
						}).catch(error => console.log(error));
					} else {
						message.reply(" ");
						message.channel.send({embed: {
						color: 3447003,
						description: "🐸 || **__اسف لا يمكن العثور علي الاغنية__**"
						}});

					}
				}).catch(error => console.log(error));
			}
			break;

		case "skip":
			console.log(queue);
			if (queue.length === 1) {
				message.reply(" ");
				message.channel.send({embed: {
				color: 3447003,
				description: " ⁉ || **__قائمة التشغيل فارغة الان , اكتب .play [اسم الاغنية] او .yt [اسم الاغنية]__**"
				}});
				dispatcher.end();
			} else {
				if (skippers.indexOf(message.author.id) === -1) {
					skippers.push(message.author.id);
					skipRequest++;

					if (skipRequest >= Math.ceil((voiceChannel.members.size - 1) / 2)) {
						skipSong(message);
                             message.reply(" ");
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .addField('** ⏯ || الاغنية الحالية ** ', '**'+[songsQueue]+'**')
                       .addField(`✨** تم التخطي بواسطة **:`, '**'+[message.author.username]+'**')
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     .addField('**``لضبط الصوت.``👍👌**' , "**"+".vol [ 0 - 200 ] لضبط اعدادات الصوت"+"**", true)
                     .addField('**``سرعة استجابة البوت``🍃**', "``"+[Date.now() - message.createdTimestamp]+'``Ms📶', true)
                     .setThumbnail(`http://i.ytimg.com/vi/${queue}/hqdefault.jpg`)
                              message.channel.send({embed});
					} else {
						message.reply(` `);
						message.channel.send({embed: {
				color: 3447003,
				description: " #⃣ || ** لقد تم اضاف تصويتك ,  تحتاج الـ"+"__"+[Math.ceil((voiceChannel.members.size - 1) / 2) - skipRequest]+"__"+"اكتر من تصويت , لتخطي الاغنية الحالية**"
				}});
					}
				} else {
						message.reply(` `);
						message.channel.send({embed: {
				color: 3447003,
				description: " 😒 || **__لقد قمت بالتوصيت بالفعل__**"
				}});
				}
			}
			break;

		case "playlist":
			if (queue.length === 0) {
						message.reply(` `);
						message.channel.send({embed: {
				color: 3447003,
				description: " 😒 || **__قائمة التشغيل فارغة , ``اكتب : .play | .yt`` للبحث علي الاغاني__**"
				}});
			} else if (args.length > 0 && args[0] == 'remove') {
				        let kahrba = message.guild.member(message.author).roles.find('name', 'Dj');
				if (args.length == 2 && args[1] <= queue.length) {

						message.reply(` `);
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .addField('** 🗑 ||: تمت ازالتة من قائمة التشغيل : ** ',''+songsQueue[args[1] - 1]+'')
                       .addField(`✨** تمت الازالة بواسطة : **:`, '**'+[message.author.username]+'**')
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     message.channel.send({embed});
					queue.splice(args[1] - 1, 1);
					songsQueue.splice(args[1] - 1, 1);
				} else {
					message.reply(` `);
					message.channel.send({embed: {
					color: 3447003,
					description: ` 📝 || **__يجب وضع رقم الاغنية فـ قائمة التشغيل.__**`
				}});
				}
			} else if (args.length > 0 && args[0] == 'clear') {
				        let djRole = message.guild.member(message.author).roles.find('name', 'Dj');
				if (args.length == 1) {
						message.reply(` `);
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .setDescription('**تمت ازالة جميع الموسيقي الموجوده فـ قائمة الشتغيل , استمتع 😉**')
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     message.channel.send({embed});
					queue.splice(1);
					songsQueue.splice(1);
				} else {
						message.reply(` `);
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .setDescription('**انتا تحتاج الي كتابة .playlist clear دون اتباع الحجج**')
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     message.channel.send({embed});
				}
			} else if (args.length > 0 && args[0] == 'shuffle') {
				let tempA = [songsQueue[0]];
				let tempB = songsQueue.slice(1);
				songsQueue = tempA.concat(shuffle(tempB));
						message.reply(` `);
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .setDescription('**تـم تبديل قائمة التشغيل اكتب .playlist لمشاهدة قائمة الشتغيل الجديده**')
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     message.channel.send({embed});
			} else {
				let format = "```"
				for (const songName in songsQueue) {
					if (songsQueue.hasOwnProperty(songName)) {
						let temp = `${parseInt(songName) + 1}: ${songsQueue[songName]} ${songName == 0 ? "**(PlayingNow - تعمل الان.)**" : ""}\n`;
						if ((format + temp).length <= 2000 - 3) {
							format += temp;
						} else {
							format += "```";
							message.channel.send(format);
							format = "```";
						}
					}
				}
				format += "```";
				message.channel.send(format);
			}
			break;

		case "repeat":
			if (isPlaying) {
				queue.splice(1, 0, queue[0]);
				songsQueue.splice(1, 0, songsQueue[0]);
						message.reply(` `);
                             const embed = new Discord.RichEmbed()
                          .setColor("36393f")
                         .setDescription(`🔁 **${songsQueue[0]} سوف يتم تكرار الاغنية`)
                      .setTimestamp()
                     .setFooter(client.user.username+" ||", client.user.avatarURL)
                     message.channel.send({embed});

			}
			break;

		case "stop":
        var djRole = message.guild.members.get(message.author.id).roles.has(message.guild.roles.find('name', 'Dj'));
        if(!djRole) return message.reply('** لايمكنك ايقاف البوت يجب عليك الحصول علي رتبت ``Dj``**')
        message.reply(" ");
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription('⏹ || **سوف يتم اغلاق البوت بعد 5 ثواني**')
                .setTimestamp()
                .setFooter(client.user.username+" ||", client.user.avatarURL)
                message.channel.send({embed});
			dispatcher.end();
			setTimeout(() => voiceChannel.leave(), 4000)
			break;

		case "yt":
			if (args.length == 0) {
				message.reply(` `);
				message.channel.send({embed: {
				color: 3447003,
				description: " 📝 || **__يجب عليك ادخال : .yt [ مصطلح البحث باليوتيوب]__**"
			}});

			} else {
				message.channel.send("```يبحث باليوتيوب...```");
				getYouTubeResultsId(args, 5).then(ytResults => {
					ytResultAdd = ytResults;
					let ytEmbed = new Discord.RichEmbed()
						.setColor("36393f")
						.setAuthor("Youtube search results: ", icon_url = "https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png")
						.addField("1:", "```" + ytResults[0] + "```")
						.addField("2:", "```" + ytResults[1] + "```")
						.addField("3:", "```" + ytResults[2] + "```")
						.addField("4:", "```" + ytResults[3] + "```")
						.addField("5:", "```" + ytResults[4] + "```")
						.addBlankField()
						.setFooter("شرح الاستخدام : .add [قم بوضع رقم البحث] ");
					message.channel.send(ytEmbed);
					youtubeSearched = true;
				}).catch(err => console.log(err));
			}
			break;

		case "add":
			if (youtubeSearched === true) {
				if (!re.test(args)) {
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription('🤦 || ** لقد قمت بادخال الرقم بطريقة خاطئة , يرجي ادخال 1-5 لترتيب قائمة الاغاني')
                .setTimestamp()
                .setFooter(client.user.username+" ||", client.user.avatarURL)
                message.channel.send({embed});
				} else {
					let choice = ytResultAdd[args - 1];
					getID(choice).then(id => {
						if (id) {
							queue.push(id);
							getYouTubeResultsId(choice, 1).then(ytResults => {
                message.reply(` `);
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription('**تم اضافة الي قائمة التشغيل'+'``'+ytResults+'``'+'**')
                .setTimestamp()
                .setFooter(client.user.username+" ||", client.user.avatarURL)
                message.channel.send({embed});
								songsQueue.push(ytResults[0]);
							}).catch(error => console.log(error));
						}
					}).catch(error => console.log(error));
					youtubeSearched = false;
				}
			} else {
                message.reply(` `);
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription(`** تحتاج إلى استخدام .yt [search term - مصطلح البحث ] , .add لـختيار اغنية من علامات البحث من قائمة التشغيل. **`)
                .setTimestamp()
                .setFooter(client.user.username+" ||", client.user.avatarURL)
                message.channel.send({embed});
			}
			break;
		case "vol":
			if (args.length == 0 && dispatcher) {
				message.reply(` `);
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription(`** Volume - حجم الصوت الحالي  [ __${dispatcher.volume}__ ]**`)
                message.channel.send({embed});
			} else if (args.length > 0 && regVol.test(args) == true && dispatcher) {
				dispatcher.setVolume(args * 0.01);
				message.reply(` `);
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription(`** تم تعيين حجم الموسيقى إلى [ __${args}__% ]**`)
                message.channel.send({embed});
				console.log('متسوي الصوت الجديد ='+dispatcher.volume);
			} else if (!regVol.test(args) && dispatcher) {
				message.reply(" ");
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription(`**خطأ : انتا تحتاج الي ادخال من 0 - 200 لاختيار حجم الموسيقي**`)
                message.channel.send({embed});
			} else {
				message.reply(" ");
                const embed = new Discord.RichEmbed()
                .setColor("36393f")
                .setDescription(`**خطأ : لا يمكنك تعين الصوت اذا لم تكون هناك موسيقي تعمل**`)
                message.channel.send({embed});
			}
			break;

	}
});

function playMusic(id, message) {
	voiceChannel = message.member.voiceChannel;
	
	if(!voiceChannel) {
		let notVoiceChannel = new Discord.RichEmbed()
		.setTitle(':name_badge: **Error**')
		.setColor('GRAY')
		.setThumbnail(client.user.avatarURL)
		.setDescription('**\nلازم تكون بروم صوتي**')
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(notVoiceChannel);
		
	}else {
	voiceChannel.join()
		.then(connection => {
					message.channel.send({embed: {
                    color: 3447003,
                    description: "**الان تعمل اغنية : **" + songsQueue[0],
                    }});
			console.log('الان تعمل اغنية : ' + songsQueue[0])
			stream = yt(`https://www.youtube.com/watch?v=${id}`, {
				filter: 'audioonly'
			})

			skipRequest = 0;
			skippers = [];

			dispatcher = connection.playStream(stream);
			dispatcher.setVolume(0.50);
			dispatcher.on('end', () => {
				skipRequest = 0;
				skippers = [];
				queue.shift();
				songsQueue.shift();
				if (queue.length === 0) {
					console.log("Disconnected...");
					queue = [];
					songsQueue = [];
					isPlaying = false;
				} else {
					setTimeout(() => playMusic(queue[0], message), 500);
				}
			});
		})
		.catch(error => console.log(error));
	}
}

async function getID(str) {
	if (str.indexOf("youtube.com") > -1) {
		return getYTID(str);
	} else {
		let body = await axios(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(str)}&key=${ytApiKey}`);
		if (body.data.items[0] === undefined) {
			return null;
		} else {
			return body.data.items[0].id.videoId;
		}
	}
}

function addToQueue(strID) {
	if (strID.indexOf("youtube.com")) {
		queue.push(getYTID(strID));
	} else {
		queue.push(strID);
		songsQueue.push(strID);
	}
}

function skipSong(message) {
	dispatcher.end();
}

async function searchYouTube(str) {
	let search = await axios(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(str)}&key=${ytApiKey}`);
	if (search.data.items[0] === undefined) {
		return null;
	} else {
		return search.data.items;
	}
}

async function getYouTubeResultsId(ytResult, numOfResults) {
	let resultsID = [];
	await youtube.searchVideos(ytResult, numOfResults)
		.then(results => {
			for (const resultId of results) {
				resultsID.push(resultId.title);
			}
		})
		.catch(err => console.log(err));
	return resultsID;
}

function shuffle(queue) {
	for (let i = queue.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[queue[i], queue[j]] = [queue[j], queue[i]];
	}
	return queue;
}

client.on("message", message => {
	var command = message.content.toLowerCase().split(" ")[0];
        if(command == prefix + 'help') {
		var djRole = message.guild.members.get(message.author.id).roles.has(message.guild.roles.find('name', 'Dj'));
		if(!djRole) return;
     let embed = new Discord.RichEmbed()
         .setColor("36393f")
         .setDescription(`**
         [Commands Help.]
${prefix}play [NameMusic/Ulr] -> لتشغيل الاغاني , واذا لم تعمل انتظر قائمة التشغيل
${prefix}skip ->  يتخطى الأغنية الحالية
${prefix}playlist ->  يعرض قائمة التشغيل الحالية
${prefix}repeat ->  يكرر تشغيل الاغنية من جديد
${prefix}yt [search term] ->  يبحث في YouTube ويعرض أول 5 نتائج
${prefix}add -> يضيف أغنية من بحث YouTube إلى قائمة التشغيل
${prefix}vol ->  يحدد حجم الموسيقى إلى نسبة معينة
${prefix}help or ${prefix}commands ->  يعرض لك الاوامر البوت المتاحة
**`)
   message.channel.send({embed});

   }
   });


client.on('message', message => {
	var command = message.content.toLowerCase().split(" ")[0];
	
	if(command == prefix + 'help') {
		var djRole = message.guild.members.get(message.author.id).roles.has(message.guild.roles.find('name', 'Dj'));
	if(!djRole) return;
		let embed = new Discord.RichEmbed()
         .setColor("36393f")
         .setDescription(`**
         [Commands Help.]
${prefix}play [NameMusic/Ulr] -> لتشغيل الاغاني , واذا لم تعمل انتظر قائمة التشغيل
${prefix}skip ->  يتخطى الأغنية الحالية
${prefix}playlist ->  يعرض قائمة التشغيل الحالية
${prefix}playlist remove [song number] ->  يزيل الأغنية المختارة من قائمة التشغيل (Dj)
${prefix}playlist clear ->  يزيل كل الأغاني من قائمة التشغيل (Dj)
${prefix}playlist shuffle ->  يغير قائمة التشغيل الحالية (Dj)
${prefix}repeat ->  يكرر تشغيل الاغنية من جديد
${prefix}stop ->  يتوقف عن تشغيل الموسيقى ويحذف جميع الأغاني في قائمة التشغيل (Dj)
${prefix}}yt [search term] ->  يبحث في YouTube ويعرض أول 5 نتائج
${prefix}add -> يضيف أغنية من بحث YouTube إلى قائمة التشغيل
${prefix}vol ->  يحدد حجم الموسيقى إلى نسبة معينة
${prefix}help or ${prefix}commands ->  يعرض لك الاوامر البوت المتاحة
**`)
   message.channel.send({embed});

   }
   });
*/


var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith('play')) {
		if (!message.member.voiceChannel) return message.reply('** You Are Not In VoiceChannel **');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**قم بوضع الرابط , او  الاسم**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('بطلب من: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
	else if (mess.startsWith('skip')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم التخطي**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.end();
		});
	}
	else if (message.content.startsWith('vol')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		// console.log(args)
		if (args > 100) return message.reply(':x: **100**');
		if (args < 1) return message.reply(":x: **1**");
		dispatcher.setVolume(1 * args / 50);
		message.channel.sendMessage(` **${dispatcher.volume*50}** قمت بتحديث الصوت الى:`);
	}
	else if (mess.startsWith('pause')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم الايقاف مؤقت**').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith('unpause')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم اعاده التشغيل**').then(() => {
			dispatcher.resume();
		});
	}
	else if (mess.startsWith('stop')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':name_badge: **تم الايقاف**');
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith('join')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.member.voiceChannel.join().then(message.react('✅'));
	}
	else if (mess.startsWith('play')) {
		getID(args, function(id) {
			add_to_queue(id);
			fetchVideoInfo(id, function(err, videoInfo) {
				if (err) throw new Error(err);
				if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
				if (isPlaying == false) return message.reply(':x:');
				let playing_now_info = new Discord.RichEmbed()
					.setAuthor(client.user.username, client.user.avatarURL)
					.setDescription(`**${videoInfo.title}**`)
					.setColor("RANDOM")
					.setFooter('Requested By:' + message.author.tag)
					.setImage(videoInfo.thumbnailUrl)
				message.channel.sendEmbed(playing_now_info);
				queueNames.push(videoInfo.title);
				// let now_playing = videoInfo.title;
				now_playing.push(videoInfo.title);

			});

		});
	}

	function skip_song(message) {
		if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
		dispatcher.end();
	}

	function playMusic(id, message) {
		voiceChannel = message.member.voiceChannel;


		voiceChannel.join().then(function(connectoin) {
			let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
				filter: 'audioonly'
			});
			skipReq = 0;
			skippers = [];

			dispatcher = connectoin.playStream(stream);
			dispatcher.on('end', function() {
				skipReq = 0;
				skippers = [];
				queue.shift();
				queueNames.shift();
				if (queue.length === 0) {
					queue = [];
					queueNames = [];
					isPlaying = false;
				}
				else {
					setTimeout(function() {
						playMusic(queue[0], message);
					}, 500);
				}
			});
		});
	}

	function getID(str, cb) {
		if (isYoutube(str)) {
			cb(getYoutubeID(str));
		}
		else {
			search_video(str, function(id) {
				cb(id);
			});
		}
	}

	function add_to_queue(strID) {
		if (isYoutube(strID)) {
			queue.push(getYoutubeID(strID));
		}
		else {
			queue.push(strID);
		}
	}

	function search_video(query, cb) {
		request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
			var json = JSON.parse(body);
			cb(json.items[0].id.videoId);
		});
	}


	function isYoutube(str) {
		return str.toLowerCase().indexOf('youtube.com') > -1;
	}
});


client.login(process.env.BOT_TOKEN);
//Cards
const card = new Discord.Client();
const code = '/';

card.on('message',async message => {
    if(message.content.startsWith(code + "card")) {
  if(!message.channel.guild) return message.reply(' ');
    let rank = message.guild.member(message.author).roles.find('name', 'ناشرون بطاقات');
    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة ناشرون بطاقات  لأستخدام هذا الأمر.**');
    let jscodes = message.guild.channels.find(`name`, "بطاقات-جديدة");
    if(!jscodes) return message.channel.send(":x:لا يوجد روم نشر البطاقات");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب البطاقة الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف البطاقة او معلومات عنها الأن... :pencil2: **').then(msg => {
  
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
        msg.edit(':shield: **| [ هل انت متأكد من نشر البطاقة | [ نعم ] او [ لا**');
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
══════════════════❃═══════════════════
**AC CARD © :arrow_down:**💳             
\`\`\`pl
${thisMessage}\`\`\`
══════════════════❃═══════════════════
**وصف البطاقة📋**: ${boi}
**نشرت بواسطة📌**: ${message.author} `); 
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

card.login(process.env.card);
