const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
const owner = ['211969554061066243'];
const id = ['211969554061066243', '' , '' , '' , ''];
const ms = require("ms");
const fs = require('fs');
const Canvas = require("canvas");
const jimp = require("jimp");
//profile
const moment = require("moment");
//restart
const child_process = require("child_process");
//console
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
    if (message.content.startsWith("تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(RANDOM)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading  [▓] 1%**').setColor(RANDOM)})
             }, 2500)
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓] 25%**').setColor(RANDOM)})
              }, 3000)
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓▓▓▓▓] 50%**').setColor(RANDOM)})
               }, 6000)
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**').setColor(RANDOM)})
                }, 9900)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**').setColor(RANDOM)})
             }, 10050)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** ..يتم الدخول للحساب** ').setColor(RANDOM)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('** تم تهكيرك  __Done Hacking__ **')
           }, 6000)
           });
         }
 });
















//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('353991756519309333');//فويس صوتي 
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`.AG Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});
//welcome-member-join
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members 🎮"));//here 
    });





client.on('guildCreate', guild => {
  client.channels.get("211969554061066243").send(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("211969554061066243").send(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});

//help
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {



       prefix
       


 message.author.sendMessage(`




╔[❖═════════════════❖]╗
    **MEMBERS  Commands**
╚[❖═════════════════❖]╝


 **❖ ${prefix}id  ➾** لاظهار ادي حقق
 **❖ ${prefix}user  ➾** لاظهار معلومات حسابك
 **❖ ${prefix}time  ➾** لتحديد الوقت كمؤقت
 **❖ ${prefix}av  ➾ **لعرض صورة حسابك
 **❖ ${prefix}invites  ➾** لمعرفة عدد الاعضاء الي جبتهم
 **❖ ${prefix}top  ➾ **لمعرفة التوب انفايت
 **❖ ${prefix}short  ➾ ** أختصار الروابط




`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
 message.author.sendMessage(`




╔[❖══════════════❖]╗
    **Admin Commands**
╚[❖══════════════❖]╝

 **❖ ${prefix}ban <mention > ➾** لتبنيد العضو
 **❖ ${prefix}kick <mention > ➾** لطرد العضو
 **❖ ${prefix}clear <namber > ➾** لمسح الشات
 **❖ ${prefix}mute < mention > <time> ➾** لاعطاء ميوت كتابي
 **❖ ${prefix}unmute <mention> ➾** لازالة الميوت الكتابي
 **❖ ${prefix}mutechat ➾** لاقفال الشات
 **❖ ${prefix}!unmutechat ➾** لفتح الشات
 **❖ ${prefix}hidechat ➾ ** لاخفاء الشات
 **❖ ${prefix}showchat ➾** لاظهار الشات
 **❖ ${prefix}bc <message> ➾** لارسال رساله للاون لاين
 **❖ ${prefix}obc <message> ➾** لارسال رساله للاونلاين و للاوفلين
 **❖ ${prefix}brole<mention> <message>  ➾** لارسال رساله لرتبه معينه
 **❖ ${prefix}member ➾ ** لعرض معلومان الاعضاء
 **❖ ${prefix}server  ➾ ** لعرض معلومات السيرفر
 **❖ ${prefix}move <mention> ➾** لسحب الاشخاص
 **❖ ${prefix}move all  ➾** لسحب كل الناس لروم الموجود انت فيه
 **❖ ${prefix}helprole  ➾ ** لرؤية اوامر الرولات

╔[❖══════════════❖]╗
    MUSIC Commands
╚[❖══════════════❖]╝

 **❖ ${prefix}play <name > <url> ➾** لبدء تشغيل الاغنيه
 **❖ ${prefix}join  ➾ **لادخال البوت للروم
 **❖ ${prefix}stop ➾ ** لايقاف الاغنيه
 **❖ ${prefix}skip ➾ **لتخطي الاغنيه الحاليه
 **❖ ${prefix}np ➾ **لمعرفة الاغنيه المشغله الان
 **❖ ${prefix}queue  ➾** لمعرفة قآئمة التشغيل
 **❖ ${prefix}pause ➾** لايقاف الاغنيه مؤقتا
 **❖ ${prefix}resume ➾** لاتشغيل الاغنيه المتوقفه




`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
      if (!id.includes(message.author.id)) return;
 message.author.sendMessage(`




 ╔[❖═══════════════❖]╗
    **PRIVET Commands**
 ╚[❖═══════════════❖]╝

 **❖ ${prefix}setplaying ➾ **لتغير الحاله لplaying

 **❖ ${prefix}setwatching  ➾** لتغير الحاله لWATCHING

 **❖ ${prefix}setliste  ➾ **لتغير الحاله ل LISTENING

 **❖ ${prefix}setstrem  ➾ **لتغير الحاله لSTREMING

 **❖ ${prefix}setname  ➾ **لتغير اسم البوت

 **❖ ${prefix}setavatar  ➾ **لتغير صورة البوت


`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
      if (!owner.includes(message.author.id)) return;
 message.author.sendMessage(`

 ╔[❖═══════════════❖]╗
       **Owner**
 ╚[❖═══════════════❖]╝

   ${prefix}acs

   ${prefix}pbc <user> -

   ${prefix}setvoice <room menchin> -

   ${prefix}deleteall -

   ${prefix}data

`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
 message.channel.send('**The Message Was Sent On Private**');
    }
});
//comand-adminsserver
 //members
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='.member')
	      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      var IzRo = new Discord.RichEmbed()
      .setFooter(message.author.username)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);

    });
//role-command
client.on("message", message => {
	var prefix = ".";
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return ;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		}
	}
});
client.on('message', message => {
            if (message.content.startsWith( prefix + "helprole")) {
		    if (!message.member.hasPermission('MANAGE_ROLES')) return ;

     let embed = new Discord.RichEmbed()
.setDescription(`**اوامر الرولات**
ــــــــــــــــــــــــــــــــــــــــــــــــــ`)
.addField('     **!role <mention> <role name>** ' ,' **لاعطاء الرتبه للشخص** ')
.addField('     **!roleRemove <mention> <role name>** ' ,' **الأيزالة الرتبه** ')
.addField('     **!role humans <role name>** ' ,' **لعطاء الاشخاص رتبه** ')
.addField('     **!role bots <role name>** ' ,' **لعطاء البوتات رتبه** ')
.addField('     **!role all <role name> ** ' ,' **لاعطاء رتبه للكل** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
//server-data
client.on('message', function(msg) {
    if(msg.content.startsWith ('!server')) {
	    	if(!msg.member.hasPermission('MANAGE_SERVER')) return msg.channel.send(':X:** | هذي الخاصيه للاداره فقط**');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
//warn

//set-server-avatar
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '.';

    if(cmd === `${prefix}تغير صورة السيرفر`) {
	    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        if(!args[1].match(/^(jpeg|jpg|png)/)) {
            message.guild.setIcon(args[1]).then(message.channel.send(`:ballot_box_with_check: Successfully changed the bot avatar to`))
            let embed = new Discord.RichEmbed()
            .setImage(args[1])
            message.channel.send(embed)
        }
    }
});
//setvoice-online
client.on('message',async message => {
  if(message.content.startsWith(prefix + "روم فويس")) {
  if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`.Jac Online :[${message.guild.members.filter(m => m.voiceChannel).size}]`)
    },1000);
  });
  }
});
//privet-commands

//comand-memberserver
//id
client.on('message', message => {
   if (message.content === ".id") {
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

client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = ".";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'c-invites')) {
let guild = message.guild
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
//link
  // Your Avatar URL!
client.on('message', message => {
    if (message.content === ".av") {
	message.channel.send( `${message.author.username} avatar URL: ${message.author.avatarURL}`);
    }
});
  // Avatar Server URL!
client.on('message', message => {
    if (message.content === ".avs") {
    message.channel.send( `${message.guild.name} رابط الصورة : ${message.guild.iconURL}`);
    }
});
//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 1');
            }
});
//الردود بصوره


client.login(process.env.BOT_TOKEN);
