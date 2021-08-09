setInterval(() => {

    var time = new Date();

    var hour = time.getHours();
    hour = checkTime(hour);

    var min = time.getMinutes();

    var sec = time.getSeconds();

    var hr_rot = hour*30 + min/2;
    var min_rot = min*6;
    var sec_rot = sec*6;

    document.getElementById('hour').style.transform = `rotate(${hr_rot}deg)`;
    document.getElementById('minute').style.transform = `rotate(${min_rot}deg)`;
    document.getElementById('second').style.transform = `rotate(${sec_rot}deg)`;

}, 1000);

function checkTime(i) {
  if (i > 12) {
    i = i - 12;
  }
  return i;
}
