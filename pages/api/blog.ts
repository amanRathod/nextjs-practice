export{}

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const axios = require('axios');

const link = 'https://blogthese.herokuapp.com/api/v1/user';

export async function GetUserData(req, res) {
  try {
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const users = db.collection('users');
    const user = await users.findOne({ _id: ObjectId(req.params.id) });

    
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.status(200).send(user);
    }


  } catch (err) {
    console.log(err);
  }
}


