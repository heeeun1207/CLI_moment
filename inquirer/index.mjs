import inquirer from 'inquirer';
import moment from 'moment';

const question = [
  {
    type: 'confirm',
    name: 'displayDate',
    message: ' 오늘 요일을 알고 싶어 ? '
  }
];

inquirer.prompt(question).then(answers => {
  if (answers.displayDate) {
    const today = moment().format('dddd'); 
    console.log(today);
  } else {
    console.log('Okay!');
  }
});
//moment().format('MMMM Do YYYY, h:mm:ss a')	April 30th 2023, 3:42:35 pm
// moment().format('dddd')	Sunday
// moment().format("MMM Do YY")	Apr 30th 23
// moment().format('YYYY [escaped] YYYY')	2023 escaped 2023
// moment().format()	2023-04-30T15:42:35+09:00