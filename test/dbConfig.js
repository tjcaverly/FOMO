/*     
In your dbConfig folder, create a file called "dbConfig.js", copy-paste the 2 lines below to that file   
AND, change the 'username' to whatever your username for your mac    
*/   
var dbUrl = process.env.DATABASE_URL || 'postgres://trevorcaverly:@localhost/polartigertesting';   
module.exports=dbUrl;    
