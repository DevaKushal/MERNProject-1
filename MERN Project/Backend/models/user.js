const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        rollNo : {
            type : String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true
        },
        marks : {
            type : Number,
            required : false
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;