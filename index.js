const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");
const bot = new Discord.Client();

const prefix = '!';

bot.on('ready', () => {
    console.log('!ban everyone.')
    bot.user.setActivity('Hytale and Minecraft 2', {
        type: 'PLAYING'
    }).catch(console.error);
})

bot.on('ready', () => {
    console.log('ZyphBot is now fully functional. Controlling you server just got a lot easier!')
})

bot.on('message', message => {
    if(message.content === "Hello There"){
        message.reply('General Kenobi');
    }
})

bot.on('message', message => {
    if(message.content === "hello there"){
        message.reply('General Kenobi');
    }
})

bot.on('message', message => {
    if(message.content === "Hello there"){
        message.reply('General Kenobi');
    }
})

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    const user = message.mentions.users.first()


    switch(args[0]){
        case 'info':
            if(args[1] === 'author'){
                message.channel.sendMessage('My author is SlumberousCarp2');
            }else{
                message.channel.sendMessage('Invalid argument!');
            }
            break;
        case 'clear':
                if(!args[1]) return message.reply('Error, please start the size of the clear!')
                message.channel.bulkDelete(args[1]);
            break;
        case 'user':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .setThumbnail(message.author.avatarURL)
            .setColor(0xF1C40F)
            message.channel.sendEmbed(embed);
            break;
        case 'kick':
            if(!args[1]) return message.reply('Specify User! Use: `!kick User Reason`')
            if(!args[2]) return message.reply('You must specify the reason! Use: `!kick User Reason`')
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick(args[2]).then(() =>{
                        message.reply(`Successfully kicked ${user.tag}`);
                }).catch(err =>{
                    message.reply(`Unable to kick ${user.tag}`);
                    console.log(err);
                });
            }else{
            message.reply('Didnt find user!')
                }
            }
            break;
        case 'ban':
            if(!args[1]) return message.reply('Specify User! Use: `!ban User Reason`')
            if(!args[2]) return message.reply('You must specify the reason! Use: `!ban User Reason`')
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.ban(args[2]).then(() =>{
                        message.reply(`Successfully banned ${user.tag}`);
                }).catch(err =>{
                    message.reply(`Unable to ban ${user.tag}`);
                    console.log(err);
                });
            }else{
            message.reply('Didnt find user!')
            }
            break;
        }


    }
 
}
)

bot.login(token);