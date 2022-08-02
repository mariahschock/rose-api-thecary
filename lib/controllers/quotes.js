const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .post('/', async (req, res) => {
    const quote = await Quote.insert(req.body);
    if (req.body.characterIds) {
      await Promise.all(req.body.characterIds.map((id) => quote.addCharacterById(id)));
    }
    res.json(quote);
  });
