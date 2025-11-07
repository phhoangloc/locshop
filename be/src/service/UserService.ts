import { IUserRepository } from "../repository/IRepository"
import { decode, encode } from "../ult/bscrypt"
import { generateToken } from "../ult/jwt"
import { sendMailToAcceptRegister } from "../ult/mail"
import { validate } from "../ult/validate"
const iUserRepository = new IUserRepository()
export class UserService {

    async find(query: any) {
        const result = iUserRepository.find(query)
        return result
    }

    async findFirst(params: any) {
        const result = iUserRepository.findFirst(params)
        return result
    }

    async create(body: any) {
        const password_encode = encode(body.password)
        const newBody = { ...body }
        newBody.password = password_encode
        const validateResult = await validate(newBody)
        if (validateResult) {
            return validateResult
        }
        try {
            await iUserRepository.create(newBody)
            await sendMailToAcceptRegister(newBody.email)
            return "please check email to active account"
        } catch (err) {
            throw err
        }

    }

    async active(query: any) {
        const users = await iUserRepository.find({ email: query.email })
        const id = users[0]?.id
        if (!id) {
            return "this email is not existed"
        }
        try {
            await iUserRepository.update(id, { active: true })
            return "your account is active"
        } catch (err) {
            throw err
        }

    }
    async login(body: any) {

        const users = await iUserRepository.find({ username: body.username })
        const id = users[0]?.id
        if (!id) {
            throw Error("this username is not existed")
        }
        const active = users[0]?.active
        if (!active) {
            throw Error("this account is not active")
        }
        const password = users[0]?.password
        if (!password) {
            throw Error
        }
        const isPasswordCorrect = decode(body.password, password)
        if (!isPasswordCorrect) {
            throw Error("this password is not correct")
        }
        try {
            const isToken = await generateToken(id)
            const token = isToken ? isToken : ""
            return token
        } catch (error) {
            throw error
        }

    }
}