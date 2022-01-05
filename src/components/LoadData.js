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


    return (
        <div>
            <h4>Planetary Coordinates With Respect to Sun</h4>
            { loading ? (<h4>loading positional data</h4>) :
            (Object.entries(data).map(([key,val])=> {

            return (
                
                <ol key = {key}>
                <ol>Planet: {key}</ol>
                <ol>Declination: {val.declination}</ol>
                <ol>Distance from Sun (AU): {val.distance_au_from_sun}</ol>
                <ol>Right Ascension: {val.right_ascension}</ol>
                <ol>X Coordinate: {val.x_coord}</ol>
                <ol>Y Coordinate: {val.y_coord}</ol>
                <ol>Z Coordinate: {val.z_coord}</ol>
            </ol>
            )
            },
            ))
        }

        </div>
    );



}

export default GetData;