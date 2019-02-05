// npm init -y
// npm install express

let express = require('express');
let app = express();
console.log('server');

app.use(express.static('server/public'));

app.listen(5000, function() {
    console.log('Running on port 5000')
});