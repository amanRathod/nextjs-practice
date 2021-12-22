export{}
const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const connect = await mongoose.connect(process.env.mongodburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected ${connect.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
