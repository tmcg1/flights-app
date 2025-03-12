import { useEffect, useState } from "react";
import './Seats.css';

function Seats() {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/seats')
            .then(response => response.json())
            .then(data => setSeats(data));
    }, []);

    return (
        <>
            <h1>Seats</h1>
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
