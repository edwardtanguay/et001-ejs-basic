import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3890;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});