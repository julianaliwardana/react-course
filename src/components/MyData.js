import React, { useState, useEffect } from 'react';
import './MyData.css';

export default function MyData() {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch(" https://gorest.co.in/public/v2/users")
        .then(res => res.json())
        .then(
            (result) => {
                setData(result);
            },
            (error) => {
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>{error.message}</div>
    } else {
        return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
        );
    }
}

// function MyData() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//     fetch(" https://gorest.co.in/public/v2/users")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setIsLoaded(true);
//                 setItems(result);
//             },
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         )
//     }, [])

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <ul>
//             {items.map(item => (
//                 <li key={item.id}>
//                 {item.name} {item.email}
//                 </li>
//             ))}
//             </ul>
//         );
//     }
// }

// export default MyData;