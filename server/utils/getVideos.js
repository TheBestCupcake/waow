const pgp = require('pg-promise')();
const connection = 'postgres://postgres:FishandChips69@localhost:5432/waowerbase';
const db = pgp(connection);




async function dbGetVideoByName() {
    try{
        //Change hardcoded name to ${name} later for dynamic inputs.
        //Needs to use `` as the outside to have JS ${}.
        //Needs to use '' around the name string else database does not connect.
        const video = await db.any(`SELECT * FROM videos WHERE name = 'When Gigi is your Neighbor (A Minecraft Story)'`, [true]);
        console.log("DATABASE REACHED");
        console.log(video);
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbGetAllVideos() {
    try{
        const videoList = await db.any(`SELECT name FROM videos`, [true]);
        return videoList;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}




module.exports = {
    dbGetVideoByName,
    dbGetAllVideos
}