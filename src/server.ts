import express from 'express';
import path from 'path';
import axios from 'axios';
import fetch from 'node-fetch';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3890;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));


const url = 'https://edwardtanguay.vercel.app/share/techBooks.json';
// const books = (await axios.get(url,{ headers: { 'Accept-Encoding': 'application/json' } })).data; // axios bug fix
const books:any = await (await fetch(url)).json();

const siteData = {
	appTitle: 'Tech Book Club',
	pages: [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Books',
			path: '/books'
		}
	],
	books
}

app.get('/', (req: express.Request, res: express.Response) => {
	res.render('index', { siteData, currentPath: '/' });
});

app.get('/books', (req: express.Request, res: express.Response) => {
	res.render('books', { siteData, currentPath: '/books', idCode: null });
});

app.get('/books/:idCode', (req: express.Request, res: express.Response) => {
	const idCode = req.params.idCode;
	res.render('books', { siteData, currentPath: '/books', idCode, book: books.find((m: any) => m.idCode === idCode) })
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});