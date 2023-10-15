import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BASE_URL

import Log from './Log';

const Logs = () => {

    const [ logs, setLogs ] = useState([])


useEffect(() => {
    fetch(`${API}/logs`)
    .then(res => res.json())
    .then(json => setLogs(json))
}, [])
console.log(logs)

    return (
        <div className='Logs'>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Mistakes</th>
                                <th>Captain Name</th>
                                <th>See this Log</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, index) => {
                                return <Log key={index} log={log} index={index}/>
                            })}
                        </tbody>
                    </table>
                </section>
        </div>
    );
}

export default Logs;
