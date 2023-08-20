const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

document.querySelectorAll('.currentDate').forEach((el) => {
  el.textContent = formattedDate;
});