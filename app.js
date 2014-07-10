var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var home = [], school = [], play = [];

var option = prompt("Is this TO DO a (p)lay, (h)ome, (s)chool or (q)uit? ");

while(option != 'q') {
  if (option === 'p') {
      playDo = prompt("What TO DO for fun? ");
      play.push(playDo);
      option = prompt("Is this TO DO a (p)lay, (h)ome, (s)chool or (q)uit? ");
  } else if (option === 'h') {
      homeDo = prompt("What TO DO at Home? ");
      home.push(homeDo);
      option = prompt("Is this TO DO a (p)lay, (h)ome, (s)chool or (q)uit? ");
 }  else if (option === 's') {
      schoolDo = prompt("What TO DO at school? ");
      school.push(schoolDo);
      option = prompt("Is this TO DO a (p)lay, (h)ome, (s)chool or (q)uit? ");
 }
}
console.log(chalk.blue("This is your TO DO List for Home: " + home));
console.log(chalk.red("This is your TO DO List for Play: " + play));
console.log(chalk.green("This is your TO DO List for School: " + school));
