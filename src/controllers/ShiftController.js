const express = require('express');
const router = express.Router();
const { internalServerError } = require('../utils/error');

const ShiftService = require('../services/ShiftService');

router.get('/', async (req, res) => {
  try {
    const shifts = await ShiftService.findAll();
    return res.status(200).json(shifts);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/:id/tips', async (req, res) => {
  try {
    const tips = await ShiftService.findTips(req.params.id);
    const totalTips = await ShiftService.getTotalTipsAmount(req.params.id);
    return res.status(200).json({ tips, totalTips: totalTips._sum.amount });
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/:id/users', async (req, res) => {
  try {
    const users = await ShiftService.findUsers(req.params.id);
    return res.status(200).json(users);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const shift = await ShiftService.find(req.params.id);
    const totalTips = await ShiftService.getTotalTipsAmount(req.params.id);
    return res.status(200).json({ ...shift, totalTips: totalTips._sum.amount });
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const shift = await ShiftService.create(req.body);
    return res.status(201).json(shift);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/:id/add/:user_id', async (req, res) => {
  try {
    const shift = await ShiftService.addUser(req.params.id, req.params.user_id);
    return res.status(200).json(shift);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.post('/:id/remove/:user_id', async (req, res) => {
  try {
    const shift = await ShiftService.removeUser(
      req.params.id,
      req.params.user_id
    );
    return res.status(200).json(shift);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const shift = await ShiftService.update(req.params.id, req.body);
    return res.status(200).json(shift);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const shift = await ShiftService.delete(req.params.id);
    return res.status(200).json(shift);
  } catch (error) {
    return internalServerError(res, error.message);
  }
});

module.exports = router;
