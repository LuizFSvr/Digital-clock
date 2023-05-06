const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let mnts = dateToday.getMinutes();
    let scnds = dateToday.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;
    if (mnts < 10) mnts = '0' + mnts;
    if (scnds < 10) scnds = '0' + scnds;

    hours.textContent = hrs;
    minutes.textContent = mnts;
    seconds.textContent = scnds;
})
