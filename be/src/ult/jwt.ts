import { sign } from "jsonwebtoken";

export const generateToken = async (id: number) => {
    const payload = { id };
    if (process.env.SECRETTOKEN) {
        return sign(payload, process.env.SECRETTOKEN)
    } else {
        return "you must provide the secret token"
    }

};
