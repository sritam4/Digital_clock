let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let date=time.getDate();
let month=time.getMonth();
let day=time.getDay();
let hours = h % 12;
hours = hours ? hours : 12;
let ampm = h >= 12 ? 'PM' : 'AM';

let months={
  0:'JAN',
  1:'FEB',
  2:'MAR',
  3:'APR',
  4:'MAY',
  5:'JUN',
  6:'JUL',
  7:'AUG',
  8:'SEP',
  9:'OCT',
  10:'NOV',
  11:'DEC'
}

let days={
  0:'SUN',
  1:'MON',
  2:'TUE',
  3:'WED',
  4:'THU',
  5:'FRI',
  6:'SAT'
}

document.getElementById("date-container").innerHTML = date+"-"+months[month]+" ("+days[day]+")";

// function to update the Time Every second
function currtime() {
  if (s == 59) {
    m++;
    s = -1;
  }
  if (m == 60) {
    m = 0;
    h ++;
    if(h==24){
      h=0;
    }
    ampm = h >= 12 ? 'PM' : 'AM';
    hours = h % 12;
    hours = hours ? hours : 12;
  }
  s++;
  document.getElementById("sec").innerHTML = s < 10 ? "0" + s : s;
  document.getElementById("min").innerHTML = m < 10 ? "0" + m : m;
  document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("ampm").innerHTML = ampm;

  let colon=document.getElementsByTagName("p");
  // colon[0].classList.toggle("blink");
  colon[1].classList.toggle("blink");
  // console.log(colon);
  
}

setInterval(currtime, 1000);


console.log(h)
console.log(m)
console.log(s)
console.log(ampm)