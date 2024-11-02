// Setup the server
const express = require('express')
const app =  require('./app.js')
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

