const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const TipService = require('../services/TipService');

router.post('/', async (req, res) => {
  try {
    const tip = await TipService.create(req.body);
    return res.status(201).json(tip);
  } catch (error) {
    console.log(error);
    return internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tip = await TipService.update(req.params.id, req.body);
    return res.status(200).json(tip);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

module.exports = router;
