// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
const data = useLoaderData()
    // const [data, setData] = useState({});
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/learnervivek') 
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((err) => {
    //             console.error('Error fetching data:', err);
    //             setError(err.message);
    //         });
    // }, []);

    // if (error) {
    //     return <div className="text-center text-red-500">Error: {error}</div>;
    // }

    return (
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
            <p>UserID: {data.login|| null}</p>
            <p>Name: {data.name|| null}</p>
            <p>Github followers: {data.followers || 0}</p>
            <p>Company: {data.company|| null}</p>
            {data.avatar_url && (
                <img src={data.avatar_url} alt="Github avatar" width={300} />
            )}
        </div>
    );
}

export default Github;
export const githubInfoLoader=async()=>{
    const response =await  fetch('https://api.github.com/users/learnervivek')
    return response.json()
}