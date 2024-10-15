const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/eypz/1727903040279_XEWG3FC67.png",
ALIVE_MSG: process.env.ALIVE_MSG || " *OREKI-XD ALIVE🌸*\n\n*Owner:* Wizzkid\n\n_Nothing Is Impossible. Motivate Your Own Self🙈_ ",
OWNER_NAME: process.env.OWNER_NAME || "𝐖𝐢𝐳𝐳𝐤𝐢𝐝",
MENU: process.env.MENU || "https://ironman.koyeb.app/ironman/anime/waifu?type=long_hair",
BOT_NAME: process.env.BOT_NAME || "OREKI-XD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
wait: "⏳",
done: "✅",
fail: "❌"
};
