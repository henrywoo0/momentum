const h1 = document.querySelector(".hello h1");

function handleMouseEnter() {
  h1.innerText = "Mouse is here!!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone😂😂";
}

function handleOnClick() {
  h1.style.color = "white";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("WIFI Connected!!");
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.onclick = handleOnClick;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
