import React from 'react'
import pic from "../images/pic.jpg"
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';


const Details = () => {
    const location = useLocation();
    const { id, name, email } = location.state.data;
    return (
        <>
            <div className='ui card centered'>
                <div className='ui image'>
                    <img src={pic} />
                </div>
                <div className='ui content'>
                    <h4>Name : <a>{name}</a></h4>
                    <h4>Email : <a>{email}</a></h4>
                </div>

            </div>
            <div className='center-div' style={{ textAlign: 'center' }} >
                <Link to='/' >
                    <button className='ui button blue '   >Back to contactlist</button>
                </Link>
            </div>
        </>
    )
}

export default Details