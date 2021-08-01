const sql = require("../db.js");


const Author = function(author) {
    this.authorID           = author.authorID;
    this.authorFirstName    = author.authorFirstName;
    this.authorLastName      = author.authorLastName
};

Author.create = (newAuthor, result) => {
    sql.query("INSERT INTO authors SET ?", newAuthor, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created author: ", { id: res.insertId, ...newAuthor });
      result(null, { id: res.insertId, ...newAuthor });
    });
  };

  Author.findById = (ID, result) => {
    sql.query(`SELECT 	
                        authorID,
                        authorFirstName,
                        authorLastName 
                FROM authors 
                WHERE authorID = ${ID}`, 
                (err, res) => {
                                if (err) {
                                    console.log("error: ", err);
                                    result(err, null);
                                    return;
                                }
      if (res.length) {
        console.log("found author: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  
  Author.getAll = result => {
    sql.query(`SELECT 
                        authorID,
                        authorFirstName,
                        authorLastName  
                FROM authors`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Author: ", res);
      result(null, res);
    });
  };
  
  Author.updateById = (id, author, result) => {
    sql.query(
      `UPDATE authors 
        SET 
            authorFirstName = ?, 
            authorLastName = ?
        WHERE authorID = ?`,
      [author.authorFirstName, author.authorLastName, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated author: ", { id: id, ...author });
        result(null, { id: id, ...author });
      }
    );
  };
  
  Author.remove = (id, result) => {
    sql.query("DELETE FROM authors WHERE authorID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted author with id: ", id);
      result(null, res);
    });
  };
  
  Author.removeAll = result => {
    sql.query("DELETE FROM authors", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} authors`);
      result(null, res);
    });
  };
  
  module.exports = Author;