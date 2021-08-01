const Author = require("../models/author.model.js");
const Customer = require("../models/author.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const author = new Author({
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName
      });
    
      Author.create(author, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};

exports.findAll = (req, res) => {
    Author.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
  
};

exports.findOne = (req, res) => {
    Author.findById(req.params.authorID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.authorID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.authorID
            });
          }
        } else res.send(data);
      });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Author.updateById(
        req.params.authorID,
        new Author(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.authorID}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Customer with id " + req.params.authorID
              });
            }
          } else res.send(data);
        }
      );
};

exports.delete = (req, res) => {
    Author.remove(req.params.authorID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.authorID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.authorID
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

exports.deleteAll = (req, res) => {
    Author.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
};