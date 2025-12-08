const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

// Admin credentials - Update these as needed
const users = [
  {
    name: 'Admin User',
    email: 'speshwaysspl@gmail.com',
    password: 'speshway@2017',
    role: 'admin',
  },
  {
    name: 'Super Admin',
    email: 'ct9308478@gmail.com',
    password: 'Super@123',
    role: 'admin',
  },
  {
    name: 'Administrator',
    email: 'srikanthsiddani97@gmail.com',
    password: 'Sri@2025',
    role: 'admin',
  },
  {
    name: 'HR Manager',
    email: 'ramspeshway@gmail.com',
    password: 'Ram@2025',
    role: 'hr',
  },
];

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
    console.log('\nAdmin Login Credentials:');
    console.log('Email: admin@speshway.com');
    console.log('Password: Admin123!');
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