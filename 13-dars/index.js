// !! data set, setmap, map

let now = new Date();
let hours = now.getHours();
let minut = now.getMinutes();
let year = now.getFullYear();
let localDay = now.getDay();
let month = now.getMonth();
let day = now.getDate();
let getLocalTime = hours >= 12 ? "PM" : "AM";
let dayNames = ["Yak", "Dush", "Sesh", "Chor", "Pay", "Juma", "Shan"];
let monthNames1 = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];
let monthNames2 = [
  "Yan",
  "Fev",
  "Mar",
  "Apr",
  "May",
  "Iyun",
  "Iyul",
  "Avg",
  "Sen",
  "Okt",
  "Noy",
  "Dek",
];

const getTime = (str) => {
  if (str == "LT") {
    return `${hours}:${minut} ${getLocalTime}`;
  } else if (str == "LL") {
    let monthname = monthNames1[month];
    return `${monthname} ${day},${year}`;
  } else if (str == "LTS") {
    let LocalTime = now.toLocaleTimeString();
    return LocalTime;
  } else if (str == "l") {
    let localMonth = now.toLocaleDateString();
    return localMonth;
  } else if (str == "L") {
    let localNumber = month < 10 ? `0${month}` : month;
    return `${day}/${localNumber}/${year}`;
  } else if (str == "ll") {
    let oyName = monthNames2[month];
    return `${oyName} ${day}, ${year}`;
  } else if (str == "llll") {
    let getLocalTime = hours >= 12 ? "PM" : "AM";
    let oyName = monthNames1[month];
    let kunName = dayNames[localDay];
    return `${kunName}, ${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
  } else if (str == "LLL") {
    let getLocalTime = hours >= 12 ? "PM" : "AM";
    let monthname = monthNames1[month];
    return `${monthname} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
  } else if (str == "lll") {
    let getLocalTime = hours >= 12 ? "PM" : "AM";
    let oyName = monthNames2[month];
    return `${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
  } else if (str == "LLLL") {
    let getLocalTime = hours >= 12 ? "PM" : "AM";
    let oyName = monthNames1[month];
    let kunName = dayNames[localDay];
    return `${kunName}, ${oyName} ${localDay}, ${year} ${hours}:${minut} ${getLocalTime}`;
  }
};
console.log(getTime("LTS"));
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
