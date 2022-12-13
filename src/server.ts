import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3890;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const siteData = {
	appTitle: 'Tech Book Club',
	pages: [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Info',
			path: '/info'
		}
	]
}

app.get('/', (req: express.Request, res: express.Response) => {
	res.render('index', {siteData, currentPath: '/'});
});

app.get('/info', (req: express.Request, res: express.Response) => {
	res.render('info', {siteData, currentPath: '/info'});
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});