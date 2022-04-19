import bcrypt from "bcrypt";

const saltRounds = 12;

async function encrypt(password){
    return await bcrypt.hash(password,saltRounds);
}

async function decrypt(password,hashedPassword){
    return await bcrypt.compare(password,hashedPassword);
}

export default {
    encrypt,
    decrypt
};