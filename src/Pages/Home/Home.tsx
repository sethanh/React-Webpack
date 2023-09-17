import {HOST} from '@Utils/Constants';
import React, {useEffect} from 'react';
import {useLoaderData} from 'react-router-dom';

function Home() {
    const inititalData = useLoaderData();
    console.log(inititalData, HOST);
    return <div>Home</div>;
}

export default Home;
