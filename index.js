const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
var bodyparse = require('body-parser');
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));

app.get('/search/:id', (req , res ) => {
	const body = { 
		usuario: 'jobando' ,
		contrasenya:'obando2019' ,
		company: 'Ingenio montelimar',
		lastregisterID:12723227

	};
 
fetch('http://fuel-service.herokuapp.com/fuel_service', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

	
	return res.send(req.params.id);
});

app.listen(port, () => console.log(`App is online ${port}`));
