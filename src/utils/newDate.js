const daysWeek = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
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
  "December",
];
export function newDate() {
  const date = new Date();
  const { day, dayWeek, month, year } = {
    day: date.getDate(),
    dayWeek: daysWeek[date.getDay()],
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };

  return `${dayWeek}, ${month} ${day}, ${year}`;
}
