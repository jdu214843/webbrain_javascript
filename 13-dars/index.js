// !! data() set(), distruction Json

let now = new Date();
let hours = now.getHours();
let minut = now.getMinutes();
let year = now.getFullYear();
let localDay = now.getDay();
let month = now.getMonth();
let day = now.getDate();
let getLocalTime = hours >= 12 ? "PM" : "AM";
let getMonth = now.getMonth() + 1;
let dayNames = [
  "SunDay",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Juny",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let localNumber = getMonth < 10 ? `0${getMonth}` : getMonth;
let LocalTime = now.toLocaleTimeString();
let localMonth = now.toLocaleDateString("ru-Uz");
let monthname = monthNames[month];
let oyName = monthNames[month];
let kunName = dayNames[localDay];
let oyName1 = monthNames[month].slice(0, 3);
let kunName1 = dayNames[localDay].slice(0, 3);

function getData(str) {
  switch (str) {
    case "LT":
      return `${hours}:${minut} ${getLocalTime}`;
    case "LTS":
      return LocalTime;
    case "L":
      return `${day}/${localNumber}/${year}`;
    case "l":
      return localMonth;
    case "ll":
      return `${oyName1} ${day}, ${year}`;
    case "LL":
      return `${monthname} ${day},${year}`;
    case "LLL":
      return `${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
    case "lll":
      return `${oyName1} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
    case "LLLL":
      return `${kunName}, ${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
    case "llll":
      return `${kunName1}, ${oyName1} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
    default:
      console.log("bu turdagi qiymat mavjud emas");
  }
}
getData("llll");
// ?? LT
// ?? LTS
// ?? L
// ?? l
// ?? ll
// ?? LL
// ?? LLL
// ?? lll
// ?? LLLL
// ?? llll
// const getTime = (str) => {
//   if (str == "LT") {
//     return `${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LL") {
//     return `${monthname} ${day},${year}`;
//   } else if (str == "LTS") {
//     return LocalTime;
//   } else if (str == "l") {
//     return localMonth;
//   } else if (str == "L") {
//     return `${day}/${localNumber}/${year}`;
//   } else if (str == "ll") {
//     return `${oyName1} ${day}, ${year}`;
//   } else if (str == "llll") {
//     return `${kunName1}, ${oyName1} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LLL") {
//     return `${monthname} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "lll") {
//     return `${oyName1} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LLLL") {
//     return `${kunName}, ${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else {
//     return "bu turdagi qiymat mavjud emas";
//   }
// };
// console.log(getTime("llll"));
// ?? LT
// ?? LTS
// ?? L
// ?? l
// ?? ll
// ?? LL
// ?? LLL
// ?? lll
// ?? LLLL
// ?? llll

function getGroup(data) {
  let res = {};
  data.filter((value) => {
    if (!res[value.title]) {
      res[value.title] = [];
    }
    res[value.title].push(value);
  });
  return res;
}
console.log(getGroup(list));
