
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const medidasRoutes = require('./routes/medidasRoutes');

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }))

app.use("/api/medidas", medidasRoutes);




app.listen(port, () => {
    console.log('http://localhost:' + port);
})

