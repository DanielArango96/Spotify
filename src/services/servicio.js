//Comsumiendo API

//1.Declarar una variable url del api 

let url="//api.spotify.com/v1/artists/1To9XZOmBJgqfVfUCRK0OI/top-tracks?market-US"

//2.ALMACENAR UNA O MAS VARIABLES CON LOS DATOS DE CONTROL
let token= "Bearer BQAlHDHvncDxIODsv6W_tQMbFcEmbTU3r-QYbzsfkVPDEbIJbqZjwHZbayGOTR2oe-eRgKRmygYOvYGxL7egGqGExtozl0zDPAD3BBVWWVbCISTsIHc"


//3.CONSTRUIR LA PETICION QUE SE VA A ENVIAR 
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }

}


//4. Ejecutar el consumo del API
fetch(url.peticion)
.then(function(){})
.then(function(){})
.catch(function(){})