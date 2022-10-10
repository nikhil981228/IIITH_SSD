import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3000/api/";

// functional component
function LoginForm(props) {
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Student");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    }
    

    return (
    <div className="center-div">
        <h1 className='text-center'>Login</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Roll no: </label>
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

            {/* <label className='m-2 form-label'>Role : </label>
            <br/>
            <input className='m-2 form-control' type="role" name="setRole" value={password} onChange={(e) => setRole(e.target.value)}/>
            <br/>           */}

        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll : roll, password : password, role : role })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setRoll("");
                setPassword("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_email", roll);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p> 
    </div>);
}

export default LoginForm;