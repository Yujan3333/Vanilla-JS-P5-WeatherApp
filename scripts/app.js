//this is for DOM manipulation

const cityForm = document.querySelector('form');
const card= document.querySelector('.card');
const details= document.querySelector('.details');
const time=document.querySelector("img.time")
const icon= document.querySelector(".icon img")

//change in the DOM
const updateUI = (data)=>{
    //assigning the values to the varible for convenince
    // const cityDetails=data.cityDetails;
    // const weather=data.weather;

    //Using Destructuring Properties, "variable name" and "data object property" should have the same name for this to work
    const {cityDetails , weather}=data;

    //update the details template

    //we get the EnglishName and WeatherText from the cityDetails and weather object
    // console.log(cityDetails) do for more info
    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">

    
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `; 
    // In above weather.Temperature.Metric.Value is a property of weather

    //update the night and day and icon images

    //here WeatherIcon is a property of weather
    const iconSource= `/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSource); 

    let timeSource=null;
    if(weather.IsDayTime){
        timeSource = '/img/day.svg'
    }else{
        timeSource = '/img/night.svg'
    };
    time.setAttribute('src',timeSource);

    //removing the display none css property
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};


//this function connects this with forecast.js gets the city info through API req
const updateCity =async (city) =>{

    // we use await because getCity is async function ,, awaits will we get value and puts in cityDetails
    const cityDetails= await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    //returning the objects with two parameters
    return {
        // cityDetails:cityDetails,
        // here the object name and value is same so we can write only the value as well
        cityDetails,
        // weather: weather
        //same thing done as above
        weather
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
    .then(data=> updateUI(data))
    .catch(err=>console.log(err));
});