const express = require('express');
const app = express();
const path = require("path")

const {Pool} = require("pg")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const pg1 = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'Practice1',
  });

  pg1.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

  module.exports = pg1


