
require('dotenv').config();

require('./config/database');


const Review = require('./models/review');



let review, reviews;



Review.find({}).then(console.log);
console.log('Time to CRUD!');