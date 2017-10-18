var notes = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes',notes.show);
    app.post('/notes',notes.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./anonymous-notes/dist/index.html"));
    });
}