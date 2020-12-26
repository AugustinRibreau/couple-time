const date = document.getElementById("date");
const time = document.getElementById("time");
const now = new Date();
const nowFormat =
  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
const timeNowFormat = now.getHours() + ":" + now.getMinutes();
date.value = nowFormat;
time.value = timeNowFormat;
