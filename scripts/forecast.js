//this is the API key  that is needed to be sent with the request to get the data
const key ='uAyusOKvLBAPpE6GfEQGkm0yVgSou3DH';

//sendin the first request to get the city
const getCity= async (city)=>{
    //this is the city resourse 
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

getCity('london')
    .then((data)=> console.log(data))
    .catch((err)=>console.log(err));

//Change this !!