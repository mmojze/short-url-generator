const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log("Database connected at ".magenta.inverse + conn.connection.host.magenta.inverse);
}

module.exports = connectDB;