// !! data() set(), get()

let now = new Date();
let hours = now.getHours();
let minut = now.getMinutes();
let year = now.getFullYear();
let localDay = now.getDay();
let month = now.getMonth();
let day = now.getDate();
let getLocalTime = hours >= 12 ? "PM" : "AM";
let dayNames = ["Yak", "Dush", "Sesh", "Chor", "Pay", "Juma", "Shan"];
let dayNames2 = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
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

// const getTime = (str) => {
//   if (str == "LT") {
//     return `${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LL") {
//     let monthname = monthNames1[month];
//     return `${monthname} ${day},${year}`;
//   } else if (str == "LTS") {
//     let LocalTime = now.toLocaleTimeString();
//     return LocalTime;
//   } else if (str == "l") {
//     let localMonth = now.toLocaleDateString("ru-Uz");
//     return localMonth;
//   } else if (str == "L") {
//     let localNumber = month < 10 ? `0${month}` : month;
//     return `${day}/${localNumber}/${year}`;
//   } else if (str == "ll") {
//     let oyName = monthNames2[month];
//     return `${oyName} ${day}, ${year}`;
//   } else if (str == "llll") {
//     let getLocalTime = hours >= 12 ? "PM" : "AM";
//     let oyName = monthNames2[month];
//     let kunName = dayNames[localDay];
//     return `${kunName}, ${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LLL") {
//     let getLocalTime = hours >= 12 ? "PM" : "AM";
//     let monthname = monthNames1[month];
//     return `${monthname} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "lll") {
//     let getLocalTime = hours >= 12 ? "PM" : "AM";
//     let oyName = monthNames2[month];
//     return `${oyName} ${day}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   } else if (str == "LLLL") {
//     let getLocalTime = hours >= 12 ? "PM" : "AM";
//     let oyName = monthNames1[month];
//     let kunName = dayNames2[localDay];
//     return `${kunName}, ${oyName} ${localDay}, ${year} ${hours}:${minut} ${getLocalTime}`;
//   }
// };
// console.log(getTime("LLLL"));

function getData(str) {
  switch (str) {
    case "LT":
      let getLocalTime1 = hours >= 12 ? "PM" : "AM";

      console.log(`${hours}:${minut} ${getLocalTime1}`);
      break;
    case "LTS":
      let LocalTime = now.toLocaleTimeString();
      console.log(LocalTime);
      break;
    case "L":
      let localNumber = month < 10 ? `0${month}` : month;
      console.log(`${day}/${localNumber}/${year}`);
      break;
    case "l":
      let localMonth = now.toLocaleDateString("ru-Uz");
      console.log(localMonth);
      break;
    case "ll":
      let oyName1 = monthNames2[month];
      console.log(`${oyName1} ${day}, ${year}`);
      break;
    case "LL":
      let monthname = monthNames1[month];
      console.log(`${monthname} ${day},${year}`);
    case "LLL":
      let getLocalTime2 = hours >= 12 ? "PM" : "AM";
      let oyName2 = monthNames2[month];
      let kunName1 = dayNames[localDay];
      console.log(
        `${kunName1}, ${oyName2} ${localDay}, ${year} ${hours}:${minut} ${getLocalTime2}`
      );
      break;
    case "lll":
      let getLocalTime3 = hours >= 12 ? "PM" : "AM";
      let oyName3 = monthNames2[month];
      console.log(
        `${oyName3} ${day}, ${year} ${hours}:${minut} ${getLocalTime3}`
      );
      break;
    case "LLLL":
      let getLocalTime4 = hours >= 12 ? "PM" : "AM";
      let oyName4 = monthNames1[month];
      let kunName2 = dayNames[localDay];
      console.log(
        `${kunName2}, ${oyName4} ${day}, ${year} ${hours}:${minut} ${getLocalTime4}`
      );
      break;
    case "llll":
      let getLocalTime5 = hours >= 12 ? "PM" : "AM";
      let oyName5 = monthNames2[month];
      let kunName3 = dayNames[localDay];
      console.log(
        `${kunName3}, ${oyName5} ${day}, ${year} ${hours}:${minut} ${getLocalTime5}`
      );
  }
}

getData("LLLL");

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
