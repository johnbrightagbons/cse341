// Declare a constant variable named router and set it equal to require('express').Router().
const router = require('express').Router();

//GET request
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Export the router
module.exports = router;  // The router is exported so that it can be used in the server.js file