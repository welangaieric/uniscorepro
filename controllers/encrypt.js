const bcrypt = require('bcrypt');

const encrypt = async (value, saltRounds = 10) => {
    if (!value) {
        throw new Error('Value must be provided for encryption');
    }

    try {
        // Generate a salt with specified rounds asynchronously
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password using the generated salt
        const hash = await bcrypt.hash(value, salt);

        // Return the hashed password
        return hash;
    } catch (err) {
    
        console.error('Error encrypting password:', err);
        throw new Error('Encryption failed: ' + err.message); 
    }
};

module.exports = encrypt;
