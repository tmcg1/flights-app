import { useEffect, useState } from "react";
import './Seats.css';
import { useParams } from "react-router-dom";

function Seats() {
    const [seats, setSeats] = useState([]);
    const [suggestWindowSeat, setSuggestWindowSeat] = useState(false);
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/seats?id=${id}&suggestWindowSeat=${suggestWindowSeat}&numberOfSeats=${numberOfSeats}`)
            .then(response => response.json())
            .then(data => setSeats(data));
    }, [suggestWindowSeat, numberOfSeats]);

    function handleCheckboxClick() {
        setSuggestWindowSeat(!suggestWindowSeat);
    }

    function increaseSeatNumber() {
        setNumberOfSeats(numberOfSeats + 1)
    }

    function decreaseSeatNumber() {
        if (numberOfSeats > 1)
            setNumberOfSeats(numberOfSeats - 1)
    }

    return (
        <>
            <h1>Seats</h1>
            <div>
                <input type="checkbox" onClick={handleCheckboxClick} />
                <label> Window seat</label>
            </div>
            <div className="number-of-seats">
                <label>Number of seats</label>
                <button onClick={decreaseSeatNumber}>-</button>
                {numberOfSeats}
                <button onClick={increaseSeatNumber}>+</button>
            </div>
            <div className="seats">
                {seats.map(seating =>
                    <div className={`seating ${seating.isTaken ? 'is-taken' : ''} ${seating.isSuggested ? 'is-suggested' : ''}`} key={seating.id}>
                        {seating.id}
                    </div>
                )}
            </div>
        </>
    );
}

export default Seats;
