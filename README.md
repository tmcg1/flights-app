# Flights Frontend 

First run API: https://github.com/tmcg1/FlightAPI

Run the project from the terminal with `npm i` and then `npm start`.

The project has 2 views:

**/flights** -> shows all the flights and lets them filter by from/to/departure/price parameters.

**/seats/:id** -> shows all seats, red ones are taken, green is available and yellow is suggested seat. It is possible to get suggestions for window seats and also select how many seats you want to get.

Since available seats are generated randomly, it means when selecting filters the available seats change each time - in real world where it comes from db the seats do not change.

Most challenging part was learning React since previously I have been coding in plain JS/HTML/CSS.

