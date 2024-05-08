import React,{useState, useEffect} from 'react';
import axios from "axios";

const Home = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        console.log("kaisa hai bro?");
    },[] );

    return(

        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
            </div>
        </div>
    )
}
export default Home;