require('dotenv').config();
require('./config/database');

const Review = require('./models/review');
const User = require('./models/user');

const data = require('./data');

const p1 = Review.deleteMany({});
const p2 = User.deleteMany({});

Promise.all([p1, p2])
    .then(function(results) {
        console.log(results);
        return Review.create(data.reviews);
    })
    .then(function(reviews) {
        console.log(reviews);
        return  User.create(data.users);
    })
    .then(function(users) {
        console.log(users);
    })
    .then(process.exit);
