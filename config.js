const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net",
ANTI_LINK: process.env.ANTI_LINK ||"",
ANTI_BAD_WORDS: process.env.ANTI_BAD_WORDS || "",
ANTI_BOT: process.env.ANTI_BOT || "",
 
};
