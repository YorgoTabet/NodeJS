const chalk = require('chalk')
const sqllite3 = require('sqlite3').verbose()
const config = require('./config')
const inquirer = require('inquirer')


//setting up the connection
const db = new sqllite3.Database(config.databaseName);

inquirer
.prompt([
    {
        name: 'title',
        message: 'Post Title: '
    },
    {
        name: 'author',
        message: 'Author: '
    },
    {
        name: 'date',
        message: 'Date:',
        default: new Date().toUTCString()
    },
    {
        name: 'post',
        message: 'Blog Content: '
    }
])
.then((answers)=>{
    const {title, author, date, post} = answers;
    // constructing the SQL statement
    const stmt = `INSERT INTO ${config.tableName} (title, author, date, post) VALUES ('${title}','${author}','${date}','${post}') ` ;
    db.serialize(()=>{
        db.run(stmt);
        console.log(chalk.green.inverse('POST WAS ADDED'));
    });
    db.close();
})