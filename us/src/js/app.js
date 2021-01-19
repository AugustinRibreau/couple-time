const date = document.getElementById("date");
const time = document.getElementById("time");
const now = new Date();
const content = document.getElementById("content");
const love = document.getElementById("love");
const main = document.getElementById("main");
const nowDateYMD =
  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();

// Error when minute is 1 or 2, for fix add 0 before, like 01 or 02.
now.getMinutes() < 10
  ? (time.value = now.getHours() + ":0" + now.getMinutes())
  : (time.value = now.getHours() + ":" + now.getMinutes());
date.value = nowDateYMD;

love.addEventListener("click", function () {
  let userDate = date.value.split("-");
  let userTime = time.value.split(":");

  let userValue = new Date(
    userDate[0],
    userDate[1] - 1,
    userDate[2],
    userTime[0],
    userTime[1]
  );

  // No date, no continue
  if(
      now.getFullYear() < userValue.getFullYear() ||
      now.getFullYear() <= userValue.getFullYear() && now.getMonth() < userValue.getMonth() ||
      now.getFullYear() <= userValue.getFullYear() && now.getMonth() <= userValue.getMonth() && now.getDate() < userValue.getDate() ||
      now.getFullYear() <= userValue.getFullYear() && now.getMonth() <= userValue.getMonth() && now.getDate() <= userValue.getDate() && now.getHours() < userValue.getHours() ||
      now.getFullYear() <= userValue.getFullYear() && now.getMonth() <= userValue.getMonth() && now.getDate() <= userValue.getDate() && now.getHours() <= userValue.getHours() && now.getMinutes()< userValue.getMinutes()){
    return;
  }

  if(userDate[0] === "" || userTime[0] === ""){
    return;
  }
  content.style.animation = "wave 1s";
  setTimeout(() => {
    setDataLove(userValue);
    document.getElementById("content_body").classList.remove("d-none")
  }, 1500);
});

function setDataLove(userDate) {
  document.getElementById("differenceYear").innerHTML = changeStatusNumber(now.getFullYear() - userDate.getFullYear());
  document.getElementById("differenceMonth").innerHTML = changeStatusNumber((now.getMonth() + 1) - (userDate.getMonth() + 1));
  document.getElementById("differenceDate").innerHTML = changeStatusNumber((now.getDate()) - (userDate.getDate()));
  document.getElementById("differenceHours").innerHTML = changeStatusNumber((now.getHours()) - (userDate.getHours()));
  document.getElementById("differenceMinutes").innerHTML = changeStatusNumber((now.getMinutes()) - (userDate.getMinutes()));
}

function changeStatusNumber(number){
  return (number < 0) ? number * -1 : number;
}