const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const TableService = require('../services/TableService');

router.get('/', async (req, res) => {
  try {
    const tables = await TableService.findAll();
    res.status(200).json(tables);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const table = await TableService.find(req.params.id);
    res.status(200).json(table);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const table = await TableService.create(req.body);
    res.status(201).json(table);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const table = await TableService.update(req.params.id, req.body);
    res.status(200).json(table);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const table = await TableService.delete(req.params.id);
    res.status(200).json(table);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

module.exports = router;
