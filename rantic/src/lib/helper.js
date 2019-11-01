const bcrypt = require('bcryptjs');

const helpers = {};

/**
 * Metodo para el cifrado de contraseña
 */
helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash; 
};

/**
 * Compara passwords en la base de datos
 */
helpers.matchPassword = async (password, savedPassword) => {
    try{
        return await bcrypt.compare(password, savedPassword);
    } catch(e){
        console.log(e);
    }
};

module.exports = helpers;