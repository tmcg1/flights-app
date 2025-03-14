import { useEffect, useState } from "react";
import './Flights.css';
import { useNavigate } from "react-router-dom";

function Flights() {
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();
    const [fromFilter, setFromFilter] = useState("")
    const [toFilter, setToFilter] = useState("")
    const [departureFilter, setDepartureFilter] = useState("")
    const [priceFilter, setPriceFilter] = useState("")

    function handleClick() {
        navigate("/seats");
    }

    useEffect(() => {
        fetch(`http://localhost:8080/flights?from=${fromFilter}&to=${toFilter}&departure=${departureFilter}&price=${priceFilter}`)
            .then(response => response.json())
            .then(data => setFlights(data));
    }, [fromFilter, toFilter, departureFilter, priceFilter]);

    function handleFromFilter(e) {
        setFromFilter(e.target.value)
    }

    function handleToFilter(e) {
        setToFilter(e.target.value)
    }

    function handleDepartureFilter(e) {
        setDepartureFilter(e.target.value)
    }

    function handlePriceFilter(e) {
        setPriceFilter(e.target.value)
    }

    return (
        <>
            <h1 className="title">Flights</h1>
            <div>
                <label>From: </label>
                <input onChange={handleFromFilter}></input>
            </div>
            <div>
                <label>To: </label>
                <input onChange={handleToFilter}></input>
            </div>
            <div>
                <label>Departure time: </label>
                <input onChange={handleDepartureFilter}></input>
            </div>
            <div>
                <label>Price: </label>
                <input onChange={handlePriceFilter}></input>
            </div>
            {flights.map(flight =>
                <div className="card" key={flight.id} onClick={handleClick}>
                    <div>{flight.from}</div>
                    <div>{flight.to}</div>
                    <div>{flight.departure}</div>
                    <div>{flight.price}€</div>
                </div>
            )}
        </>
    );
}

export default Flights;
