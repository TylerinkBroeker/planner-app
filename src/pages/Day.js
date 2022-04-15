import { useState, useEffect } from 'react';
import DayTable from "../components/DayTable";
import useFetch from '../hooks/useFetch';

const Day = () => {
    const { data: items, isPending, error } = useFetch('http://localhost:8000/tasks');



    return (

        <div>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
           {items && <DayTable items={items} title={"Today's List!"} />}
        </div>
    );
}

export default Day;