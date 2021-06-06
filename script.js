// footer 

const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const todaydate = dayName + ", " + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById('date').textContent = todaydate;
document.getElementById("year").innerHTML = d.getFullYear();


// banner


if (dayName == "Friday") {
    document.getElementById("friday-banner").style.display = "block";
}
else {
    document.getElementById("friday-banner").style.display = "none";
}

// menu

const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// fonts

WebFont.load({
    google: {
      families: [
         'Open Sans', 'Pathway Gothic One'
      ]
    }
  });

//

// windchill

let t = parseFloat(document.getElementById('temperature').textContent);
let s = parseFloat(document.getElementById('wind-speed').textContent);

let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

if (t <= 50 && s > 3) {
     wc = Math.round(wc);
  } 
else {
     wc = "N/A";
  }

document.getElementById('wind-chill').innerHTML = wc;
