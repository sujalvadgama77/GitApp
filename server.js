const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Welcom to Node Appllication Finally !!!'));
app.listen(port, () => console.log('Server is Runninf on port' + port));