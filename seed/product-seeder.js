var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping', {
    useMongoClient: true,
    /* other options */
});

var products = [
    new Product({
        imagePath: 'http://ecsmedia.pl/c/wiedzmin-3-dziki-gon-b-iext37953156.jpg',
        title: 'The Witcher',
        description: 'RPG game',
        price: 50
    }),
    new Product({
        imagePath: 'https://vignette4.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest?cb=20130826184215',
        title: 'GTA V',
        description: 'Real Life Simulation',
        price: 150
    }),
    new Product({
        imagePath: 'https://techfaqs.net/wp-content/uploads/2016/03/234325454.jpg',
        title: 'Need For Speed',
        description: 'Racing game',
        price: 85
    })
];

var done = 0;
for (var i = 0; i< products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}