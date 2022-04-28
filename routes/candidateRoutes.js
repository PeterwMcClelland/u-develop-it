const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  router.get('/candidate/:id', (req, res) => {});

  router.post('/candidate', ({ body }, res) => {});

  router.put('/candidate/:id', (req, res) => {});

  router.delete('/candidate/:id', (req, res) => {});

  module.exports = router;