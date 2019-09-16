const express = require('express');

const router = express.Router();
const Website = require('../models/website')

router.get('/', async (req, res) => {
	await Website.find()
    .then( response => {
      res.status( 200 ).json( response )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
});


router.post('/add', async (req, res) => {
	try {
		const website = await Website.create(req.body);
		return res.send({ website });
	} catch (err) {
		return res.status(400).send({ error: 'Resgistration failed' })
	}
});

module.exports = app => app.use('/', router);