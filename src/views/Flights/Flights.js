import { useEffect, useState } from "react";
import './Flights.css';
import { useNavigate } from "react-router-dom";

function Flights() {
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();

    function handleClick() {
        navigate("/seats");
    }

    useEffect(() => {
        fetch('http://localhost:8080/flights')
            .then(response => response.json())
            .then(data => setFlights(data));
    }, []);

    return (
        <>
            <h1 className="title">Flights</h1>
            {flights.map(flight =>
                <div className="card" key={flight.id} onClick={handleClick}>
                    <div>{flight.from}</div>
                    <div>{flight.to}</div>
                    <div>{flight.departure}</div>
                </div>
            )}
        </>
    );
}

export default Flights;
