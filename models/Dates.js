import mongoose from 'mongoose'

const dateSchema = mongoose.Schema({
    day: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    urlTickets: {
        type: String,
        required: false
    }
})

const Date = mongoose.model("Date", dateSchema)
export default Date