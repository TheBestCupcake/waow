const express = require('express');
const app = express();

const port = process.env.PORT || 3000

const videoRoutes = require("./routes/videoRoutes")

app.use(express.json());

//app.get(), app.post(), app.put(), app.delete()

app.use('/Anime', videoRoutes);


app.listen(port, () => console.log(`Listening on ${port}.`));