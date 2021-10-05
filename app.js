const h1 = document.querySelector(".hello h1");

function handleMouseEnter() {
  h1.innerText = "Mouse is here!!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone😂😂";
}

function handleOnClick() {
  h1.style.color = "blue";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.onclick = handleOnClick;
