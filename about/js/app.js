//Name inserting into p
let text = '{"names":[' + '{"firstName": "Maksim", "lastName": "Vlasov"}]}';

const obj = JSON.parse(text);
document.getElementById("name").innerHTML = 
obj.names[0].firstName + " " + obj.names[0].lastName;

//location
const map = document.getElementById("map");
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        map.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    map.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
