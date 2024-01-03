const sql = require("../db/db.js");
const express = require("express");
const router = express.Router();

// GET All
 router.get("/customers/getAll", async (req, res, next) => {
    sql.query("SELECT * FROM customers", function (err, data, fields) {
      console.log(err, data);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ data });
    });
   });

   // GET One of customers
   router.get("/customers/:id", async(req, res) => {

    sql.query(
      "SELECT * FROM customers WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {

        // console.log(err, data);
        if (err) return res.json({ error: err.sqlMessage });
        else return res.json({ data });
       
      }
    );
   });


   // Create
   router.post("/customers/post", async (req, res) => {
    const values = [
              req.body.first_name,
              req.body.last_name,];

              console.log("VALUES IN ROUTER ==V")
              console.log(values);

    // console.log("insert", values);
    // console.log(`request => ${JSON.stringify(req.body,null,2)}`);
    sql.query(
      `INSERT INTO customers (first_name, last_name) VALUES(?)`,
      [values],
      function (err, data, fields) {
        //console.log(err, data);
        if (err) return res.json({ error: err.sqlMessage });
        else return res.json({ data });
      }
    );
   });


   // Update
   router.put("/customers/update/:id", async (req, res) => {
    const values = [
      req.body.first_name,
      req.body.last_name,
      req.body.id,
      ];

      console.log("update", values);
    sql.query(
      `UPDATE customers SET first_name=?, last_name=? WHERE id=?`,
      values,
      function (err, data, fields) {
        console.log(err, data);
        if (err) return res.json({ error: err.sqlMessage });
        else return res.json({ data });
      }
    );
   });

   // Delete
   router.delete("/customers/delete/:id", async (req, res) => {
    const sqlQ = "DELETE FROM customers WHERE id=?";
    const id = req.params.id;
    sql.query(sqlQ,id,
      function (err, data) {
        console.log("DELETE ERROR");
         console.log(err, data);
        if (err) return res.json({ error: err.sqlMessage });
        else return res.json({ data });
      }
    );
   });

   module.exports = router;