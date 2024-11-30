// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ovcGVKRS95ZWM3V3c5Q2hlT1lnSXozeFIvdFhWQ0o5TmtvbjMxZENXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZktzMU4vb01UblUydXQvTFA5a0ZNTElxNGs0Nk9iNXRZV2R5V3pTVzhUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS2lLTnZRdGYvbFZGQzZpRzVaZnkvSFE0cGJUTkVSdGtndjhkY2ExUjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmWmxmdjhTN3NIUEJwTFNoaGliWFQ2aFZwQ3JkbzNKT3hRVnk3Yyt4S3lvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KeEdtZ2hoN3RJdlRNY1hEZzRpTVBxN2cxdndRV3lmNkdjRjAvczRySFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8vS1hGNnlDUUkxZGlRZ3BBSmRtdlFvZGlkQTJjQjJaNnBYS1F3TWxKMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlEV0Z2U3BYMlFQUFN5cXlJTFRaV09PVytGYjhzRWRNZGxEVjlZTnBXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2VVWk55aUlLczdNbzRocDYwSUY3SEJMRXJ1VVhCemRpSFlGR3NidG9oQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tTmpuSG1EUW85M3FDVnJWbU5xdU1DNkRRNm50di9Mb1V4cXdqcGlEZUx1bWt4SlFXVk96c3ZxMkh5b2lUektvVEdnY0d2czVqa1dsanpVNjEvVEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJNbUQwbyt0VnpZMG4xTWxYVGFtTnk5QjdIK3ZaMmpQQ2dGclYwdFVjYXlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4TERHYWg2dVJ5U0Q5UVMxY2hHS093IiwicGhvbmVJZCI6ImQ4Nzc2MjJkLTUyYjctNDZhZi1hZDc0LWQ0ODgwMDdkYmM0ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuOU9TWnkwNUZXWkRvL3pLdTZMa0xvNDlCOEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEFoTzlsbW5kV3ZUdHpGaDlEdjZKbDlNcUZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRNOTZGRDROIiwibWUiOnsiaWQiOiIyNTQ3MTMxNDU2MTg6NzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLNjNNRUZFTnVsckxvR0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBpZ1d3b0pRK1ZKNlc0WlMrdDV6Z2hzb1FkZ3JwdDVSWmljeEJiVUM4dzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh5eEJwR2dabE1jV3NqbUpRdUs2eGZ2RG9MZ2hiRmYzSVZFYWRXRWJBNlk3WnVyWW05NERlTmgyckQwSFpDbE9SZEpCNFN2VllROXhLNEJjQytNY0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1dUpsUHcvR2x2TXJUMmtaSUNtOE1sOHZEdG9BSE5qQVBQRUhaRHUwMjl4K2NuQUJRSXpLNkdMczhsUTR1SVBJaDNjOHYyb2RrcElweHhoWDl2Zi9EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMzE0NTYxODo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNG9Gc0tDVVBsU2VsdUdVdnJlYzRJYktFSFlLNmJlVVdZbk1RVzFBdk1QIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyOTczMjg5fQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Ongeri 💜",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254713145618",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
