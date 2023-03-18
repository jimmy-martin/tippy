const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const AdminService = require('../services/AdminService');

router.get('/', async (req, res) => {
  try {
    const admins = await AdminService.findAll();
    return res.status(200).json(admins);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const admin = await AdminService.find(req.params.id);
    return res.status(200).json(admin);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const admin = await AdminService.create(req.body);
    return res.status(201).json(admin);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const admin = await AdminService.update(req.params.id, req.body);
    return res.status(200).json(admin);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const admin = await AdminService.delete(req.params.id);
    return res.status(200).json(admin);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

module.exports = router;
