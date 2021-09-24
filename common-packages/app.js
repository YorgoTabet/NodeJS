const chalk = require('chalk')
const axios = require('axios')
const commander = require('commander')

console.log(chalk.red.inverse('an error has occured'));

//comander allows us to handle command line arguments

commander
.option('-n --number <number>', 'Number of todo')
.parse(process.argv)

console.log(commander.opts('-n'));

//axios is used to do http requests and receive or send data via HTTP

axios.get(`https://jsonplaceholder.typicode.com/todos/${commander.opts('-n').number}`)
.then((value)=>{
    console.log(value.data)
})
.catch(err =>{
    console.log(chalk.red.inverse('Error occured'));
});
