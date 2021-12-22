export{}

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const axios = require('axios');

const link = 'https://blogthese.herokuapp.com/api/v1/user';

export async function GetUserData() {
  try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQ2MDMwNzE3NTYwZTAyMGNlYWZmMiIsImVtYWlsIjoiZXhhbXBsZTFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyYXRob2QwMDciLCJpYXQiOjE2Mzk4MDI3NDYsImV4cCI6MTYzOTgwOTk0Nn0.Fe3JDe1jMl3dp_oeC5pTQFdPkwfvuc_vtaMgc1RU19k';

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.get(`${link}/user-data`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}


