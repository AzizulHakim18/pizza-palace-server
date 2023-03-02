const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51MgoJaFdccroNVyp1HW3k0DXpcD9i8LlcvXYL34cBl2n4ZSm7Q06KuA0B879rMnqneg4cUzMKBd8r0wJLNJzztO300fSQ0Z37z')
const { v4: uuidv4 } = require('uuid');
const Order = require('../orderMode')



router.post('/placeorder', async (req, res) => {


    const { token, subTotal, currentUser, cartItems } = req.body

    try {

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subTotal * 100,
            currency: "BDT",
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {

            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subTotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id

            })

            neworder.save()
            res.send('order pays successfully')
        }
        else {
            res.send('payment failed')
        }

    } catch (error) {
        return res.status(400).json({ message: "somethng went wrong" + error })
    }


});


router.get("/placeorder", async (req, res) => {
    try {
        const placeOrders = await Order.find({})
        res.send(placeOrders)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});





router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body
    try {
        const orders = await Order.find({ userid: userid })
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' })
    }
})
// router.get("/getuserorders", async (req, res) => {
//     try {
//         const placeOrders = await Order.find({})
//         res.send(placeOrders)
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// });


module.exports = router