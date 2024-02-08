const express = require("express");
const userRouter = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User, Account } = require("../database/db");
const { default: mongoose } = require("mongoose");
const { authMiddleware } = require("../middleware/middleware");

const signupBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

userRouter.post("/signup", async (req, res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const { success } = signupBody.safeParse(req.body);
    if (!success){
        await session.abortTransaction();
        return res.status(411).json({
            msg: "Entered inputs are wrong"
        })
    }
    const existingUser = await User.findOne({
        email: req.body.email
    }).session(session);
    if (existingUser){
        await session.abortTransaction();
        return res.status(411).json({
            msg: "email already used"
        })
    }
    const createdUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    const createdAccount = await Account.create({
        userId: createdUser._id,
        balance: Math.floor(Math.random()*10000+1)
    });
    const token = jwt.sign({
        userId: createdUser._id
    }, JWT_SECRET);

    await session.commitTransaction();

    res.json({
        msg: "Signup successful",
        token: token
    })
})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

userRouter.post("/signin", async (req, res)=>{
    const { success } = signinBody.safeParse(req.body);
    if (!success){
        return res.status(411).json({
            msg: "Input entered are in wrong format"
        })
    }
    const existingUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (!existingUser){
        return res.status(411).json({
            msg: "Entered email/password are wrong"
        })
    }
    const token = jwt.sign({
        userId: existingUser._id
    }, JWT_SECRET);
    return res.json({
        msg: "Signin successful",
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

userRouter.put("/update", authMiddleware, async (req, res)=>{
    const user = await User.findOne({
        _id: req.userId
    })
    const { success } = updateBody.safeParse(req.body)
    if (!success){
        res.status(411).json({
            msg: "Incorrect Inputs"
        })
    }
    const userDataUpdate = await User.updateOne({
        _id: req.userId
    }, {
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    res.json({
        msg: "Data Updated"
    })
})

userRouter.get("/users", authMiddleware, async (req, res)=>{
    const filter = req.query.search || "";
    const users = await User.find({
        $or: [{
            firstName: {'$regex': filter}
        }, {
            lastName: {'$regex': filter}
        }],
        $nor: [{
            _id: req.userId
        }]
    });
    res.json({
        users: users.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = userRouter;