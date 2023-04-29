const { program } = require('commander');
const moment = require('moment'); // 오늘 날짜 가져오기 

program
  .version('1.0.0')
  .description('Displays today\'s date')
  .parse(process.argv); // 프로그램 실행 시 전달된 인자들을 파싱할 목적

const today = moment().format('YYYY-MM-DD');  // 컴활때 한 것 같은 느낌? 
console.log(today);
