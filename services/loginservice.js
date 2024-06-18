const db_connection = require('../db');
const bcrypt = require('bcrypt');

// authenticate user module
const authUser = async (email, password) => {
    try {
        // query the database for the credentials provided
        const [user] = await db_connection.query('SELECT * FROM users WHERE email = ?', [email]);

        // check if user exists
        if (user.length === 0) {
            return { message: 'User not found' };
        }

        const userData = user[0];
        const hashedPasswordFromDatabase = userData.password; // Retrieved hashed password from database

        // compare passwords using bcrypt
        const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDatabase);

        if (passwordMatch) {
            // Passwords match
            if (userData.email === email) {
                return { message: `Welcome ${userData.firstName}`, data: userData };
            } else {
                return { message: 'Incorrect Email' };
            }
        } else {
            // Passwords do not match
            return { message: 'Incorrect Password' };
        }
    } catch (error) {
        // log and return any errors
        console.error('Error authenticating user:', error);
        return { message: error.message };
    }
};

// export module
module.exports = { authUser };
