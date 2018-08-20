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
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'wlc');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)

         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});






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
//bcrole
client.on('message' , message => {
  var prefix = ".";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
	  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});
//bc-privet
client.on('message', message => {
     if(message.content.startsWith(prefix + "pbc")) {
	if (!owner.includes(message.author.id));
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
            .setFooter(`lol why did i add dis again?`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("DM A Person", `What are you going to say to ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
        .setFooter(`lol.`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
        .setFooter(`Sent by ${message.author.tag}.`);
    user.send({embed: embed1});
}
});
//bc-online
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${argresult}\n `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};
});
//bc-online and ofline
client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'obc') {
		 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);

		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)

		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();


			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);

			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});
//settingchat:!chat-!unmutechat-!hidechat-!showchat
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === ".mutechat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!unmutechat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات ✅")
           });
             }



});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === ".hidechat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false


	   }).then(() => {
               message.reply("تم اخفاء الشات ✅")
           });
             }
if (message.content === ".showchat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.reply("تم اظهار الشات ✅")
           });
             }



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

    if(cmd === `${prefix}تغغير صورة السيرفر`) {
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
  if(message.content.startsWith(prefix + "روم صوت")) {
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
//user
  client.on('message', message => {
    var prefix = "."
var args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'user')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;
let n = d.toLocaleString();
let x;
let y;

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
//invite
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
//short
client.on('message', message => {
	var prefix = ".";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
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


//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith(".data")) {
     if (!owner.includes(message.author.id)) return ;
    message.channel.send({
embed: new Discord.RichEmbed()
  .setColor('RED')
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
       .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
      .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
      .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
   })
  }
});
function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
//adminstratin-id
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;

  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (prefix + "levebot")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.BOT_TOKEN);
