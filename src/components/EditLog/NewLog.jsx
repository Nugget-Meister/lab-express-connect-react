import React from 'react';
import LogForm from './LogForm';

const NewLog = () => {
    return (
        <div>
            <h1>New Log</h1>
            <LogForm type={"new"} />
        </div>
    );
}

export default NewLog;
