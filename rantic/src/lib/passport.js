const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('./helper');

/**
 * Metodo del Login
 */
passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    const {email} = req.body;
    const testEmail = {
        email
    };
    console.log(testEmail)
    console.log(password)
    
    const rows = await pool.query('SELECT * FROM accounts WHERE email = ?', [testEmail.email]);
    
    console.log(rows);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword){
            done(null, user, req.flash('success', 'Welcome!'));
        } else{
            done(null, false, req.flash('message', 'Incorrect password'));
        }
    } else{
        return done(null, false, req.flash('message', 'Email not found'));
    }
}));

/**
 * Metodo de Register User
 */
passport.use('local.signup', new LocalStrategy ({
    usernameField: 'username',
    passwordField: 'password',
    emailField: 'email',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const {email} = req.body;
    const newUser = {
        username,
        password,
        email
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO accounts SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) =>{
    const rows = await pool.query('SELECT * FROM accounts WHERE id = ?', [id]);
    done(null, rows[0]);
});