// Declare a constant variable named express and set it equal to require('express').
const express = require('express');

// Declare a constant variable called mongodb and set it equal to require from database in data folder.
const mongodb = require('./data/database');

// Declare a constant variable named app and set it equal to express().
const app = express();

// Declare a port variable and set it equal to 3000 to run the app
const port =process.env.PORT || 3000;

// Routes set up
app.use('', require ('./routes'));

// Connect to the database using mongodb function
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        // Start the app
        app.listen(port, () => {
            console.log(`Database is Listening and Node is Running on Port ${port}`);
        });
    }
});