import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setusers(result.data);
    }

    return (

        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'>View</Link>
                                        <Link className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <Link className='btn btn-danger'>Delete</Link>

                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;