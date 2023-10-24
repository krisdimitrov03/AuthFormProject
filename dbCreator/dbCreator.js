const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'authprojectuser',
    password: 'Auth@ProjectUser23'
})

const CreateDbQuery = 'CREATE DATABASE authformdb';

const UseDbQuery = 'USE authformdb';

const CreateTableQuery =
`
CREATE TABLE Users
(
  Id int NOT NULL,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  PasswordHash varchar(255) NOT NULL,
  PRIMARY KEY (Id)
)
`;

connection.query(CreateDbQuery, (err) => {
    if(err) {
        console.log('Error: ', err);
    } else {
        console.log('Database created successfully');
    }
});
connection.query(UseDbQuery, (err) => {
    if(err) {
        console.log('Error: ', err);
    }
});
connection.query(CreateTableQuery, (err) => {
    if(err) {
        console.log('Error: ', err);
    } else {
        console.log('Table Users created successfully');
    }
});

connection.end();