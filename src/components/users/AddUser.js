import React,{useState} from 'react';
import axios from "axios";

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email : "",
        phone: "",
        webiste : ""
    });
    
    const {name, username, email, phone, website} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
    };
    return (
        <div className="container">
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group my-2">
                        <input type="text" className='form-control form-control-lg' placeholder='Enter your name' name='name' value={name} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-2">
                        <input type="text" className='form-control form-control-lg' placeholder='Enter your Username' name='username' value={username} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-2">
                        <input type="email" className='form-control form-control-lg' placeholder='Enter your E-mail Address' name='email' value={email} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group my-2">
                        <input type="text" className='form-control form-control-lg' placeholder='Enter your Phone Number' name='number' value={phone} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-2">
                        <input type="text" className='form-control form-control-lg' placeholder='Enter your Website Name' name='website' value={website} onChange={e => onInputChange(e)}/>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Add User</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser;