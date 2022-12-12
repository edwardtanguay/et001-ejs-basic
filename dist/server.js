import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3890;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
const appTitle = 'Tech Book Club';
app.get('/', (req, res) => {
    res.render('index', { appTitle });
});
app.get('/info', (req, res) => {
    res.render('info', { appTitle });
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map