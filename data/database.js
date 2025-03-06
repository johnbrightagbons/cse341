// Create a constant Variable called dotenv and set it equal to require('dotenv').config().
const dotenv = require('dotenv').config();

// create a constant variable called MongoCleint and set it equal to require('mongodb').MongoClient.
const MongoClient = require('mongodb').MongoClient;

// Declare a variable for the database
let database;

// Function to initialize the database connection
const initDb = (callback) => {
    if (database) {
        console.log('Database is Started');
        return callback(null, database); // Return existing database instance
    }

    // Connect to the database using MongoClient
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            database = client; // Store the connected client
            callback(null, database); // Return the connected database
        })
        .catch((err) => {
            callback(err); // Handle connection error
        });
};


const getDatabase = () => {
    if (!database) {
        throw Error('Database is not connected');
    }
    return database
}

// Import the initDb and getDatabase functions 
module.exports = {
    initDb,
    getDatabase
};