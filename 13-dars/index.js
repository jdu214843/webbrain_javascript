// !! data set, setmap, map

const getTime = (str) => {
  let now = new Date();
  if (str == "LT") {
    let hours = now.getHours();
    let minut = now.getMinutes();
    let getLocalTime = hours >= 12 ? "PM" : "AM";

    console.log(`${hours}:${minut} ${getLocalTime}`);
  } else if (str == "LL") {
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let monthnames = [
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
    let monthname = monthnames[month];
    console.log(`${monthname} ${day},${year}`);
  } else if (str == "LTS") {
    let LocalTime = now.toLocaleTimeString();
    console.log(LocalTime);
  } else if (str == "l") {
    let localMonth = now.toLocaleDateString();
    console.log(localMonth);
  } else if (str == "L") {
    let localDay = now.getMonth();
    let getLocalDay = now.getDate();
    let localYear = now.getFullYear();
    let localNumber = localDay < 10 ? `0${localDay}` : localDay;
    console.log(`${localNumber}/${getLocalDay}/${localYear}`);
  } else if (str == "ll") {
    let getMonthll = now.getMonth();
    let getDatell = now.getDate();
    let getYearll = now.getFullYear();
    const monthNamesll = [
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
    oynamell = monthNamesll[getMonthll];
    console.log(`${oynamell} ${getDatell}, ${getYearll}`);
  } else if (str == "llll") {
    let localDayllll = now.getDay();
    let localMonthllll = now.getMonth();
    let localDatellll = now.getDate();
    let localYearllll = now.getFullYear();
    let hoursllll = now.getHours();
    let minutllll = now.getMinutes();
    let getLocalTimellll = hoursllll >= 12 ? "PM" : "AM";
    const dayNames = ["Yak", "Dush", "Sesh", "Chor", "Pay", "Juma", "Shan"];
    const monthNames = [
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
    oyName = monthNames[localMonthllll];
    kunName = dayNames[localDayllll];
    console.log(
      `${kunName}, ${oyName} ${localDatellll}, ${localYearllll} ${hoursllll}:${minutllll} ${getLocalTimellll}`
    );
  }
};
getTime("ll");

// ?? LT
// ?? LTS
// ?? L
// ?? l
// ?? ll
// !! LLL
// !! lll
// !! LLLL
// ?? llll
