const Discord = require('discord.js'); //Ce que le bot à besoin /
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
var prefix = "*"; //Prefix de votre Bot ( *play www.youtube.com/ )


client.login("NjQ0NjM1Mjg1NDEzNDI5Mjg4.Xc25eA.h1AJa4Xbs5W8XBBnyaK-k-pAH2Y"); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => { //Signifie que le bot à bien démarré console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio client.user.setGame("s'Update seul"); //Voir le Jeu sur le Discord
});
