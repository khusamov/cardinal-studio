
import * as Express from 'express';

const app = Express();

app.get('/', (req, res) => {
	res.send('куку');
});

app.listen(3000);