import React, {useEffect} from 'react';
import axios from 'axios';

export function LayoutPage() {

    useEffect(() => {
        axios.get('https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/tasks').then(response => {
            console.log(response);
        })
    }, [])

    return (

        <div>
            đã login thành công!
        </div>
    );
}