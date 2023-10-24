// import dbConfig from './dbConfig.js';
// import { insertUser } from './queryConstants.js';
// import {createRequire} from 'module'
// const require = createRequire(import.meta.url);

// // import {createHash, randomUUID} from '../node_modules/crypto';
// const mysql = require('node_modules/mysql2');

// const pool = mysql.createConnection(dbConfig);

// export const createUser = (firstName, lastName, email, password) => {
//     const id = randomUUID();
//     const passwordHash = createHash(password);

//     let result;

//     connection.query(
//         insertUser(id, firstName, lastName, email, passwordHash),
//         (error) => result = !error
//     );

//     return result;
// }