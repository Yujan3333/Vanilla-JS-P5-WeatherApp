//this is for DOM manipulation

const cityForm = document.querySelector('form');

//this function connects this with forecast.js gets the city info through API req
const updateCity =async (city) =>{

    // we use await because getCity is async function ,, awaits will we get value and puts in cityDetails
    const cityDetails= await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    //returning the objects with two parameters
    return {
        cityDetails:cityDetails,
        weather: weather
    };
}

cityForm.addEventListener('submit',e =>{

    //prevent the refreshing the page 
    e.preventDefault();

    // going inside the children of form with name city and trim() removes the whitespaces
    const city = cityForm.city.value.trim();
    //resets the form
    cityForm.reset();

    //update UI with new city
    updateCity(city)
    .then(data=> console.log(data))
    .catch(err=>console.log(err));
});