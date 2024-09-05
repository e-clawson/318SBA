//main file 

const express = require("express");
const app = express();
const port = 3000;

const plants = require("./data/plants");
const zones = require("./data/zones");
const classification = require("./data/classification");
