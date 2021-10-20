const express = require('express')
var nodemailer = require("nodemailer");
const fs=require('fs');
const app = express()
const port = 9093
const Imap = require('imap');
const {simpleParser} = require('mailparser');

var attachedFile, filePath, fileContent;

// IMAP configuration 
// WILL HAVE TO GET CREDS FOR USERS
const imapConfig = {
  user: 'madhav.pradhan30@gmail.com',
  password: 'madhav3009',
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
};

// NODEMALER CONFIGS
var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'madhav.pradhan30@gmail.com',
      pass: 'madhav3009'
    }
  });


const getEmails = () => {
    try {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
      
        if(imap.state != 'authenticated') { 
        imap.connect() 
        }
          
        imap.openBox('INBOX', false, () => {
          imap.search(['UNSEEN', ['SINCE', new Date()], ['SUBJECT','Report For Order']], (err, results) => {
            const f = imap.fetch(results, {bodies: ''});
            f.on('message', msg => {
              msg.on('body', stream => {
                simpleParser(stream, async (err, parsed) => {
                  const {subject,attachments} = parsed;  //textAsHtml, text, from, 
                  fileContent = attachments[0].content;
                  attachedFile = attachments[0].filename;

                  // console.log('content is',fileContent);
                  // console.log('ATTACHEMENT IS',attachments);

                  fs.writeFileSync('Madhav-Result.pdf',fileContent);
                  filePath='/home/madhav/Desktop/Learning/Madhav-Result.pdf'

                  console.log('attachedFile is',attachedFile);
                  console.log('SUBJECT IS',subject);
                  console.log('PATH IS',filePath);
                  
                  var mail = {
                    from: "madhav.pradhan30@gmail.com",
                    to: "madhav@mfine.co",
                    subject: "Sending Email using Node.js",
                    text: "Please See your Result",
                    attachments: [
                        {
                            filename: attachedFile,
                            path:filePath,
                       }
                   ]
                  };
                 sender.sendMail(mail, function(error, info) {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log("Email sent successfully: "
                                   + info.response);
                    }
                  });

                //   fs.unlink(filePath,(err)=>{
                //     if(err){console.log('ERROR');}
                //     else{console.log('DELETED SUCCESSFULLY');}
                // });
                
                  /* Make API call to save the data
                     Save the retrieved data into a database.
                     E.t.c
                  */
                });
              });
              
              msg.once('attributes', attrs => {
                const {uid} = attrs;
                imap.addFlags(uid, ['\\seen'], () => {
                  // Mark the email as read after reading it
                  console.log('Marked as read!');
                });
              });
            });
            f.once('error', ex => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
              console.log('Done fetching all messages!');
              imap.end();
            });
          });
        });
      });
  
      imap.once('error', err => {
          console.log('NOTHING');
      });
  
      imap.once('end', () => {
        console.log('Connection ended');
      });
  
      imap.connect();
    } catch (ex) {
      console.log('an error occurred');
    }
  };
  
getEmails();
  
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
