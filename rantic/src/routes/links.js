const express = require('express');
const router = express.Router();
const pool = require('../database');
const {isLoggedIn} = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('links/add');
})

router.post('/add', isLoggedIn, async (req, res)=>{
    const {description}= req.body;
    const newOrder = {
        description,
        id: req.user.id
    };
    await pool.query('INSERT INTO orders SET ?', [newOrder]);
    req.flash('success', 'Order added');
    res.redirect('/links');
})

router.get('/', isLoggedIn, async(req, res)=>{
    const order = await pool.query('SELECT * FROM orders');
    res.render('links/list', {order: order});
});

router.get('/delete/:orderID', isLoggedIn, async (req, res) => {
    const {orderID} = req.params;
    await pool.query('DELETE FROM orders WHERE orderID = ?', [orderID]);
    req.flash('success', 'Order removed successfully');
    res.redirect('/links');
});

router.get('/edit/:orderID', isLoggedIn, async (req,res) =>{
    const {orderID} = req.params;
    const order = await pool.query('SELECT * FROM orders WHERE orderID = ?', [orderID]);
    console.log(order[0]);
    res.render('links/edit', {order: order[0]});
});

router.post('/edit/:orderID', isLoggedIn, async (req,res) =>{
    const {orderID} = req.params;
    const {description} = req.body;
    const newDescription = {
        description
    };
    await pool.query('UPDATE orders SET ? WHERE orderID = ?', [newDescription, orderID]);
    req.flash('success', 'Order updated successfully');
    res.redirect('/links');
});

module.exports = router;