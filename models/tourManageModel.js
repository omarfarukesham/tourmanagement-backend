const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Tour', { useNewUrlParser: true, useUnifiedTopology: true });

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
        enum: ['easy', 'medium', 'difficult']
    },
    // ratingsAverage: {
    //     type: Number,
    //     default: 4.5
    // },
    // ratingsQuantity: {
    //     type: Number,
    //     default: 0
    // },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a summary']
    },
  
});

const Tour = mongoose.model('products', tourSchema);

module.exports = Tour;
