var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + " " + hours + " "
  + minutes + " " + seconds + " ";


  if(seconds==1){
    document.getElementById("rep4").innerHTML =  "Second"
  }
  else{
    document.getElementById("rep4").innerHTML =  "Seconds"
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "THE TIME IS HERE";
  }
}, 1000);

document.getElementById("section3-text1").onclick=function(){
  document.getElementById("display-text").innerHTML="Confirming your acceptance guarantees the job is yours. Usually there are other candidates in the process at this point so ensure you are committed adipiscing elit.";
}
document.getElementById("section3-text2").onclick=function(){
  document.getElementById("display-text2").innerHTML="Dolor eros porta enim, eu volutpat metus massa in nulla. Etiam sit amet risus tempus, facilisis augue a, feugiat dui. Quisque consequat quis risus sit amet condimentum.";
}
document.getElementById("section3-text3").onclick=function(){
  document.getElementById("display-text3").innerHTML="Maecenas fermentum maximus felis, vel pharetra nulla mattis at. Praesent metus sem, convallis malesuada nisi dapibus, sagittis egestas magna.";
}
document.getElementById("section3-text4").onclick=function(){
  document.getElementById("display-text4").innerHTML="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames.";
}


function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

document.getElementById("section3-text1").addEventListener('click', function onClick(event) {

  document.body.style.backgroundColor = 'green';

});