import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogForm = ({index, type}) => {

    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()

    const [ log, updateLog ] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    useEffect(() => {
        if(index) {
            fetch(`${API}/logs/${index}`)
            .then(res => res.json())
            .then(json => updateLog(json))
        }
    }, [])

    // console.log(log.mistakesWereMadeToday)


    const updateLogRequest = (log) => {
        const options = {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {"Content-Type":"application/json"}
        }

        return fetch(`${API}/logs/${index}`, options)
        .then(res => res.json())
        .then(json => navigate("/logs"))
        .catch(err => console.log(err))
    }


    const newLogRequest = (log) => {
        const options = {
            method: "POST",
            body: JSON.stringify(log),
            headers: {"Content-Type": "application/json"}
        }
        return fetch(`${API}/logs`, options)
        .then(res => res.json())
        .then(json => navigate("/logs"))
    }


    const handleChange = (e) => {
        e.target
        updateLog({
            ...log,
            [e.target.id] : e.target.value
        })
    }

    const handleCheckBoxChange = () => {
        updateLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(type)
        switch (type) {
            case "new":
                console.log(type)
                newLogRequest(log)
                break;
            case "update":
                console.log(type) 
                updateLogRequest(log)
                break;
            default:
                console.log("invalid type selected")
        }
    }


    
    return (
        <form  className="LogForm"  onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name:</label>
            <input type="text" 
                onChange={handleChange} 
                id="captainName"
                value={log.captainName} required
            /> <br />
            <label htmlFor="title">Title:</label>
            <input type="text" 
                onChange={handleChange} 
                id="title"
                value={log.title} required
            /> <br />
            <label htmlFor="post">Post:</label>
            <input type='text' 
                onChange={handleChange} 
                id="post"
                value={log.post} required
            /> <br />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input type="text" 
                onChange={handleChange} 
                id="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis} required
            /> <br />
            <label htmlFor="title">Mistakes were Made Today:</label>
            <input type="checkbox" 
                onChange={handleCheckBoxChange} 
                id="mistakesWereMadeToday"
                checked={log.mistakesWereMadeToday} 
            /> <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LogForm;
