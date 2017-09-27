
import * as Path from 'path';
import * as Express from 'express';
import * as Cors from 'cors';

const app = Express();
app.use(Cors());

app.use(Express.static(Path.join(__dirname, 'client')));


app.get('/personnel', (req, res) => {
	const data = [
		{ name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
		{ name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
		{ name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
		{ name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
	];
	res.json({
		items: data
	});
})



const port = 3000;

app.listen(port, none => {
	console.log(`Сервер Кардинал Студио слушает на порту '${port}'.`);
});