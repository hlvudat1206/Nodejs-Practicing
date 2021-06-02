const mysql = require('mysql');

require('dotenv').config();

module.exports.connectDB = () => {
    return new Promise((resolve, reject)=>{
        const con = mysql.createConnection({
            // host: process.env.DB_HOST ,
            // user: process.env.DB_USER ,
            // password: process.env.DB_PASS ,
            // database: process.env.DB_NAME
      
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'qlsvlab'

        });
        con.connect((err)=> {
            if (err) {
                reject(err);
            }
            resolve(con);
        });
    });
};
module.exports.closeDB = (con) => {
    console.log('close db');
    con.destroy();
};


module.exports.testPromise = (name='', ms = 0) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Loi hua '+name +'sau khi tam dung'+ ms + 'ms, da lam xong');
        },ms);
        
    });
};