// Add express
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');


// Add routes
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getSingleContact);
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);


// Export the router
module.exports = router;  // The router is exported so that it can be used in the server.js file