import React from 'react';
import { Link } from 'react-router-dom';

const Log = ({log, index}) => {
    return (
       <tr>
        <td>{log.mistakesWereMadeToday == true ? "❌" : ""}</td>
        <td>{log.captainName}</td>
        <Link to={`/logs/${index}`}>
            <td>{log.title}</td>
        </Link>
       </tr>
    );
}

export default Log;
