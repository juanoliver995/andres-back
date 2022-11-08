import Dates from "../models/Dates.js"

const dates = async (req, res) => {
    const dates = await Dates.find()

    res.json(dates)
}

const newDate = async (req, res) => {
    const date = new Dates(req.body)
    try {
        const storedDate = await date.save()
        res.json(storedDate)
    } catch (error) {
        console.log(error)
    }
    console.log(req.body)
}

const date = async (req, res) => {
    const { id } = req.params

    const date = await Dates.findById(id)

    if (!date) {
        return res.status(404).json({ msg: "no encontrado" })
    }

    res.json(date)
}

const updateDate = async (req, res) => {
    const { id } = req.params

    const date = await Dates.findById(id)

    if (!date) {
        return res.status(404).json({ msg: "no encontrado" })
    }

    date.day = req.body.day || date.day
    date.month = req.body.month || date.month
    date.province = req.body.province || date.province
    date.country = req.body.country || date.country
    date.club = req.body.club || date.club
    date.urlTickets = req.body.urlTickets || date.urlTickets

    try {
        const storedDate = await date.save()
        res.json(storedDate)
    } catch (error) {
        console.log(error)
    }

}
const deleteDate = async (req, res) => {
    const { id } = req.params

    const date = await Dates.findById(id)

    if (!date) {
        return res.status(404).json({ msg: "no encontrado" })
    }

    try {
        await date.deleteOne()
        res.json({ msg: "proyecto eliminado" })
    } catch (error) {
        console.log(error)
    }

}

export { dates, newDate, updateDate, deleteDate, date }