const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, mobile, email } = req.body;
    console.log(`Subscription request received from ${name} for the email: ${email}, mobile number: ${mobile}`);
    res.render('thankyou', { name, mobile, email });
});

module.exports = router;
