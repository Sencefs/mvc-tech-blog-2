const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'weewooweewoo',
    email: 'westleywoo0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'fmstereoguy',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'igomahl59',
    email: 'iggiemahl2@last.fm',
    password: 'password123'
  },
  {
    username: 'distantmemoryyy',
    email: 'cindychu3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'spoonty',
    email: 'gastyu4@weather.com',
    password: 'password123'
  },
  {
    username: 'rosettarigor',
    email: 'rosier5@imdb.com',
    password: 'password123'
  },
  {
    username: 'chellybelly',
    email: 'chelty6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'chriscoto',
    email: 'chocoto7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'jeb',
    email: 'jebrius8@google.ru',
    password: 'password123'
  },
  {
    username: 'jt519',
    email: 'justintrang9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
