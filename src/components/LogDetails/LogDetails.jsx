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

    const deleteLogReq = (index) => {

        const options = {
            method: "DELETE",
        }
        if(confirm("Delete this message?")) {
            fetch(`${API}/logs/${index}`, options)
            .then(res => {
                alert("Bookmark deleted");
                navigate("/logs")
            })
            .catch( err => console.error())
        }
    }

    return (
        <div className='LogDetails'>
            <LogCard log={log}/>
            <section>
                <button onClick={() => navigate("/logs")}>Back</button>
                <button onClick={() => navigate(`/logs/${index}/edit`) }>Edit</button>
                <button onClick={() => deleteLogReq(index)}>Delete</button>
            </section>
        </div>
    );
}

export default LogDetails;
