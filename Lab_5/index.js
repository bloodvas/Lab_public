const url =' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let city = document.getElementById('city');
let gender = document.getElementById('gender');
let dob = document.getElementById('dob');
let phone = document.getElementById('phone');
let btn = document.getElementById('btn');


btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  username.innerHTML = profile.results[0].login.username; 
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  gender.innerHTML = profile.results[0].gender;
  phone.innerHTML = profile.results[0].phone;
  dob.innerHTML = profile.results[0].dob.date + " Возраст:" + profile.results[0].dob.age ;
  return 1;
}

function printError (error){
  console.log(error);
}