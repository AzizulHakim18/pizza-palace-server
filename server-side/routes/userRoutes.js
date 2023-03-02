const express = require('express');
const router = express.Router();
const User = require('../userModel')


router.post('/register', async (req, res) => {

    const { name, email, password } = req.body
    const newUser = new User({ name, email, password })

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
        return res.status(400).json({ message: "error" })
    }
});



router.get("/register", async (req, res) => {
    try {
        const registerUsers = await User.find({})
        res.send(registerUsers)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});



router.post('/login', async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.find({ email, password })

        if (user.length > 0) {
            // res.send(user[0])

            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }

            res.send(currentUser);
        }
    } catch {
        return res.status(400).json({ message: "User login Failed" })
    }
})
router.get("/login", async (req, res) => {
    try {
        const loginUsers = await User.find({})
        res.send(loginUsers)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router