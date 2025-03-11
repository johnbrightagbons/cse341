// Create Database Connection
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// Get all contacts
// swagger.tags = ['Contacts'];
const getAllContacts = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};


// Get Single Contact
// swagger.tags = ['Contacts'];
const getSingleContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

// Create Contact
// swagger.tags = ['Contacts'];
const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favouriteColour: req.body.favouriteColour,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);
    if (result.acknowledged) {
        res.status(201).json({ message: 'Contact created successfully' });
    }
    else {
        res.status(500).json({ message: 'Failed to create contact' });
    }
};

// Update Contact
// swagger.tags = ['Contacts'];
const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favouriteColour: req.body.favouriteColour,
        birthday: req.body.birthday,
    }
    const result = await mongodb.getDatabase().db().collection('contacts').updateOne({_id: contactId}, {$set: contact});
    if (result.modifiedCount >0) {
        res.status(200).json({ message: 'Contact updated successfully' });
    }
    else {
        res.status(500).json({ message: 'Failed to update contact' });
    }
};

// Delete Contact
// swagger.tags = ['Contacts'];
const deleteContact = async (req, res) => {  
  const contactId = new ObjectId(req.params.id);
      const result = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: contactId});
           if (result.deletedCount > 0) {   
     res.status(200).json({ message: 'Contact deleted successfully' });
  } 
  else {    
    res.status(404).json({ message: 'Failed to delete contact' });
  }
}

// Import
module.exports = {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
};