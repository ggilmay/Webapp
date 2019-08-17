const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/comments').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

/*console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})*/

