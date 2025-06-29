// Import Library
    const express = require("express");
    const session = require('express-session');
    const flash = require('connect-flash');
    require("dotenv").config();

// Import Files
    const eventRouter = require('./routes/event.routes');

// Callback Databasse
    const db = require('./config/database');

// Callback Express Function
    const app = express();

// body-parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

// Bring ejs Template
    app.set("view engine", "ejs");

// Bring Static Pages
    app.use('/assets',express.static('assets'));
    app.use(express.static('node_modules'));

// Session
    app.use(session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 60000 * 10}
    }));

// Flash
    app.use(flash());

// Router
    app.use('/', eventRouter);

// Servers
    // Bring Variable From .env
        const port = process.env.PORT || 3000;
    
    // Run Server
    app.listen(port, (err)=> {
        if(err){
            console.log(err);
        }else {
            console.log(`Event App is Listen on Port: ${port}`);
        }
    });

