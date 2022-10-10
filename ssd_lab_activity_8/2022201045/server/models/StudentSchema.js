// const mongoose = require('mongoose')

// let Schema = mongoose.Schema
// const StudentSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true
//         },
//         roll: {
//             type: Number,
//             required: true
//         },
//         programme: {
//             type: String,
//             required: true
//         },
//         courses: {
//             type: Array
//         }
//     },
//     { timestamps: true }
// )

// const Student = mongoose.model('Student', StudentSchema)

// module.exports = Student


const mongoose = require('mongoose')

let Schema = mongoose.Schema
const StudentSchema = new Schema(
    {
        exam_name: {
            type: String,
            required: true
        },
        course_name: {
            type: String,
            required: true
        },
        question_num: {
            type: Number,
            required: true
        },
        ta_roll: {
            type: String,
            required: true
        },
        std_roll: {
            type: String,
            required: true
        },
        ta_comment: {
            type: String,
            required: true
        },
        std_comment: {
            type: String,
            required: true
        },
        IsActive: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student

// exam_name: String
// ▪ course_name: String
// ▪ question_num: Number
// ▪ ta_roll: String
// ▪ std_roll: String
// ▪ ta_comment: String
// ▪ std_comment: String
// ▪ IsActive: Boolean