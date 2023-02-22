const express = require('express');
const Transaction = require('../models/Transaction');

exports.getTransactions = async (req,res,next)=>{
    try{
        console.log("reqqqqq");
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    }
    catch(er){
        res.status(501).json(er.message);
    }
}


exports.addTransactions = async (req,res,next)=>{
    try{
    const {text , amount} = req.body;
    const transaction = await Transaction.create(req.body);
    res.status(201).json(`transaction added`);
    }
    catch(er){
        res.status(501).json(er.message);
    }
} 


exports.deleteTransactions = async (req,res,next)=>{
try {
    const transaction = await Transaction.findById(req.params.id);
    console.log(req.params.id);
    if(!transaction){
     return res.status(404).json(`not found`)
    }
    await transaction.remove();
    res.status(201).json(`transaction removed`);
}
catch(er){
    res.status(501).json(`nooootttt`);
}
}