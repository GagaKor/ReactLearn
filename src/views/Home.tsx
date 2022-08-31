import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import api from '../utils/api';
const Home = () => {

    const [data, setData] = useState();

    const fetchData = async ()=>{
        const res = await api.main();
        console.log(1);
        setData(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <h1>Home</h1>
            <div><b>{data}</b></div>
            <div>
                <Link to="/boards">Boards</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to='/signup'>SignUp</Link>
            </div>
        </>
    )
    
    
}

export default Home