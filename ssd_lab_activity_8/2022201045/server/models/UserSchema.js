// const mongoose = require('mongoose')

// let Schema = mongoose.Schema
// const UserSchema = new Schema(
//     {
//         email: {
//             type: String,
//             required: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         date: {
//             type: Date,
//             default: Date.now,
//         },
//     },
//     {
//         timestamps: true
//     }
// )

// const User = mongoose.model('User', UserSchema)

// module.exports = User



const mongoose = require('mongoose')

let Schema = mongoose.Schema
const UserSchema = new Schema(
    {
        roll: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User



