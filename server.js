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

  .get("/joke/:type", async (req, res) => {
    const joke = req.params.type;
    // console.log(typeof joke)
    const parse = await handleJoke(joke)
  
    res.json({
      status: 200,
      data: parse,
    });
  
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
