const express = require('express');
const app = express();
const cors = require('cors');

//Used to allow requests from the frontends origin.
app.use(cors({
  origin: 'http://localhost:5173',
}));

const port = process.env.PORT || 3000

const videoRoutes = require("./routes/videoRoutes")

app.use(express.json());

//app.get(), app.post(), app.put(), app.delete()

app.use('/Anime', videoRoutes);


app.listen(port, () => console.log(`Listening on ${port}.`));