const chalk = require('chalk')

// We will be exporting this module to be used elsewhere... thus code reusability

function success(message){
    console.log(chalk.green(message));
}
function failed(message){
    console.log(chalk.red(message));
}


module.exports = {
    succeeded: success,
    Failed: failed
}