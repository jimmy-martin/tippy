const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const AdminService = require('../services/AdminService');

router.get('/', async (req, res) => {
  try {
    const admins = await AdminService.findAll();
    res.status(200).json(admins);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const admin = await AdminService.find(req.params.id);
    res.status(200).json(admin);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const admin = await AdminService.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const admin = await AdminService.update(req.params.id, req.body);
    res.status(200).json(admin);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const admin = await AdminService.delete(req.params.id);
    res.status(200).json(admin);
  } catch (error) {
    internalServerError(res, error.message);
  }
});

module.exports = router;
