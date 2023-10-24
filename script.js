"use strict";

const btn = document.querySelectorAll("button");

btn.forEach(e => {
  e.addEventListener("click", function () {
    e.parentElement.classList.toggle("active");
  });
});