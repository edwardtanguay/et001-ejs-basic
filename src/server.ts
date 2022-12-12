import express from 'express';

const app = express();
const port = 3890;

app.get('/', (req: express.Request, res: express.Response) => {
	req.
	res.send(`
	 	<h1>Home</h1>
		<p>go to the <a href="/info">info page</a></p>
	`);
});

app.get('/info', (req: express.Request, res: express.Response) => {
	req.
	res.send(`
	 	<h1>Info</h1>
		<p>go back <a href="/">home</a></p>
	`);
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});