const express = require('express');
const bodyParser = require("body-parser")

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
const {getTransactions,addTransactions,deleteTransactions } = require('../controllers/transactions')
router.route('/')
     .get(getTransactions)
     .post(addTransactions)

router.route('/:id')
     .delete(deleteTransactions);

module.exports =  router;