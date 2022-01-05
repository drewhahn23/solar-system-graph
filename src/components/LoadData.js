import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetData = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const response = await axios.get("https://space-api-drew.herokuapp.com/positions");

            setData(response.data);

            setLoading(false);
        }

        loadPost();


    },[]);

}

export default GetData;