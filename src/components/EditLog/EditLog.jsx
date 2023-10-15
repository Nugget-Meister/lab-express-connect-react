import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogForm from './LogForm'; 


const EditLog = () => {

    const { index } = useParams()

    const navigate = useNavigate()

    

    return (
        <div className='EditLog'>
            <h1>Edit Log</h1>
            <LogForm index={index} type={"update"}/>
        </div>
    );
}

export default EditLog;
