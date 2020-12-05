"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { handleJoke } = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set("view engine", "ejs")

  // endpoints
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "working" });
  })
  .get("/joke/:type", async (req, res) => {
    try {
      const joke = await handleJoke(req.params.type);
      res.send({data: joke});
      res.status(200).json({ status: 200, data: joke });
      
    } catch (err) {
      res.status(404).json({ status: 404, err: "Joke Not Found" });
      console.log(err, "Error");
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
