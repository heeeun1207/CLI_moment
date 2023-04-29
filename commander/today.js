const { program } = require('commander');
const moment = require('moment');

program
  .version('1.0.0')
  .description('Displays today\'s date')
  .parse(process.argv);

const today = moment().format('YYYY-MM-DD');
console.log(today);
