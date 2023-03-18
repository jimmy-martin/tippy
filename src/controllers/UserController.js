const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const UserService = require('../services/UserService');

router.get('/', async (req, res) => {
  try {
    const users = await UserService.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/kitchen', async (req, res) => {
  try {
    const users = await UserService.findAllKitchen();
    return res.status(200).json(users);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/service', async (req, res) => {
  try {
    const users = await UserService.findAllService();
    return res.status(200).json(users);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await UserService.find(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/inactive/:id', async (req, res) => {
  try {
    const user = await UserService.setInactive(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await UserService.update(req.params.id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await UserService.delete(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

module.exports = router;
