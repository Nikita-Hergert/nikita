const sqlite3 = require('sqlite3').verbose();

let lifo = [];

function getEntries(req, res) {

    // TODO get entries from the DB and return them as shown bellow

    // TODO send a meaningfull message
    res.status(200).send({name: lifo[0]})
}

// TODO connection this function so that it can be called from the UI
function postEntries(req, res) {
    const host = req.hostname;
    console.log(`Current body data: ${req.body.data}`);

    lifo[0] = "textField";

    // const db = new sqlite3.Database(':memory:');

    // db.serialize(() => {
    // db.run("CREATE TABLE lorem (info TEXT)");

    // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");

    // // TODO Change the number of iterations
    // for (let i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    // }
    // stmt.finalize();

    // db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    //         console.log(row.id + ": " + row.info);
    //     });
    // });

    // db.close();

    // TODO send a meaningfull message from above
    res.send({post: "testOK"});
}

function deleteEntries(req, res) {

    res.send({todo: "delete the entries"});
}

module.exports = {
    getEntries,
    postEntries,
    deleteEntries,
};