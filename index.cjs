const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('dist'));

app.listen(7771, () => {
    console.log('Server Started 7771')
})
