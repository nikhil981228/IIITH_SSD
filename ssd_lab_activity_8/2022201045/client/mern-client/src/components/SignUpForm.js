import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../common.css"

const BACKEND_URI = "http://localhost:3000/api/";

// functional component
function SignUpForm(props) {
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");   
    const [role, setRole] = useState("Student");   
    return (
    <div className="center-div">
        <h1 className='text-center'>Re-Eval Portal</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Roll Number: </label>
            <br/>
            <input className='m-2 form-control' type="text" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>   

            <label for="role">Select Role: <br/> <br/> </label>
            <select name="role" id="role"  value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Student">Student</option>
                <option value="TA">TA</option>
            </select>
            <br/> 
            <br/> 

        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll : roll, password : password, role : role })
                };

                var res = await fetch(BACKEND_URI + "register", requestOptions);
                alert((await res.json())["msg"]);
                setRoll("");
                setPassword("");
            }}>Sign Up</button>
            <br/>
            <p className='m-4'>Already Registered ? <Link to='/login'> Login Here</Link></p> 
    </div>);
}

export default SignUpForm;