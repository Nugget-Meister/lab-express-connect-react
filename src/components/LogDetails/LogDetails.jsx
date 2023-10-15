import React from 'react';
import LogCard from './LogCard';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL

const LogDetails = () => {

    const [ log, updateLog ] = useState({})
    const { index } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/logs/${index}`)
        .then(res => res.json())
        .then(json => updateLog(json))
    }, [])

    // console.log(log)

    return (
        <div className='LogDetails'>
            <LogCard log={log}/>
            <section>
                <button onClick={() => navigate("/logs")}>Back</button>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        </div>
    );
}

export default LogDetails;
