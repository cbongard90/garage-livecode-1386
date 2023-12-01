console.log("Connected");

// Step 1 fetch all cars
let garageName = "garage-1386";
const garageURL = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;

// get the element with the class cars-list
const carsList = document.querySelector('.cars-list');


// Create a function to fetch the cars
const fetchAllCars = () => {
  console.log('fetch All cars connected');
  // We clear the data present in carsList
  carsList.innerHTML = '';
  // we call the server to fetch the data
  fetch(garageURL)
    // We get the response
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // we iterate on the array
      data.forEach((car) => {
        console.log(car);
        // we create the HTML
        const carHTML = `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p>
                <strong>Owner:</strong> ${car.owner}
              </p>
              <p>
                <strong>Plate:</strong> ${car.plate}
              </p>
            </div>
          </div>
        `
        // We insert the value inside the cars-list
        carsList.insertAdjacentHTML("afterbegin", carHTML);
      });
    })
}

fetchAllCars();
