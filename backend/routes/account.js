const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { User, Account } = require("../database/db");
const zod = require("zod");
const { default: mongoose } = require("mongoose");
const accountRouter = express.Router();

const sendMoneyBody = zod.object({
    to: zod.string(),
    amount: zod.number()
})

accountRouter.post("/sendmoney", authMiddleware, async (req, res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const { to, amount } = req.body;
    const { success } = sendMoneyBody.safeParse({ to, amount });
    if (!success || amount===0){
        await session.abortTransaction();
        return res.status(411).json({
            msg: "Incorrect(to, amount) inputs"
        })
    }
    // debit
    const fromAccount = await Account.findOne({
        userId: req.userId
    }).session(session);
    if (!fromAccount || fromAccount.balance<amount){
        await session.abortTransaction();
        return res.status(411).json({
            msg: "Insufficient balance"
        })
    }
    const debitedAccount = await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session);
    // credit
    const toAccount = await Account.findOne({
        userId: to
    }).session(session);
    if (!toAccount){
        await session.abortTransaction();
        return res.status(411).json({
            msg: "Incorrect(to) inputs"
        })
    }
    const creditedAccount = await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session);
    session.commitTransaction();
    res.json({
        msg: "Transaction successful"
    })
})

accountRouter.get("/balance", authMiddleware, async (req, res)=>{
    const userId = req.userId
    const userAccount = await Account.findOne({
        userId
    })
    const balance = userAccount.balance;
    res.json({
        balance
    })
})

module.exports = accountRouter;