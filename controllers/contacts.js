// Create Database Connection
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// Get all contacts
const getAllContacts = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};


// Get Single Contact
const getSingleContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

// Import
module.exports = {
    getAllContacts,
    getSingleContact
};