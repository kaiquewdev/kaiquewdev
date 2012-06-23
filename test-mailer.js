var email = require('mailer');

email.send({
    host : "imap.gmail.com",              // smtp server hostname
    port : "25",                     // smtp server port
    domain : "gmail.com",            // domain used by client to identify itself to server
    to : "kaique.developer@gmail.com",
    from : "kaique.developer@gmail.com",
    subject : "node_mailer test email",
    body: "Hello! This is a test of the node_mailer.",
    authentication : "login",        // auth login is supported; anything else is no auth
    username : "kaique.developer@gmail.com",       // Base64 encoded username
    password : "n01s3pl34s3!"        // Base64 encoded password
},
function(err, result){
      if(err){ console.log(err); }
});
