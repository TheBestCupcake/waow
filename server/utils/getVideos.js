const pgp = require('pg-promise')();
const connection = 'postgres://postgres:FishandChips69@localhost:5432/waowerbase';
const db = pgp(connection);




async function dbGetVideoByName(name) {
    try{
        console.log(name);
        const video = await db.one(`SELECT * FROM videos WHERE name = '${name}'`, [true]);
        return video;
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