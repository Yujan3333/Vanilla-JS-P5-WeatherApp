//this is the API key  that is needed to be sent with the request to get the data
const key ='uAyusOKvLBAPpE6GfEQGkm0yVgSou3DH';

// get weather information from about the city inputted by the user
//takes the key from the place API
const getWeather= async (id)=>{
    //goto Current Conditions on API reference in accuweather
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch( base + query);
    const data = await response.json();
    //returns the first data object of the array
    return data[0];
}




//sendin the first request to get the city
const getCity= async (city)=>{
    //this is the city resourse, goto API reference Location APi and text search
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    //look inthe website to see the parameters required
    // ? should be used this determines the query parameter
    const query=`?apikey=${key}&q=${city}`;

    //returns pormise
    const response= await fetch(base + query);
    const data= await response.json();

    //this returns the closet match of the city which is the first value
    return data[0];
}

// getCity('Kathmandu').then((data)=> {
//     return getWeather(data.Key);
//     }).then((data)=> console.log(data))
//     .catch((err)=>console.log(err));


