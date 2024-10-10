import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    try {

        const saltRounds = 6;

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}



export const comparePassword = async (password, hashPassword) => {
    const comparedPassword = await bcrypt.compare(password, hashPassword)
    return comparedPassword;
}


