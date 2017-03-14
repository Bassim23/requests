var request = require('request');
var fs = require('fs');

console.log("Download started");
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        if (response.statusCode === 200) {
         console.log('Response Status Message: ', response.statusCode, response.headers['content-type'], '\n' + "Download completed.")
        } else {
          console.log("Download failed", response.statusCode);
        }
       })
       .pipe(fs.createWriteStream('./future.jpg'));



