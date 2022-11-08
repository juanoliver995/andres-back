import User from "../models/Usuario.js"

const register = async (req, res) => {
    try {
        const user = new User(req.body)
        const userStored = await user.save()
        res.json(userStored)

    } catch (error) {
        console.log(error)
    }


}

const users = (req, res) => {
    try {
        res.json(userStored)

    } catch (error) {
        console.log(error)
    }


}

const login = async (req, res) => {
    const { body } = req
    const { username, password } = await body
    const user = await User.findOne({ username })
    const passwordCorrect = user === null
        ? false
        : await password

    if (!passwordCorrect) {
        res.status(401).json({ error: 'invalid user or password' })
    }
    if (passwordCorrect) {
        res.send({
            name: user.name
        })
    }

}

export { register, users, login }