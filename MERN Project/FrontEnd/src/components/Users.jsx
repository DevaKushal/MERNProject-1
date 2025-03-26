import { useState } from "react"
import './Users.css'
import axios from "axios"

const Users = () => {

    const [userForm, setUserForm] = useState({
        name : '',
        rollNo : '',
        marks : ''
    })

    const [students, setStudents] = useState([])

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUserForm({...userForm, [name]:value})
    }

    const handleAddUser = async () => {
        const {name, rollNo, marks} = userForm;
        if (name !== "" && rollNo !== "" && marks !== "") {
            try {
                await axios.post('http://localhost:8000/students', userForm);
                setUserForm({
                    name : '',
                    rollNo : '',
                    marks : ''
                })
                getUsers()
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("Enter Name, RollNo or Marks")
        }
    }

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/students');
            setStudents(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Users Component</h1>

            <div className="formContainer">
                <input type="text" name="name" value={userForm.name} onChange={handleInput} placeholder="Enter Name" />
                <input type="text" name="rollNo" value={userForm.rollNo} onChange={handleInput} placeholder="Enter Roll No" />
                <input type="text" name="marks" value={userForm.marks} onChange={handleInput} placeholder="Enter Marks" />
                <button onClick={handleAddUser}>Add User</button>
            </div>

            <button onClick={getUsers}>Get Users</button>

            <div className="cardContainer">
                {students.map((student, index) => {
                    return (
                        <div key={index} className="card">
                            <div>{student.name}</div>
                            <div>{student.rollNo}</div>
                            <div>{student.marks}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Users