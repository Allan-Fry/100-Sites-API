module.exports = app => {
    const authors = require("../controllers/author.controller.js");

    app.post("/author", authors.create);
    app.get("/authors", authors.findAll);
    app.get("/authors/:authorID", authors.findOne);
    app.put("/authors/:authorID", authors.update);
    app.delete("/authors/:authorID", authors.delete);
    app.delete("/authors", authors.deleteAll);
};