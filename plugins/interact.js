const { smd } = require("../lib");

// Command to send a greeting message
smd(
  {
    pattern: "hi", // Command trigger
    react: "👋", // Reaction emoji for the command
    desc: "Greet and introduce the bot", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = "Hey I'm Queen Charity, a multipurpose bot developed by Caseyrhodes to suit your WhatsApp needs , please type ,menu to see the bot menu, made with love by Caseyrhodes, thank you.";
    
    await message.reply(response); // Send the complete message at once
  }
);

smd(
  {
    pattern: "casey", // Command trigger
    react: "🤴", // Reaction emoji for the command
    desc: "Greet and introduce the owner", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = "The person whom you speak of is my master, my master [ *𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱 SÙPPØRT I* ] is a software engineer who specializes in front end development, for more info about him visit [ maxwellexcel.githu.io/aboutme ] to learn more about my master. to contact him type ,owner and to contact his other colleagues type ,subowner. thank you";
    
    await message.reply(response); // Send the complete message at once
  }
);

// more coming soon
