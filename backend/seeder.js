const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const users = require('./data/users');
const connectDB = require('./config/db');

dotenv.config();

connectDB();    

const importData = async () => {
  try {
    await User.deleteMany();

    // Use User.create() for each user to trigger pre-save hooks for password hashing
    const createdUsers = [];
    for (const user of users) {
      const createdUser = await User.create(user);
      createdUsers.push(createdUser);
    }

    console.log('Data Imported!');
    console.log(`Admin users created: ${createdUsers.length}`);
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
