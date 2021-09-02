
const express = require('express');
const app = express()

app.use(express.static('./dist/angular-tour-of-heroes'));

app.get('/*', function(req, res) {
	res.sendFile('index.html', {root: 'dist/angular-tour-of-heroes/'});
});

app.listen(process.env.PORT || 8080);