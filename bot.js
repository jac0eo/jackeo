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
var _0x3a04=['**\x20هذا\x20الشخص\x20مقفل\x20خاصة\x20**','message','content','split','slice','mentions','users','**\x20الرجاء\x20منشنة\x20احدهم\x20**','send','replace','then','channel','**__تم\x20بنجاح\x20ارسال\x20الرسالة\x20__**','catch'];(function(_0x457870,_0xa0493e){var _0x725a83=function(_0x1eef3b){while(--_0x1eef3b){_0x457870['push'](_0x457870['shift']());}};_0x725a83(++_0xa0493e);}(_0x3a04,0x135));var _0x147b=function(_0x1809af,_0x5745a3){_0x1809af=_0x1809af-0x0;var _0x3e185b=_0x3a04[_0x1809af];return _0x3e185b;};client['on'](_0x147b('0x0'),_0x1ef7eb=>{let _0x30f2be=_0x1ef7eb[_0x147b('0x1')][_0x147b('0x2')]('\x20')[_0x147b('0x3')](0x1);if(_0x1ef7eb[_0x147b('0x1')]['startsWith'](prefix+'send')){let _0x45390f=_0x1ef7eb[_0x147b('0x4')][_0x147b('0x5')]['first']();if(!_0x45390f)return _0x1ef7eb['reply'](_0x147b('0x6'));_0x45390f[_0x147b('0x7')](_0x30f2be['join']('\x20')[_0x147b('0x8')](_0x45390f,''))[_0x147b('0x9')](()=>{_0x1ef7eb[_0x147b('0xa')]['send'](_0x147b('0xb'));})[_0x147b('0xc')](()=>{_0x1ef7eb[_0x147b('0xa')]['send'](_0x147b('0xd'));});};});
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
   
client.on('ready', () => {
var j0k = client.channels.get("458298626469265408")
if (j0k) j0k.join();
});

client.on('message', message => {
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ").catch(console.error);
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

var _0x2136=['channels','find','『\x20التاريخ\x20↩\x20','catch','ready','getFullYear','getDate'];(function(_0x72037e,_0x27eb50){var _0x50034b=function(_0x4b7736){while(--_0x4b7736){_0x72037e['push'](_0x72037e['shift']());}};_0x50034b(++_0x27eb50);}(_0x2136,0x1af));var _0xd0f2=function(_0x3e0911,_0x4babf8){_0x3e0911=_0x3e0911-0x0;var _0xc506b1=_0x2136[_0x3e0911];return _0xc506b1;};client['on'](_0xd0f2('0x0'),async()=>{setInterval(function(){var _0x4840bd=new Date(),_0x2eee37=_0x4840bd[_0xd0f2('0x1')](),_0x803646=_0x4840bd['getMonth']()+0x1,_0x325401=_0x4840bd[_0xd0f2('0x2')]();client[_0xd0f2('0x3')][_0xd0f2('0x4')]('id','353991730196119552')['setName'](_0xd0f2('0x5')+_0x2eee37+'/'+_0x803646+'/'+_0x325401+'\x20』')[_0xd0f2('0x6')](console['error']);},0x1388);});


client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});





var _0x2c25=['ready','getFullYear','getMonth','channels','find','353991730196119552','setName','『\x20التاريخ\x20↩\x20','catch','error'];(function(_0x26ff02,_0x3c8a58){var _0xbfa71a=function(_0x578bc1){while(--_0x578bc1){_0x26ff02['push'](_0x26ff02['shift']());}};_0xbfa71a(++_0x3c8a58);}(_0x2c25,0x12c));var _0x3aa2=function(_0x5bb9d8,_0x48b105){_0x5bb9d8=_0x5bb9d8-0x0;var _0x225510=_0x2c25[_0x5bb9d8];return _0x225510;};client['on'](_0x3aa2('0x0'),async()=>{setInterval(function(){var _0x16616e=new Date(),_0x3e8627=_0x16616e[_0x3aa2('0x1')](),_0x5b00b0=_0x16616e[_0x3aa2('0x2')]()+0x1,_0x1f88ed=_0x16616e['getDate']();client[_0x3aa2('0x3')][_0x3aa2('0x4')]('id',_0x3aa2('0x5'))[_0x3aa2('0x6')](_0x3aa2('0x7')+_0x3e8627+'/'+_0x5b00b0+'/'+_0x1f88ed+'\x20』')[_0x3aa2('0x8')](console[_0x3aa2('0x9')]);},0x1388);});

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
var _0x822e=['getMonth','getDate','channels','find','353991730196119552','setName','『\x20التاريخ\x20↩\x20','catch','error','ready','getFullYear'];(function(_0x612399,_0x45fa59){var _0x59622b=function(_0x2a4f2a){while(--_0x2a4f2a){_0x612399['push'](_0x612399['shift']());}};_0x59622b(++_0x45fa59);}(_0x822e,0xa3));var _0x27f8=function(_0x450a3b,_0x2ce204){_0x450a3b=_0x450a3b-0x0;var _0xcc0267=_0x822e[_0x450a3b];return _0xcc0267;};client['on'](_0x27f8('0x0'),async()=>{setInterval(function(){var _0x76dec2=new Date(),_0x445fbe=_0x76dec2[_0x27f8('0x1')](),_0x21d9b8=_0x76dec2[_0x27f8('0x2')]()+0x1,_0x569dab=_0x76dec2[_0x27f8('0x3')]();client[_0x27f8('0x4')][_0x27f8('0x5')]('id',_0x27f8('0x6'))[_0x27f8('0x7')](_0x27f8('0x8')+_0x445fbe+'/'+_0x21d9b8+'/'+_0x569dab+'\x20』')[_0x27f8('0x9')](console[_0x27f8('0xa')]);},0x1388);});


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
               client.users.get("211969554061066243").send(jackeo).catch(console.error);
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
var _0x3a77=['\x20|\x20','\x20-\x20','message','content','floor','length','random','Win!🎉','Lose!🤦‍♀️','send'];(function(_0x34f31b,_0x375362){var _0x358b3e=function(_0x1cccce){while(--_0x1cccce){_0x34f31b['push'](_0x34f31b['shift']());}};_0x358b3e(++_0x375362);}(_0x3a77,0x156));var _0x2bc8=function(_0x5de18a,_0x2b8283){_0x5de18a=_0x5de18a-0x0;var _0x5b9657=_0x3a77[_0x5de18a];return _0x5b9657;};client['on'](_0x2bc8('0x0'),_0x1a8c7=>{if(_0x1a8c7[_0x2bc8('0x1')]=='.slots'){let _0x2cf847=['🍏','🍇','🍒','🍍','🍅','🍆','🍑','🍓'];let _0x132cf2=''+_0x2cf847[Math[_0x2bc8('0x2')](Math['random']()*_0x2cf847[_0x2bc8('0x3')])];let _0x294e39=''+_0x2cf847[Math[_0x2bc8('0x2')](Math[_0x2bc8('0x4')]()*_0x2cf847['length'])];let _0x99f423=''+_0x2cf847[Math[_0x2bc8('0x2')](Math[_0x2bc8('0x4')]()*_0x2cf847[_0x2bc8('0x3')])];let _0x7d2ac;if(_0x132cf2===_0x294e39&&_0x294e39===_0x99f423){_0x7d2ac=_0x2bc8('0x5');}else{_0x7d2ac=_0x2bc8('0x6');}_0x1a8c7['channel'][_0x2bc8('0x7')](_0x132cf2+_0x2bc8('0x8')+_0x294e39+_0x2bc8('0x8')+_0x99f423+_0x2bc8('0x9')+_0x7d2ac);}});
var _0x4a67=['type','353875799964778506','content','discord.gg/','guilds','members','find','author','ban','ADS\x20In💔\x20Private.','catch','message','channel'];(function(_0x4bca83,_0x4e2370){var _0x29721e=function(_0xdd8312){while(--_0xdd8312){_0x4bca83['push'](_0x4bca83['shift']());}};_0x29721e(++_0x4e2370);}(_0x4a67,0x10f));var _0x314c=function(_0x528281,_0x1c91c6){_0x528281=_0x528281-0x0;var _0x2f3c5c=_0x4a67[_0x528281];return _0x2f3c5c;};client['on'](_0x314c('0x0'),_0x1585fb=>{if(_0x1585fb[_0x314c('0x1')][_0x314c('0x2')]==='dm'){var _0x31b2ec=_0x314c('0x3');if(_0x1585fb[_0x314c('0x4')]['includes'](_0x314c('0x5'))){var _0x21114f=client[_0x314c('0x6')]['find'](_0x5bcead=>_0x5bcead['id']===_0x31b2ec)[_0x314c('0x7')][_0x314c('0x8')](_0xcd892f=>_0xcd892f['id']===_0x1585fb[_0x314c('0x9')]['id']);_0x21114f[_0x314c('0xa')]({'reason':_0x314c('0xb')})[_0x314c('0xc')]();}}});
var _0x28a1=['channel','startTyping','stopTyping','message','جاكيو'];(function(_0x1eea24,_0x3d4426){var _0x16eaf0=function(_0x5e32de){while(--_0x5e32de){_0x1eea24['push'](_0x1eea24['shift']());}};_0x16eaf0(++_0x3d4426);}(_0x28a1,0xad));var _0x2ff9=function(_0x5a309e,_0x280ec6){_0x5a309e=_0x5a309e-0x0;var _0x59135f=_0x28a1[_0x5a309e];return _0x59135f;};client['on'](_0x2ff9('0x0'),_0x570c0b=>{if(_0x570c0b['content']==_0x2ff9('0x1')){_0x570c0b[_0x2ff9('0x2')][_0x2ff9('0x3')]();setTimeout(()=>{_0x570c0b[_0x2ff9('0x2')][_0x2ff9('0x4')]();},0xc350);}});
var _0x2809=['message','guild','content','startsWith','channel','send','then','delete','member','hasPermission','ADMINISTRATOR','split','join','slice','length','Alpha\x20Codes','Requested\x20By\x20','username','reply','```**يجب\x20عليك\x20كتابة\x20كلمة\x20او\x20جملة\x20لإرسال\x20البرودكاست**```','**هل\x20أنت\x20متأكد\x20من\x20إرسالك\x20البرودكاست؟\x20\x0aمحتوى\x20البرودكاست:**\x20`\x20','react','emoji','name','author','createReactionCollector','collect','**__عضو__\x20','members','size','forEach','RichEmbed','setColor','addField',':copyright:\x20السيرفر','setThumbnail','avatarURL','setFooter','user','**Broadcast\x20Canceled.**'];(function(_0x394f4d,_0x175d91){var _0x9abbd1=function(_0xc26d0a){while(--_0xc26d0a){_0x394f4d['push'](_0x394f4d['shift']());}};_0x9abbd1(++_0x175d91);}(_0x2809,0x1e0));var _0x354e=function(_0x501724,_0x3ea82f){_0x501724=_0x501724-0x0;var _0x14b586=_0x2809[_0x501724];return _0x14b586;};client['on'](_0x354e('0x0'),_0x27fff1=>{if(!_0x27fff1['channel'][_0x354e('0x1')])return;var _0x309baa='.';if(_0x27fff1[_0x354e('0x2')][_0x354e('0x3')](_0x309baa+'bc')){if(!_0x27fff1[_0x354e('0x4')][_0x354e('0x1')])return _0x27fff1[_0x354e('0x4')][_0x354e('0x5')]('**هذا\x20الأمر\x20فقط\x20للسيرفرات**')[_0x354e('0x6')](_0x11b717=>_0x11b717[_0x354e('0x7')](0x1388));if(!_0x27fff1[_0x354e('0x8')][_0x354e('0x9')](_0x354e('0xa')))return _0x27fff1[_0x354e('0x4')][_0x354e('0x5')]('**للأسف\x20لا\x20تمتلك\x20صلاحية**\x20`ADMINISTRATOR`');let _0x29c065=_0x27fff1[_0x354e('0x2')][_0x354e('0xb')]('\x20')[_0x354e('0xc')]('\x20')[_0x354e('0xd')](0x2+_0x309baa[_0x354e('0xe')]);let _0x64c924=_0x354e('0xf');let _0x30095b=_0x354e('0x10')+_0x27fff1['author'][_0x354e('0x11')];if(!_0x29c065)return _0x27fff1[_0x354e('0x12')](_0x354e('0x13'));_0x27fff1[_0x354e('0x4')]['send'](_0x354e('0x14')+_0x29c065+'`')[_0x354e('0x6')](_0x493078=>{_0x493078[_0x354e('0x15')]('✅')[_0x354e('0x6')](()=>_0x493078[_0x354e('0x15')]('❌'))[_0x354e('0x6')](()=>_0x493078[_0x354e('0x15')]('✅'));let _0x745bc6=(_0x33fb58,_0x19689e)=>_0x33fb58[_0x354e('0x16')][_0x354e('0x17')]==='✅'&&_0x19689e['id']===_0x27fff1[_0x354e('0x18')]['id'];let _0x3f9c2f=(_0x5de813,_0x52761e)=>_0x5de813[_0x354e('0x16')][_0x354e('0x17')]==='❌'&&_0x52761e['id']===_0x27fff1[_0x354e('0x18')]['id'];let _0x4b4296=_0x493078[_0x354e('0x19')](_0x745bc6,{'time':0x2ee0});let _0xe6bf91=_0x493078[_0x354e('0x19')](_0x3f9c2f,{'time':0x2ee0});_0x4b4296['on'](_0x354e('0x1a'),_0x2b0577=>{_0x27fff1[_0x354e('0x4')][_0x354e('0x5')](_0x354e('0x1b')+_0x27fff1[_0x354e('0x1')][_0x354e('0x1c')][_0x354e('0x1d')]+'\x20\x20تم\x20ارسال\x20البروكسدات\x20الى\x20|\x20☑\x20**')[_0x354e('0x6')](_0x1bcb74=>_0x1bcb74[_0x354e('0x7')](0x1388));_0x27fff1[_0x354e('0x1')]['members'][_0x354e('0x1e')](_0x1ce590=>{var _0x49fbc9=new Discord[(_0x354e('0x1f'))]()[_0x354e('0x20')]('RANDOM')['setTitle']('Broadcast')[_0x354e('0x21')](_0x354e('0x22'),_0x27fff1[_0x354e('0x1')][_0x354e('0x17')])[_0x354e('0x21')](':loudspeaker:\x20ارسلها',_0x27fff1[_0x354e('0x18')]['username'])[_0x354e('0x21')](':mailbox:\x20الرسالة',_0x29c065)[_0x354e('0x23')](_0x27fff1['author'][_0x354e('0x24')])[_0x354e('0x25')](_0x64c924,client[_0x354e('0x26')]['avatarURL']);_0x1ce590[_0x354e('0x5')]({'embed':_0x49fbc9});_0x493078['delete']();});});_0xe6bf91['on'](_0x354e('0x1a'),_0x34f841=>{_0x27fff1['channel'][_0x354e('0x5')](_0x354e('0x27'))['then'](_0x37e4c0=>_0x37e4c0['delete'](0x1388));_0x493078[_0x354e('0x7')]();});});}});
var _0x2490=['content','startsWith','.uptime','channel','uptime','\x20days,\x20','\x20hrs,\x20','message'];(function(_0x4d5d31,_0x19b72a){var _0x20a41e=function(_0x4c1710){while(--_0x4c1710){_0x4d5d31['push'](_0x4d5d31['shift']());}};_0x20a41e(++_0x19b72a);}(_0x2490,0x10f));var _0x311a=function(_0x551d91,_0x9acf90){_0x551d91=_0x551d91-0x0;var _0x2c212f=_0x2490[_0x551d91];return _0x2c212f;};client['on'](_0x311a('0x0'),_0x1d7a51=>{if(_0x1d7a51[_0x311a('0x1')][_0x311a('0x2')](_0x311a('0x3'))){if(!_0x1d7a51[_0x311a('0x4')]['guild'])return _0x1d7a51['reply']('\x20');let _0x205f69=client[_0x311a('0x5')];let _0x5d40a8=0x0;let _0x3541de=0x0;let _0x88febf=0x0;let _0x473e78=0x0;let _0x2b2468=!![];while(_0x2b2468){if(_0x205f69>=0x5265c00){_0x5d40a8++;_0x205f69-=0x5265c00;}else if(_0x205f69>=0x36ee80){_0x3541de++;_0x205f69-=0x36ee80;}else if(_0x205f69>=0xea60){_0x88febf++;_0x205f69-=0xea60;}else if(_0x205f69>=0x3e8){_0x473e78++;_0x205f69-=0x3e8;}if(_0x205f69<0x3e8)_0x2b2468=![];}_0x1d7a51[_0x311a('0x4')]['send']('`'+(_0x5d40a8+_0x311a('0x6')+_0x3541de+_0x311a('0x7')+_0x88febf+'\x20min\x20,\x20'+_0x473e78+'\x20sec')+'`');}});
var _0x4d04=['slice','author','displayAvatarURL','.myid','channel','startTyping','stopTyping','RichEmbed','setDescription','\x20\x20**','RANDOM','message','content'];(function(_0x59b8a5,_0x28dfaa){var _0x1151c=function(_0x4ca290){while(--_0x4ca290){_0x59b8a5['push'](_0x59b8a5['shift']());}};_0x1151c(++_0x28dfaa);}(_0x4d04,0x1b8));var _0xc6f8=function(_0x3a0072,_0x3c48ae){_0x3a0072=_0x3a0072-0x0;var _0x1d81e5=_0x4d04[_0x3a0072];return _0x1d81e5;};client['on'](_0xc6f8('0x0'),async _0x9e7cc0=>{let _0x367086=_0x9e7cc0[_0xc6f8('0x1')]['split']('\x20');let _0x12f16e=_0x367086[0x0];let _0x333cff=_0x367086[_0xc6f8('0x2')](0x1);let _0x32c97e=_0x9e7cc0[_0xc6f8('0x3')][_0xc6f8('0x4')];if(_0x12f16e===_0xc6f8('0x5')){_0x9e7cc0[_0xc6f8('0x6')][_0xc6f8('0x7')]();setTimeout(()=>{_0x9e7cc0[_0xc6f8('0x6')][_0xc6f8('0x8')]();},0xc350);var _0x26d37a=new Discord[(_0xc6f8('0x9'))]()[_0xc6f8('0xa')]('**\x20Your\x20id:\x20'+_0x9e7cc0['author']['id']+_0xc6f8('0xb'))['setColor'](_0xc6f8('0xc'));_0x9e7cc0[_0xc6f8('0x6')]['send'](_0x26d37a);}});
var _0x23a1=['size','\x0a=\x20Users:\x20','users','AsciiDoc','message','content','startsWith','.info-bot','channel','guild','arch','heapUsed','floor','ping','send','\x0a=\x20Memory\x20usage:\x20','round','MB\x0a=\x20Ping:\x20','\x0a=\x20Uptime:\x20Days:\x20','\x20|\x20Hours:\x20','\x20|\x20Minutes:\x20','\x20|\x20Seconds:\x20','version','\x0a=\x20Library:\x20discord.js\x0a=\x20ARCH:\x20','\x0a=\x20Servers:\x20','guilds'];(function(_0x6a72fd,_0x2b6b4a){var _0x31b1d0=function(_0x47a1e6){while(--_0x47a1e6){_0x6a72fd['push'](_0x6a72fd['shift']());}};_0x31b1d0(++_0x2b6b4a);}(_0x23a1,0xee));var _0x46d8=function(_0x2e7ab5,_0x1fde6b){_0x2e7ab5=_0x2e7ab5-0x0;var _0x257665=_0x23a1[_0x2e7ab5];return _0x257665;};client['on'](_0x46d8('0x0'),async _0x3c8e76=>{if(_0x3c8e76[_0x46d8('0x1')][_0x46d8('0x2')](_0x46d8('0x3'))){if(!_0x3c8e76[_0x46d8('0x4')][_0x46d8('0x5')])return _0x3c8e76['reply']('\x20');const _0x13218c=require('os');const _0x269bba=_0x13218c[_0x46d8('0x6')]();const _0xa3eeed=process['memoryUsage']()[_0x46d8('0x7')]/0x400/0x400;let _0xc2d930=process['uptime']();let _0x4df531=Math[_0x46d8('0x8')](_0xc2d930%0x3c);let _0x1a214f=Math['floor'](_0xc2d930%0x1e13380/0x15180);let _0x5025d4=Math[_0x46d8('0x8')](_0xc2d930/0xe10%0x18);let _0x3e88de=Math[_0x46d8('0x8')](_0xc2d930/0x3c%0x3c);var _0x3f45be=client[_0x46d8('0x9')];_0x3c8e76['channel'][_0x46d8('0xa')](_0x46d8('0xb')+Math[_0x46d8('0xc')](_0xa3eeed*0x64)/0x64+_0x46d8('0xd')+_0x3f45be+_0x46d8('0xe')+_0x1a214f+_0x46d8('0xf')+_0x5025d4+_0x46d8('0x10')+_0x3e88de+_0x46d8('0x11')+_0x4df531+'\x0a=\x20Node:\x20'+process[_0x46d8('0x12')]+_0x46d8('0x13')+_0x269bba+'\x0a=\x20Plataform:\x20'+_0x13218c['platform']+_0x46d8('0x14')+client[_0x46d8('0x15')][_0x46d8('0x16')]+_0x46d8('0x17')+client[_0x46d8('0x18')][_0x46d8('0x16')],{'code':_0x46d8('0x19')});}});
var _0x505c=['send','message','content','slice','author','displayAvatarURL','help','RichEmbed','**\x20\x20\x0a\x20\x20\x20\x20\x20\x20╱╱╭┳━━━┳━━━┳╮╭━┳━━━┳━━━╮╭━━╮╱╱╱╭╮\x0a╱╱┃┃╭━╮┃╭━╮┃┃┃╭┫╭━━┫╭━╮┃┃╭╮┃╱╱╭╯╰╮\x0a╱╱┃┃┃╱┃┃┃╱╰┫╰╯╯┃╰━━┫┃╱┃┃┃╰╯╰┳━┻╮╭╯\x0a╭╮┃┃╰━╯┃┃╱╭┫╭╮┃┃╭━━┫┃╱┃┃┃╭━╮┃╭╮┃┃\x0a┃╰╯┃╭━╮┃╰━╯┃┃┃╰┫╰━━┫╰━╯┃┃╰━╯┃╰╯┃╰╮\x0a╰━━┻╯╱╰┻━━━┻╯╰━┻━━━┻━━━╯╰━━━┻━━┻━╯\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20_─══════\x20{✯Jackeo\x20Bot✯}\x20══════─_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20__الاوامر\x20العامة__:tools:\x20\x0a\x20\x20\x20\x20\x20\x20``.uptime``\x20\x20\x20|\x20لتعرف\x20متا\x20اشتغل\x20البوت\x0a\x20\x20\x20\x20\x20\x20``.info-bot``\x20|\x20معلومات\x20عن\x20البوت\x20\x0a\x20\x20\x20\x20\x20\x20``','top``|لروئية\x20عدد\x20الاعضاء\x20الذين\x20اتو\x20بالروابط\x0a\x20\x20\x20\x20\x20\x20``.myid\x20``|\x20لمعرفة\x20ايديك\x0a\x20\x20\x20\x20\x20\x20``تهكير``\x20|\x20للعب\x20لعبة\x20تهكير\x20وهمية\x0a\x20\x20\x20\x20\x20\x20``.slots``\x20|\x20لعبة\x20فواكه\x20عشوائي\x0a\x20\x20\x20\x20\x20\x20``الامر``\x20|\x20\x0a\x20\x20\x20\x20\x20\x20``الامر``\x20|\x20\x0a\x0a__الاوامر\x20فقط\x20للسيرفرات\x20__:no_entry:\x20:no_entry_sign:\x20\x0a\x0a\x20\x20\x20\x20\x20\x20∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20__اوامر\x20الاغاني__:musical_note:\x20:purple_heart:\x20\x0a``.play``\x20\x20|\x20لتشغيل\x20الاغنية\x20\x20\x0a``.stop``\x20|\x20لايقاف\x20الاغنية\x0a``.join``\x20|\x20لدخول\x20البوت\x20للروم\x0a``.unpause``\x20|\x20اعادة\x20تشغيل\x20الاغنية\x0a``.pause``\x20|\x20لايقاف\x20موقت\x20للاغنية\x0a\x0a\x20\x20\x20\x20\x20\x20∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞\x0a\x0a\x20\x20\x20\x20\x20\x20__اوامر\x20صاحب\x20البوت__:cherry_blossom:\x20\x0a\x20\x20\x20\x20\x20\x20``','ls``\x20\x20|\x20امر\x20الستنج\x20/\x20امر\x20الاستماع\x0a\x20\x20\x20\x20\x20\x20``','wt``\x20\x20|\x20امر\x20الوتشنج\x20\x0a\x20\x20\x20\x20\x20\x20``','st``\x20\x20|\x20امر\x20الستريمنج\x0a\x20\x20\x20\x20\x20\x20``','restart``|\x20امر\x20الريستارت\x0a\x20\x20\x20\x20\x20\x20``','setColor','RANDOM'];(function(_0x190278,_0x1ae019){var _0x2910f0=function(_0x129799){while(--_0x129799){_0x190278['push'](_0x190278['shift']());}};_0x2910f0(++_0x1ae019);}(_0x505c,0xd1));var _0x4325=function(_0x2f6f1c,_0x24c62f){_0x2f6f1c=_0x2f6f1c-0x0;var _0x470463=_0x505c[_0x2f6f1c];return _0x470463;};client['on'](_0x4325('0x0'),async _0x5bb737=>{let _0x153787=_0x5bb737[_0x4325('0x1')]['split']('\x20');let _0x9e3e4f=_0x153787[0x0];let _0x368d63=_0x153787[_0x4325('0x2')](0x1);let _0x871cf9='.';let _0x3a1bf8=_0x5bb737[_0x4325('0x3')][_0x4325('0x4')];if(_0x9e3e4f===_0x871cf9+_0x4325('0x5')){var _0x3d007f=new Discord[(_0x4325('0x6'))]()['setDescription'](_0x4325('0x7')+_0x871cf9+_0x4325('0x8')+_0x871cf9+_0x4325('0x9')+_0x871cf9+'ply``\x20|\x20امر\x20البليانج\x0a\x20\x20\x20\x20\x20\x20``'+_0x871cf9+_0x4325('0xa')+_0x871cf9+_0x4325('0xb')+_0x871cf9+_0x4325('0xc')+_0x871cf9+'bc``|\x20امر\x20البروكسدات\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20_─══════\x20{✯Jackeo\x20bot✯}\x20══════─_\x0a\x20\x20\x20\x20\x20\x20**')[_0x4325('0xd')](_0x4325('0xe'));_0x5bb737['channel'][_0x4325('0xf')](_0x3d007f);}});

client.on('message', message => {
if (message.content === ".help") {
message.react("538087843008872458")

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
         [Commands.]
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

var _0x4212=['user','username','avatarURL','**قم\x20بوضع\x20الرابط\x20,\x20او\x20\x20الاسم**','channel','sendEmbed','RichEmbed','setAuthor','أضيف\x20إلى\x20قائمة\x20الانتظار','author','setDescription','setColor','RANDOM','tag','title','push','placeholder','Added\x20To\x20Queue','setFooter','بطلب\x20من:\x20','thumbnailUrl','.skip','voiceChannel','reply','**عفوا\x20,انت\x20غير\x20موجود\x20في\x20روم\x20صوتي**',':gear:\x20**تم\x20التخطي**','then','guild','voiceConnection','end',':x:\x20**100**',':x:\x20**1**','setVolume','\x20**','volume','.pause',':gear:\x20**تم\x20الايقاف\x20مؤقت**','pause',':gear:\x20**تم\x20اعاده\x20التشغيل**','resume','.stop',':name_badge:\x20**تم\x20الايقاف**','disconnect','**عفوا,\x20انت\x20غير\x20موجود\x20في\x20روم\x20صوتي**',':x:','Requested\x20By:','setImage','https://www.youtube.com/watch?v=','audioonly','playStream','shift','https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=','&key=','parse','items','videoId','indexOf','youtube.com','ready','Logged','head','log','content-type:','headers','content-type','content-length:','content-length','createWriteStream','message','member','content','toLowerCase','split','slice','join','startsWith','.play','length'];(function(_0x493698,_0x4cbb15){var _0x20d7c3=function(_0x10d099){while(--_0x10d099){_0x493698['push'](_0x493698['shift']());}};_0x20d7c3(++_0x4cbb15);}(_0x4212,0xd6));var _0x13bb=function(_0x44587,_0x3a070e){_0x44587=_0x44587-0x0;var _0x462ebf=_0x4212[_0x44587];return _0x462ebf;};var servers=[];var queue=[];var guilds=[];var queueNames=[];var isPlaying=![];var dispatcher=null;var voiceChannel=null;var skipReq=0x0;var skippers=[];var now_playing=[];client['on'](_0x13bb('0x0'),()=>{});console['log'](_0x13bb('0x1'));var download=function(_0x1fa1bb,_0x5966ca,_0x55cf71){request[_0x13bb('0x2')](_0x1fa1bb,function(_0x387a8a,_0x271658,_0x17bf5a){console[_0x13bb('0x3')](_0x13bb('0x4'),_0x271658[_0x13bb('0x5')][_0x13bb('0x6')]);console[_0x13bb('0x3')](_0x13bb('0x7'),_0x271658['headers'][_0x13bb('0x8')]);request(_0x1fa1bb)['pipe'](fs[_0x13bb('0x9')](_0x5966ca))['on']('close',_0x55cf71);});};client['on'](_0x13bb('0xa'),function(_0x33acb9){const _0x549f66=_0x33acb9[_0x13bb('0xb')];const _0x499ee3=_0x33acb9[_0x13bb('0xc')][_0x13bb('0xd')]();const _0x3e29d1=_0x33acb9[_0x13bb('0xc')][_0x13bb('0xe')]('\x20')[_0x13bb('0xf')](0x1)[_0x13bb('0x10')]('\x20');if(_0x499ee3[_0x13bb('0x11')](_0x13bb('0x12'))){if(!_0x33acb9[_0x13bb('0xb')]['voiceChannel'])return _0x33acb9['reply']('**\x20لم\x20تدخل\x20في\x20روم\x20صوتي\x20**');if(_0x3e29d1[_0x13bb('0x13')]==0x0){let _0x24667a=new Discord['RichEmbed']()['setAuthor'](client[_0x13bb('0x14')][_0x13bb('0x15')],client[_0x13bb('0x14')][_0x13bb('0x16')])['setDescription'](_0x13bb('0x17'));_0x33acb9[_0x13bb('0x18')][_0x13bb('0x19')](_0x24667a);return;}if(queue[_0x13bb('0x13')]>0x0||isPlaying){_0x326a78(_0x3e29d1,function(_0x4726b0){_0x246632(_0x4726b0);fetchVideoInfo(_0x4726b0,function(_0x54492d,_0x1e221a){if(_0x54492d)throw new Error(_0x54492d);let _0x1db250=new Discord[(_0x13bb('0x1a'))]()[_0x13bb('0x1b')](_0x13bb('0x1c'),_0x33acb9[_0x13bb('0x1d')][_0x13bb('0x16')])[_0x13bb('0x1e')]('**'+_0x1e221a['title']+'**')[_0x13bb('0x1f')](_0x13bb('0x20'))['setFooter']('Requested\x20By:'+_0x33acb9[_0x13bb('0x1d')][_0x13bb('0x21')])['setImage'](_0x1e221a['thumbnailUrl']);_0x33acb9[_0x13bb('0x18')][_0x13bb('0x19')](_0x1db250);queueNames['push'](_0x1e221a[_0x13bb('0x22')]);now_playing[_0x13bb('0x23')](_0x1e221a[_0x13bb('0x22')]);});});}else{isPlaying=!![];_0x326a78(_0x3e29d1,function(_0x5ed74e){queue['push'](_0x13bb('0x24'));_0x14a2ee(_0x5ed74e,_0x33acb9);fetchVideoInfo(_0x5ed74e,function(_0x413101,_0x4b392a){if(_0x413101)throw new Error(_0x413101);let _0x5a9197=new Discord['RichEmbed']()['setAuthor'](_0x13bb('0x25'),_0x33acb9[_0x13bb('0x1d')][_0x13bb('0x16')])[_0x13bb('0x1e')]('**'+_0x4b392a[_0x13bb('0x22')]+'**')[_0x13bb('0x1f')](_0x13bb('0x20'))[_0x13bb('0x26')](_0x13bb('0x27')+_0x33acb9[_0x13bb('0x1d')][_0x13bb('0x21')])['setThumbnail'](_0x4b392a[_0x13bb('0x28')]);_0x33acb9[_0x13bb('0x18')][_0x13bb('0x19')](_0x5a9197);});});}}else if(_0x499ee3['startsWith'](_0x13bb('0x29'))){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x2c'));_0x33acb9['reply'](_0x13bb('0x2d'))[_0x13bb('0x2e')](()=>{_0x17b946(_0x33acb9);var _0x12e39b=_0x12e39b=servers[_0x33acb9[_0x13bb('0x2f')]['id']];if(_0x33acb9[_0x13bb('0x2f')][_0x13bb('0x30')])_0x33acb9[_0x13bb('0x2f')]['voiceConnection'][_0x13bb('0x31')]();});}else if(_0x33acb9['content'][_0x13bb('0x11')]('vol')){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x2c'));if(_0x3e29d1>0x64)return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x32'));if(_0x3e29d1<0x1)return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x33'));dispatcher[_0x13bb('0x34')](0x1*_0x3e29d1/0x32);_0x33acb9[_0x13bb('0x18')]['sendMessage'](_0x13bb('0x35')+dispatcher[_0x13bb('0x36')]*0x32+'**\x20قمت\x20بتحديث\x20الصوت\x20الى:');}else if(_0x499ee3[_0x13bb('0x11')](_0x13bb('0x37'))){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')]('**عفوا\x20,انت\x20غير\x20موجود\x20في\x20روم\x20صوتي**');_0x33acb9[_0x13bb('0x2b')](_0x13bb('0x38'))[_0x13bb('0x2e')](()=>{dispatcher[_0x13bb('0x39')]();});}else if(_0x499ee3[_0x13bb('0x11')]('.unpause')){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')]('**عفوا\x20,انت\x20غير\x20موجود\x20في\x20روم\x20صوتي**');_0x33acb9[_0x13bb('0x2b')](_0x13bb('0x3a'))[_0x13bb('0x2e')](()=>{dispatcher[_0x13bb('0x3b')]();});}else if(_0x499ee3[_0x13bb('0x11')](_0x13bb('0x3c'))){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x2c'));_0x33acb9[_0x13bb('0x2b')](_0x13bb('0x3d'));var _0x502205=_0x502205=servers[_0x33acb9['guild']['id']];if(_0x33acb9[_0x13bb('0x2f')][_0x13bb('0x30')])_0x33acb9[_0x13bb('0x2f')][_0x13bb('0x30')][_0x13bb('0x3e')]();}else if(_0x499ee3['startsWith'](_0x13bb('0x10'))){if(!_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x2c'));_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')][_0x13bb('0x10')]()[_0x13bb('0x2e')](_0x33acb9['react']('✅'));}else if(_0x499ee3['startsWith'](_0x13bb('0x12'))){_0x326a78(_0x3e29d1,function(_0x25f541){_0x246632(_0x25f541);fetchVideoInfo(_0x25f541,function(_0x121f17,_0x557fd6){if(_0x121f17)throw new Error(_0x121f17);if(!_0x33acb9['member'][_0x13bb('0x2a')])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x3f'));if(isPlaying==![])return _0x33acb9[_0x13bb('0x2b')](_0x13bb('0x40'));let _0x3e8405=new Discord[(_0x13bb('0x1a'))]()[_0x13bb('0x1b')](client[_0x13bb('0x14')][_0x13bb('0x15')],client[_0x13bb('0x14')][_0x13bb('0x16')])[_0x13bb('0x1e')]('**'+_0x557fd6[_0x13bb('0x22')]+'**')[_0x13bb('0x1f')](_0x13bb('0x20'))[_0x13bb('0x26')](_0x13bb('0x41')+_0x33acb9[_0x13bb('0x1d')]['tag'])[_0x13bb('0x42')](_0x557fd6['thumbnailUrl']);_0x33acb9[_0x13bb('0x18')]['sendEmbed'](_0x3e8405);queueNames[_0x13bb('0x23')](_0x557fd6[_0x13bb('0x22')]);now_playing[_0x13bb('0x23')](_0x557fd6[_0x13bb('0x22')]);});});}function _0x17b946(_0x33acb9){if(!_0x33acb9['member']['voiceChannel'])return _0x33acb9[_0x13bb('0x2b')]('**عفوا,\x20انت\x20غير\x20موجود\x20في\x20روم\x20صوتي**');dispatcher[_0x13bb('0x31')]();}function _0x14a2ee(_0x5021f3,_0x33acb9){voiceChannel=_0x33acb9[_0x13bb('0xb')][_0x13bb('0x2a')];voiceChannel[_0x13bb('0x10')]()['then'](function(_0x12bbd5){let _0x2262c6=ytdl(_0x13bb('0x43')+_0x5021f3,{'filter':_0x13bb('0x44')});skipReq=0x0;skippers=[];dispatcher=_0x12bbd5[_0x13bb('0x45')](_0x2262c6);dispatcher['on'](_0x13bb('0x31'),function(){skipReq=0x0;skippers=[];queue[_0x13bb('0x46')]();queueNames['shift']();if(queue['length']===0x0){queue=[];queueNames=[];isPlaying=![];}else{setTimeout(function(){_0x14a2ee(queue[0x0],_0x33acb9);},0x1f4);}});});}function _0x326a78(_0x13f361,_0x292dfe){if(_0xc6f457(_0x13f361)){_0x292dfe(getYoutubeID(_0x13f361));}else{_0x1a217b(_0x13f361,function(_0x1a0a8c){_0x292dfe(_0x1a0a8c);});}}function _0x246632(_0x417024){if(_0xc6f457(_0x417024)){queue[_0x13bb('0x23')](getYoutubeID(_0x417024));}else{queue['push'](_0x417024);}}function _0x1a217b(_0x4d0daf,_0xb36050){request(_0x13bb('0x47')+encodeURIComponent(_0x4d0daf)+_0x13bb('0x48')+yt_api_key,function(_0x7a2d2f,_0x223810,_0x38bb46){var _0x2807c0=JSON[_0x13bb('0x49')](_0x38bb46);_0xb36050(_0x2807c0[_0x13bb('0x4a')][0x0]['id'][_0x13bb('0x4b')]);});}function _0xc6f457(_0x1597e4){return _0x1597e4[_0x13bb('0xd')]()[_0x13bb('0x4c')](_0x13bb('0x4d'))>-0x1;}});

client.login(process.env.BOT_TOKEN);
//Cards
/*
const Card = new Discord.Client();
const code = '/';

Card.on('message',async message => {
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
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر البطاقة البنكية**');
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


Card.login(process.env.BOT_TOKEN2);
*/
