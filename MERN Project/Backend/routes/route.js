const express = require('express');
const router = express.Router();

const Student = require('./../models/user');

router.post('/students', async (req, res) => {
    try {
        const studentData = req.body;
        const data = new Student(studentData);
        await data.save();
        res.status(200).json({
            message : "Student Details Created successfully",
            student : studentData
        })
    } catch (error) {
        res.status(400).json({
            message : "Failed to create Student details",
            error : error.message
        })
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            message : "Student Details Fetched successfully",
            data : students
        })
    } catch (error) {
        res.status(400).json({
            message : "Failed to fetch Student details",
            error : error.message
        })
    }

})

router.get('/students/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const students = await Student.findOne({rollNo : rollNo});
        if (students) {
            res.status(200).json({
                message : "Student Details Fetched successfully",
                data : students
            })
        } else {
            res.status(200).json({
                message : "Student Details Not Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message : "Failed to fetch Student details",
            error : error.message
        })
    }

})


router.put('/students/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const {name, marks} = req.body
        const newData = await Student.findOneAndUpdate({rollNo:rollNo}, {name, marks}, {new : true});
        if (newData) {
            res.status(200).json({
                message : "Student Details Updated successfully",
                data : newData
            })
        } else {
            res.status(200).json({
                message : "Student Details Not Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message : "Failed to update Student details",
            error : error.message
        })
    }
})

router.delete('/students/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const newData = await Student.findOneAndDelete({rollNo:rollNo});
        if (newData) {
            res.status(200).json({
                message : "Student Details Deleted successfully"
            })
        } else {
            res.status(200).json({
                message : "Student Details Not Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message : "Failed to Delete Student details",
            error : error.message
        })
    }
})


module.exports = router;