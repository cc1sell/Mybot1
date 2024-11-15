const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AGERQZRR#yMMpsHaJr583HNdGKbN-jFR8-0CVDHUOUh0NFavBbQw",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
ANTI_LINK: process.env.ANTI_LINK ||"",
ANTI_BAD_WORDS: process.env.ANTI_BAD_WORDS || "",
ANTI_BOT: process.env.ANTI_BOT || "",
 
};
