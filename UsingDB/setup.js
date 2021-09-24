const config = require('./config')
const chalk = require('chalk')
const sqllite3 = require('sqlite3').verbose()

//creating a database
const db = new sqllite3.Database(config.databaseName)

//create the table
//serialize the sql statement
db.serialize(()=>{
    //create the statement
    const stmt = `CREATE TABLE ${config.tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, author TEXT, post TEXT)`
    //run the statement
    db.run(stmt, (err)=>{
        if(err){
            console.log(chalk.red('An ERROR occured while creating database', err))
        }else {
            console.log(chalk.green.inverse('DB Created OK'));
        }
    });
});

